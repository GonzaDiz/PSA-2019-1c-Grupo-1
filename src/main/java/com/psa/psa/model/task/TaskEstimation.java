package com.psa.psa.model.task;

import com.psa.psa.model.resources.Resource;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

public class TaskEstimation {

    private Resource resource;
    private Integer hours;
    private LocalDateTime date;

    public TaskEstimation(Resource resource, Integer hours){
        this.resource = resource;
        this.hours = hours;
        this.date = LocalDateTime.now();
    }

    public Resource getResource(){
        return resource;
    }

    public Integer getHours(){
        return hours;
    }

    public LocalDateTime getDate(){
        return this.date;
    }

}
