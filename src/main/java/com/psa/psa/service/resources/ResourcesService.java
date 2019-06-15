package com.psa.psa.service.resources;

import com.psa.psa.controllers.api.CreateResourceRequest;
import com.psa.psa.dao.resources.ResourcesDAO;
import com.psa.psa.model.resources.Resource;
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

    public Resource getResourceById(Long id) {
        return this.resourcesDAO.getById(id).orElseThrow(() -> new HttpClientErrorException(HttpStatus.NOT_FOUND));
    }

    public Collection<Resource> getAllResources() {
        return this.resourcesDAO.getAll();
    }
}
