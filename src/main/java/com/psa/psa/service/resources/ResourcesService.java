package com.psa.psa.service.resources;

import com.psa.psa.controllers.api.CreateResourceRequest;
import com.psa.psa.dao.resources.ResourcesDAO;
import com.psa.psa.model.resources.Resource;
import com.psa.psa.model.resources.Role;
import com.psa.psa.model.resources.Seniority;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;

import java.util.Collection;
import java.util.List;

@Service
public class ResourcesService {

    @Autowired
    private ResourcesDAO resourcesDAO;

    public void createResource(CreateResourceRequest request) {

    }

    public Resource getResourceByCuit(Long cuit) {
        return this.resourcesDAO.getByCuit(cuit).orElseThrow(() -> new HttpClientErrorException(HttpStatus.NOT_FOUND));
    }

    public void createNewResource(String name, Long cuit, Integer salary, Seniority seniority, Integer limweekhours,
                                  Integer workload, List<Role> roles) {
        this.resourcesDAO.createNewResource(name, cuit, salary, seniority, limweekhours, workload, roles);
    }

    public Collection<Resource> getAllResources() {
        return this.resourcesDAO.getAll();
    }
}
