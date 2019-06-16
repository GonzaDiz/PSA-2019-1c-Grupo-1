package com.psa.psa.model.task;

import com.psa.psa.model.resources.Resource;

import java.time.Duration;
import java.time.LocalDateTime;

public class Task {

    private Integer id;
    private String name;
    private String title;
    private String description;
    private TaskState taskState;
    private Duration estimatedTimeToComplete;
    private Duration dedicatedHoursToComplete;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private String assignedTo;
    
    
    
    public Task(Integer id, String name) {
    	this.id = id;
        this.name = name;
        assignedTo=null;
    }

    //Solo para pruebas
    public Task() {
        this.id = -1;
        this.name = "Untitled";
    }

    public Integer getId(){
        return this.id;
    }


    public String getName() {
    		return this.name;
    }
    
    public void changeName(String name) {
    		this.name = name;
    }
    
    public boolean assign(String resource) {
        if (!this.isAssigned()) {
            this.assignedTo = resource;
            return true;
        }
        return false;
    }


    public void assign(Resource resource){
        this.assignedTo = resource.getName();
    }
    public void unassign() {
    		this.assignedTo=null;
    }
    
    public boolean isAssigned() {
        return (assignedTo != null);
    }
    
    public String getAssignedResource() {
    		return this.assignedTo;
    }
    
}