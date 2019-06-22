package com.psa.psa.model.resources;

import java.util.ArrayList;
import java.util.List;

public class Resource {

    private Integer id;
    private Long cuit;
    private String name;
    private Integer salary;
    private Seniority seniority;
    private Integer limWeekHours;
    private Integer workload;
    private List<Role> roles;
    private List<ResourceHistory> resourceHistories = new ArrayList<>();
    private Integer HoursWorkedPerMonth;

    public Resource(){}
    public Resource(String name, Long cuit){
        this.name = name;
        this.cuit = cuit;
        this.salary = 0;
        this.seniority = Seniority.TBD;
        this.limWeekHours = 40;
        this.workload = 0;
        List<Role> roles = new ArrayList<>();
        roles.add(Role.TBD);
        this.roles = roles;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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

    public Integer getSalary() {
        return salary;
    }

    public void setSalary(Integer salary) {
        this.salary = salary;
    }

    public Seniority getSeniority() {
        return seniority;
    }

    public void setSeniority(Seniority seniority) {
        this.seniority = seniority;
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

    public List<Role> getRoles() {
        return roles;
    }

    public void setRoles(List<Role> roles) {
        this.roles = roles;
    }

    public List<ResourceHistory> getResourceHistories() {
        return resourceHistories;
    }

    public void setResourceHistories(List<ResourceHistory> resourceHistories) {
        this.resourceHistories = resourceHistories;
    }

    public void setHoursWorked(int hours) {
        HoursWorkedPerMonth = hours;
    }

    public Long getCost() {
        return this.salary*this.HoursWorkedPerMonth;
    }

    public Integer getHoursWorked() {
        return this.HoursWorkedPerMonth;
    }
}
