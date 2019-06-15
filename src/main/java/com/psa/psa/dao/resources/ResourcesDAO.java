package com.psa.psa.dao.resources;

import com.psa.psa.model.resources.Resource;
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

    public Resource createNewResource(String name, Long cuit) {
        Resource newResource = new Resource(name, cuit);
        newResource.setId(resources.size());
        resources.put(cuit, newResource);

        return newResource;
    }
}
