package com.psa.psa.model.resources;

import java.util.ArrayList;
import java.util.List;

public class Resource {

    private Long cuit;
    private String name;
    private Integer salary;
    private Seniority seniority;
    private Integer limWeekHours;
    private Integer workload;
    private List<Role> roles;

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

    public void printDebug() {
        System.out.println("Nombre: " + this.name + "\n" + "CUIT: " + this.cuit + "\n" + "Salario: " + this.salary + "\n" +
                            "Seniority: " + this.seniority + "\n" + "Horas Semanales: " + this.limWeekHours + "\n" +
                            "Carga Semanal: " + this.workload + "\n" + "Roles: " +  this.roles);
    }
}
