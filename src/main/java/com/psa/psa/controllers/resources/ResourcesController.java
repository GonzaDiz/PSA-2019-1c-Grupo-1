package com.psa.psa.controllers.resources;

import com.psa.psa.controllers.api.CreateResourceRequest;
import com.psa.psa.dao.resources.ResourcesDAO;
import com.psa.psa.model.resources.Resource;
import com.psa.psa.service.resources.ResourcesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.HttpClientErrorException;

import javax.validation.constraints.Null;
import java.util.Map;

@Controller
public class ResourcesController {

    @Autowired
    private ResourcesService resourcesService;

    @RequestMapping(value = "/resources", method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity createNewResource(@RequestBody Map<String,String> payload) {
        if (payload.get("name").isEmpty() || payload.get("cuit").isEmpty()) {
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }

        Long cuit;

        try {
            cuit = Long.parseLong(payload.get("cuit"));
        } catch ( NumberFormatException e) {
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }

        this.resourcesService.createNewResource(payload.get("name"), cuit);
        return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(value = "/resources/{cuit}", method = RequestMethod.GET)
    @ResponseBody
    public Resource getByCuit(@PathVariable Long cuit) {
        return resourcesService.getResourceByCuit(cuit);
    }

    @RequestMapping(value = "/resources", method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity getAllResources() {
        return new ResponseEntity(HttpStatus.OK);
    }
}
