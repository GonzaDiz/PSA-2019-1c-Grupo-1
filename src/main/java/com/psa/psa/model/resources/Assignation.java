package com.psa.psa.model.resources;

import com.psa.psa.model.project.Project;

import java.time.LocalDate;

public class Assignation {

    private Project project;
    private Role role;
    private LocalDate startDate;
    private LocalDate endDate;
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

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public Integer getDedication() {
        return dedication;
    }

    public void setDedication(Integer dedication) {
        this.dedication = dedication;
    }
}
