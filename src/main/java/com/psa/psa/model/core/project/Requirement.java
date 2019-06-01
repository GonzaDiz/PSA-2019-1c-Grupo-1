package com.psa.psa.model.core.project;

import com.psa.psa.model.core.project.Requirement;

public class Requirement{

    String name;
    String description;
    RequirementPriority priority;

    public Requirement(String aName, String aDescription){
        this.name = aName;
        this.description = aDescription;
        this.priority = RequirementPriority.UNDEFINED;
    }

    public Requirement(String aName, String aDescription, RequirementPriority aPriority){
        this.name = aName;
        this.description = aDescription;
        this.priority = aPriority;
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
