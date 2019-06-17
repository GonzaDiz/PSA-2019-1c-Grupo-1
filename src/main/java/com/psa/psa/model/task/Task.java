package com.psa.psa.model.task;

import com.psa.psa.model.resources.Resource;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Stack;

public class Task {

    private Integer id;
    private String name;
    private String description;
    private HashMap<Resource,Integer> dedicatedHours;
    private Stack<TaskEstimation> estimations;
    private Stack<TaskStateChange> taskStates;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private String assignedTo;
    
    
    
    public Task(Integer id, String name) {

    	this.id = id;
        this.name = name;
        assignedTo=null;
        estimations = new Stack<TaskEstimation>();
        taskStates = new Stack<TaskStateChange>();
        dedicatedHours = new HashMap<Resource,Integer>();
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

    public HashMap<Resource,Integer> getDedicatedHours(){
        return dedicatedHours;
    }

    public Integer getTotalDedicatedHours(){
        Integer sum = 0;
        for (Integer hours: dedicatedHours.values()){
            sum+=hours;
        }
        return sum;
    }

    public TaskEstimation estimate(Resource resource, Integer hours){
        if (hours<0){
            throw new RuntimeException("Invalid estimation");
        }
        TaskEstimation estimation = new TaskEstimation(resource,hours);
        estimations.push(estimation);
        return estimation;
    }

    public TaskEstimation getCurrentEstimation(){
        return estimations.peek();
    }

    public TaskState getCurrentState(){
        if (taskStates.empty()) {
            return TaskState.BACKLOG;
        } else {
            return taskStates.peek().getNewState();
        }
    }

    public TaskState setState(Resource resource, TaskState newState){
        if (getCurrentState() != newState){
            taskStates.push(new TaskStateChange(resource,newState));
        }
        return newState;
    }

}