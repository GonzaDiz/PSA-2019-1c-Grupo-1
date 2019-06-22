package com.psa.psa.model.task.ticket;

import java.time.Duration;

public class Incident {

    private Long id;
    private Duration estimatedTimeToSolve;
    private String state;
    private String urgency;
    private Double impact;
    private String description;
    private Duration timeSpentInSolving;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Duration getEstimatedTimeToSolve() {
        return estimatedTimeToSolve;
    }

    public void setEstimatedTimeToSolve(Duration estimatedTimeToSolve) {
        this.estimatedTimeToSolve = estimatedTimeToSolve;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getUrgency() {
        return urgency;
    }

    public void setUrgency(String urgency) {
        this.urgency = urgency;
    }

    public Double getImpact() {
        return impact;
    }

    public void setImpact(Double impact) {
        this.impact = impact;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Duration getTimeSpentInSolving() {
        return timeSpentInSolving;
    }

    public void setTimeSpentInSolving(Duration timeSpentInSolving) {
        this.timeSpentInSolving = timeSpentInSolving;
    }
}
