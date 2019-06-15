package com.psa.psa.model.resources;

public class Resource {

    private Integer id;
    private Long cuit;
    private String name;
    private Integer salary;
    private Seniority seniority;
    private Integer limWeekHours;
    private Integer workload;
    private Roles roles;

    public Resource(){}
    public Resource(String name, Long cuit){
        this.name = name;
        this.cuit = cuit;
        this.salary = 0;
        this.seniority = Seniority.TBD;
        this.limWeekHours = 40;
        this.workload = 0;
        this.roles = Roles.TBD;
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

    public Roles getRoles() {
        return roles;
    }

    public void setRoles(Roles roles) {
        this.roles = roles;
    }
}
