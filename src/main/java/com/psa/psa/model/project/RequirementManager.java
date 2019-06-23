package com.psa.psa.model.project;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;

public class RequirementManager {

    private Integer nextId;
    private HashMap<Integer, Requirement> byId;
    private HashMap<String, Requirement> byName;

    public RequirementManager(){
        nextId = 0;
        this.byId = new HashMap<Integer, Requirement>();
        this.byName = new HashMap<String, Requirement>();
    }

    public Requirement addRequirement(String name, String description, RequirementPriority priority){
        if (byName.containsKey(name) || name.isEmpty()){
            return null;
        }
        Requirement newRequirement = new Requirement(nextId,name,description,priority);
        byId.put(newRequirement.getId(),newRequirement);
        byName.put(newRequirement.getName(),newRequirement);
        nextId+=1;
        return newRequirement;
    }

    public Requirement getById(Integer id){
        return this.byId.get(id);
    }

    public Requirement getByName(String name){
        return this.byName.get(name);
    }

    public Collection<Requirement> getByPriority(RequirementPriority priority){
        Collection<Requirement> result = new ArrayList<Requirement>();
        for (Requirement req: byId.values()){
            if (req.getPriority() == priority){
                result.add(req);
            }
        }
        return result;
    }

    public Collection<Requirement> getAll(){
        return this.byId.values();
    }
}
