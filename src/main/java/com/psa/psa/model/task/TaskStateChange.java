package com.psa.psa.model.task;

import com.psa.psa.model.resources.Resource;

public class TaskStateChange {
    private Resource resource;
    private TaskState newState;

    public TaskStateChange(Resource resource, TaskState state){
        this.resource = resource;
        this.newState = state;
    }

    public Resource getResource() {
        return resource;
    }

    public TaskState getNewState() {
        return newState;
    }
}
