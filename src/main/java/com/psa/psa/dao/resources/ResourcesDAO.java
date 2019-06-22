package com.psa.psa.dao.resources;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.psa.psa.model.resources.Resource;
import com.psa.psa.model.resources.Seniority;
import com.psa.psa.model.resources.Role;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public class ResourcesDAO {

    private Map<Long, Resource> resources = new HashMap();

    public void save(Resource resource) {
        this.resources.put(resource.getCuit(), resource);
    }

    public Optional<Resource> getByCuit(Long cuit) {
        return Optional.ofNullable(this.resources.get(cuit));
    }

    public Collection<Resource> getAll() {
        return this.resources.values();
    }

    public ResourcesDAO() {
        // RESOURCES MOCKS
        ArrayList roles = new ArrayList();
        roles.add(Role.AUTOMATION);
        roles.add(Role.DEVELOPER);

        Resource resource = new Resource("Jorge Okalandia", new Long(2038495749));
        resource.setSalary(120000);
        resource.setSeniority(Seniority.SEMI_SENIOR);
        resource.setLimWeekHours(45);
        resource.setRoles(roles);
        resources.put(resource.getCuit(), resource);

        Resource resource2 = new Resource("Ariel Alvarez Windey", new Long(2039574638));
        resource2.setSalary(90000);
        resource2.setSeniority(Seniority.JUNIOR);
        resource2.setLimWeekHours(30);
        resource2.setRoles(roles);
        resources.put(resource2.getCuit(), resource2);


        Resource resource3 = new Resource("Jorge Orsi", new Long(2048739276));
        resource3.setSalary(30000);
        resource3.setSeniority(Seniority.JUNIOR);
        resource3.setLimWeekHours(20);
        resource3.setRoles(roles);
        resources.put(resource3.getCuit(), resource3);


        Resource resource4 = new Resource("Gonzalo Diz", new Long(203964378));
        resource4.setSalary(90000);
        resource4.setSeniority(Seniority.JUNIOR);
        resource4.setLimWeekHours(45);
        resource4.setRoles(roles);
        resources.put(resource4.getCuit(), resource4);
    }

    public Resource createNewResource(String name, Long cuit, Integer salary, Seniority seniority, Integer limweekhours,
                                      Integer workload, List<Role> roles) {
        Resource newResource = new Resource(name, cuit);
        newResource.setSalary(salary);
        newResource.setSeniority(seniority);
        newResource.setLimWeekHours(limweekhours);
        newResource.setWorkload(workload);
        newResource.setRoles(roles);
        resources.put(cuit, newResource);

        return newResource;
    }

    public Resource updateResource(String name, Long cuit, Integer salary, Seniority seniority, Integer limweekhours,
                                      Integer workload, List<Role> roles) {
        resources.get(cuit).setName(name);
        resources.get(cuit).setSalary(salary);
        resources.get(cuit).setSeniority(seniority);
        resources.get(cuit).setLimWeekHours(limweekhours);
        resources.get(cuit).setWorkload(workload);
        resources.get(cuit).setRoles(roles);

        return resources.get(cuit);
    }
}
