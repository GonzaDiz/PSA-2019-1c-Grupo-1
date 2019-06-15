package com.psa.psa.controllers.api;

import com.psa.psa.model.resources.Role;
import com.psa.psa.model.resources.Seniority;

import java.util.ArrayList;
import java.util.List;

public class CreateResourceRequest {

    private Long cuit;
    private String name;
    private Integer salary;
    private String seniority;
    private Integer limWeekHours;
    private Integer workload;
    private List<String> roles;

    CreateResourceRequest() {
        cuit = Long.parseLong("0");
        name = "";
        salary = 0;
        seniority = "";
        limWeekHours = 0;
        workload = 0;
        roles = new ArrayList<String>();
    }

    public Long getCuit() {
        return cuit;
    }

    public void setCuit(Long cuit) {
        this.cuit = cuit;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSeniority() {
        return seniority;
    }

    public void setSeniority(String seniority) {
        this.seniority = seniority;
    }

    public Integer getSalary() {
        return salary;
    }

    public void setSalary(Integer salary) {
        this.salary = salary;
    }

    public Integer getLimWeekHours() {
        return limWeekHours;
    }

    public void setLimWeekHours(Integer limWeekHours) {
        this.limWeekHours = limWeekHours;
    }

    public Integer getWorkload() {
        return workload;
    }

    public void setWorkload(Integer workload) {
        this.workload = workload;
    }

    public void setRoles(List<String> roles) { this.roles = roles; }

    public List<String> getRoles() { return this.roles; }
}
