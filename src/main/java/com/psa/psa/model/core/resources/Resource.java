package com.psa.psa.model.core.resources;

import java.time.Duration;

public class Resource {

    private Long cuit;
    private String name;
    private Long salary;
    private Seniority seniority;
    private Duration weeklyHoursLimit;
    private Roles availableRoles;
    private Integer HoursWorkedPerMonth;

    public Resource(){}
    public Resource(String name, Long cuit){
        this.name = name;
        this.cuit = cuit;
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

    public Long getSalary() {
        return salary;
    }

    public void setSalary(Long salary) {
        this.salary = salary;
    }

    public Seniority getSeniority() {
        return seniority;
    }

    public void setSeniority(Seniority seniority) {
        this.seniority = seniority;
    }

    public Duration getWeeklyHoursLimit() {
        return weeklyHoursLimit;
    }

    public void setWeeklyHoursLimit(Duration weeklyHoursLimit) {
        this.weeklyHoursLimit = weeklyHoursLimit;
    }

    public Roles getAvailableRoles() {
        return availableRoles;
    }

    public void setAvailableRoles(Roles availableRoles) {
        this.availableRoles = availableRoles;
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
