package com.psa.psa.controllers.healthcheck;

import com.psa.psa.model.Project;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HealthCheck {

    @RequestMapping(value = "/health-check")
    @ResponseBody
    public Project healthCheck() {
        return new Project("ABM", "In Progress");
    }
}
