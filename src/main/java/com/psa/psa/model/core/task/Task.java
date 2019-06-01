package com.psa.psa.model.core.task;

import java.time.Duration;
import java.time.LocalDateTime;

public class Task {

    private Long id;
    private String name;
    private String title;
    private String description;
    private TaskState taskState;
    private Duration estimatedTimeToComplete;
    private Duration dedicatedHoursToComplete;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private String assignedTo;
    
    
    
    public Task(String name) {
    		this.name = name;
    }
    
    public Task() {
    		this.name = "Untitled";
    }
    
    public String getName() {
    		return this.name;
    }
    
    public void changeName(String name) {
    		this.name = name;
    }
    
    public void assign(String resource) {
    		if (!this.isAssigned()) {
    			this.assignedTo = resource;
    		}
    }
    
    public void unassign() {
    		this.assignedTo=null;
    }
    
    public boolean isAssigned() {
    		return !this.assignedTo.isEmpty();
    }
    
    public String getAssignedResource() {
    		return this.assignedTo;
    }
    
}