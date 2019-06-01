package com.psa.psa.model.core.project;

import com.psa.psa.model.core.risk.Risk;

import java.time.LocalDateTime;

public class Project {

    private Double id;
    private String name;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private ProjectState projectState;
    private String proyectType;
    private Risk risk;

    public Project(String name) {
        this.name = name;
        this.startDate = LocalDateTime.now();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDateTime getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDateTime startDate) {
        this.startDate = startDate;
    }

    public LocalDateTime getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDateTime endDate) {
        this.endDate = endDate;
    }

    public ProjectState getProyectState() {
        return projectState;
    }

    public void setProyectState(ProjectState projectState) {
        this.projectState = projectState;
    }

    public String getProyectType() {
        return proyectType;
    }

    public void setProyectType(String proyectType) {
        this.proyectType = proyectType;
    }

    public ProjectState getProjectState() {
        return projectState;
    }

    public void setProjectState(ProjectState projectState) {
        this.projectState = projectState;
    }

    public Risk getRisk() {
        return risk;
    }

    public void setRisk(Risk risk) {
        this.risk = risk;
    }
}
