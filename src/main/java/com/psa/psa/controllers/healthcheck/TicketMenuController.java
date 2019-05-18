package com.psa.psa.controllers.healthcheck;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class TicketMenuController {

    @RequestMapping(value = "/ticket-menu")
    public String index() {
        return "index";
    }

}
