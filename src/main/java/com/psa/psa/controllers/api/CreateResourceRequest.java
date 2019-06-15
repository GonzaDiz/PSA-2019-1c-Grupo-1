package com.psa.psa.controllers.api;

public class CreateResourceRequest {

    private long cuit;
    private String name;
    private String seniority;
    private String salary;
    private Integer limWeekHours;
    private Integer workload;

    public long getCuit() {
        return cuit;
    }

    public void setCuit(long cuit) {
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

    public String getSalary() {
        return salary;
    }

    public void setSalary(String salary) {
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
}
