package com.psa.psa.controllers.healthcheck;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HealthCheck {

    @RequestMapping(value = "/health-check")
    @ResponseBody
    public String healthCheck() {
        return "Ok!";
    }
}
