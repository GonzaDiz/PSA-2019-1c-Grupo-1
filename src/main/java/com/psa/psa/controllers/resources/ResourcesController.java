package com.psa.psa.controllers.resources;

import com.psa.psa.controllers.api.CreateResourceRequest;
import com.psa.psa.model.resources.Resource;
import com.psa.psa.service.resources.ResourcesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@Controller
public class ResourcesController {

    @Autowired
    private ResourcesService resourcesService;

    @RequestMapping(value = "/resources", method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity createResource(@RequestBody CreateResourceRequest request) {
        return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(value = "/resources/{id}", method = RequestMethod.GET)
    @ResponseBody
    public Resource getById(@PathVariable Long id) {
        Resource resource = new Resource();
        resource.setName("Hola gabi");
        return resource;
    }

    @RequestMapping(value = "/resources", method = RequestMethod.GET)
    @ResponseBody
    public Collection<Resource> getAllResources() {
        return this.resourcesService.getAllResources();
    }
}
