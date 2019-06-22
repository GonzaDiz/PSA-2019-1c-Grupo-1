package com.psa.psa.controllers.resources;

import com.psa.psa.controllers.api.AssignResourceRequest;
import com.psa.psa.controllers.api.CreateResourceRequest;
import com.psa.psa.dao.resources.ResourcesDAO;
import com.psa.psa.model.resources.Resource;
import com.psa.psa.model.resources.ResourceHistory;
import com.psa.psa.model.resources.Role;
import com.psa.psa.model.resources.Seniority;
import com.psa.psa.service.resources.ResourcesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.HttpClientErrorException;

import javax.validation.Validation;
import javax.validation.ValidationException;
import javax.validation.constraints.Null;
import java.util.*;

@Controller
public class ResourcesController {

    @Autowired
    private ResourcesService resourcesService;

    @RequestMapping(value = "/resources", method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity createNewResource(@RequestBody CreateResourceRequest request) {
        if (request.getName().isEmpty() || request.getCuit() == 0) {
            return new ResponseEntity<>("Nombre y CUIT son campos obligatorios", HttpStatus.BAD_REQUEST);
        }

        List<Role> roles = new ArrayList<Role>();

        Seniority seniority = Seniority.fromDescription(request.getSeniority());

        Iterator iterator = request.getRoles().iterator();
        while(iterator.hasNext()) {
            roles.add(Role.fromDescription(iterator.next().toString()));
        }

        this.resourcesService.createNewResource(request.getName(), request.getCuit(), request.getSalary(), seniority,
                                                request.getLimWeekHours(), request.getWorkload(), roles);
        return new ResponseEntity<>("Usuario creado", HttpStatus.OK);
    }

    @RequestMapping(value = "/resources/{cuit}", method = RequestMethod.PUT)
    @ResponseBody
    public ResponseEntity modifyResource(@RequestBody CreateResourceRequest request, @PathVariable Long cuit) {
        try {
            resourcesService.getResourceByCuit(cuit);
        } catch (HttpClientErrorException e) {
            return new ResponseEntity<>("CUIT inexistente", HttpStatus.NOT_FOUND);
        }

        if (request.getName().isEmpty()) {
            return new ResponseEntity<>("Nombre es campo obligatorio", HttpStatus.BAD_REQUEST);
        }

        List<Role> roles = new ArrayList<Role>();

        Seniority seniority = Seniority.fromDescription(request.getSeniority());

        Iterator iterator = request.getRoles().iterator();
        while(iterator.hasNext()) {
            roles.add(Role.fromDescription(iterator.next().toString()));
        }

        this.resourcesService.updateResource(request.getName(), cuit, request.getSalary(), seniority,
                request.getLimWeekHours(), request.getWorkload(), roles);
        return new ResponseEntity<>("Usuario modificado", HttpStatus.OK);
    }

    @RequestMapping(value = "/resources/{cuit}", method = RequestMethod.GET)
    @ResponseBody
    public Resource getByCuit(@PathVariable Long cuit) {
        return resourcesService.getResourceByCuit(cuit);
    }

    @RequestMapping(value = "/resources/history/{cuit}", method = RequestMethod.GET)
    @ResponseBody
    public ResourceHistory getResourceHistory(@PathVariable Long cuit) {
        return resourcesService.getResourceHistory(cuit);
    }

    @RequestMapping(value = "/resources", method = RequestMethod.GET)
    @ResponseBody
    public Collection<Resource> getAllResources() {
        return this.resourcesService.getAllResources();
    }

    @RequestMapping(value = "/resources/assign", method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity assignResource(@RequestBody AssignResourceRequest request) {
        try {
            this.resourcesService.assignResource(request);
            return new ResponseEntity<>("Asignación realizada correctamente", HttpStatus.OK);
        } catch (ValidationException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }
}
