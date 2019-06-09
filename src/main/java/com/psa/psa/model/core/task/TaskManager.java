package com.psa.psa.model.core.task;

import java.util.HashMap;

public class TaskManager {
    private Integer nextId;
    private HashMap<String, Task> taskByName;
    private HashMap<Integer, Task> taskById;

    public TaskManager(){
        nextId = 0;
        taskById = new HashMap<Integer,Task>();
        taskByName = new HashMap<String, Task>();
    }

    public Task addTask(String name){
        if (taskByName.containsKey(name)){
            return null;
        }

        Task newTask = new Task(nextId, name);
        taskById.put(nextId,newTask);
        taskByName.put(name,newTask);
        nextId+=1;
        return newTask;
    }
}
