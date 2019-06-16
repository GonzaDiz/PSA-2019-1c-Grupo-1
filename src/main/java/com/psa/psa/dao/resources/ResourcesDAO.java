package com.psa.psa.dao.resources;

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
}
