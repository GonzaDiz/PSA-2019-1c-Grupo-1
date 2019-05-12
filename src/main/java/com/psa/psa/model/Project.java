package com.psa.psa.model;

import java.time.LocalDateTime;

public class Project {

    private Double id;
    private String name;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private ProyectState proyectState;
    private String proyectType;



    public Project(String name, String state) {
        this.name = name;
        this.state = state;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }
}
