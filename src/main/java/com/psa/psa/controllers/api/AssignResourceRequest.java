package com.psa.psa.controllers.api;

import java.time.LocalDateTime;

public class AssignResourceRequest {

    private String projectName;
    private String role;
    private String resourceName;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private Integer weekHours;

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getResourceName() {
        return resourceName;
    }

    public void setResourceName(String resourceName) {
        this.resourceName = resourceName;
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

    public Integer getWeekHours() {
        return weekHours;
    }

    public void setWeekHours(Integer weekHours) {
        this.weekHours = weekHours;
    }
}
