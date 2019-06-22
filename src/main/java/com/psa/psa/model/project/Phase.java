package com.psa.psa.model.project;

public class Phase {
    private String name;
    private String description;
    private Integer totalIterations;
    private Integer currentIteration;

    public Phase(String name){
        this.name = name;
        this.totalIterations = 1;
        this.currentIteration = 1;
    }

    public Phase setDescription(String description){
        this.description = description;
        return this;
    }

    public Phase addIteration(){
        this.totalIterations+=1;
        return this;
    }

    public Phase endIteration(){
        this.currentIteration+=1;
        if (currentIteration>totalIterations){
            totalIterations+=1;
        }
        return this;
    }

    public String getName(){
        return name;
    }

    public Integer getCurrentIteration(){
        return this.currentIteration;
    }

    public String getDescription(){
        return this.description;
    }

}
