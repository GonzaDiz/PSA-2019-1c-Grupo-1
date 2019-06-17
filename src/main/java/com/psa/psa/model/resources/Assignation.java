package com.psa.psa.model.resources;

import com.psa.psa.model.project.Project;

import java.time.LocalDateTime;

public class Assignation {

    private Project project;
    private Role role;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private Integer dedication;

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
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

    public Integer getDedication() {
        return dedication;
    }

    public void setDedication(Integer dedication) {
        this.dedication = dedication;
    }
}
