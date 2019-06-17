package com.psa.psa.model.project;

import org.springframework.web.bind.annotation.RequestMapping;

public class Requirement{

    private String name;
    private String description;
    private RequirementPriority priority;
    private Integer id;


    public Requirement(Integer id, String aName, String aDescription, RequirementPriority aPriority){
        this.name = aName;
        this.description = aDescription;
        if (aPriority != null){
            this.priority = aPriority;
        } else {
            this.priority = RequirementPriority.UNDEFINED;
        }
        this.id = id;
    }

    public Requirement(Integer id, String aName){
        this.name = aName;
        this.id = id;
        this.description = null;
        this.priority = RequirementPriority.UNDEFINED;
    }

    public Integer getId(){
        return this.id;
    }

    public String getName(){
        return this.name;
    }

    public String getDescription(){
        return this.description;
    }

    public RequirementPriority getPriority(){
        return this.priority;
    }

    public void setPriority(RequirementPriority newPriority){
        this.priority = newPriority;
    }
}
