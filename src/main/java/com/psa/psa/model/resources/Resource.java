package com.psa.psa.model.resources;

import java.util.ArrayList;
import java.util.List;

public class Resource {

    private Integer id;
    private Long cuit;
    private String name;
    private Integer salary = 120000;
    private Seniority seniority;
    private Integer limWeekHours;
    private Integer workload;
    private List<Role> roles;
    private ResourceHistory resourceHistory = new ResourceHistory();
    private Integer HoursWorkedPerMonth = 180;
    private String image = "https://intendentealvear.gob.ar/wp-content/uploads/2016/11/Fundador-Torcuato-de-Alvear-1-1-500x500.jpg";

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

    public ResourceHistory getResourceHistory() {
        return resourceHistory;
    }

    public void setResourceHistory(ResourceHistory resourceHistory) {
        this.resourceHistory = resourceHistory;
    }

    public void setHoursWorked(int hours) {
        HoursWorkedPerMonth = hours;
    }

    public Integer getCost() {
        return this.salary*this.HoursWorkedPerMonth;
    }

    public Integer getHoursWorked() {
        return this.HoursWorkedPerMonth;
    }

    public Integer getHoursWorkedPerMonth() {
        return HoursWorkedPerMonth;
    }

    public void setHoursWorkedPerMonth(Integer hoursWorkedPerMonth) {
        HoursWorkedPerMonth = hoursWorkedPerMonth;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
