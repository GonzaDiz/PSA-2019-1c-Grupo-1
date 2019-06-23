package com.psa.psa.model.task;

import com.psa.psa.model.project.Requirement;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Stack;

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

    public Collection<Task> getAllTasks(){
        return taskById.values();
    }

    public Task getTaskById(Integer id){
        return taskById.get(id);
    }

    public Collection<Task> getTasksByRequirement(Requirement requirement){
        Stack<Task> ans = new Stack<Task>();
        for (Task task: taskById.values()){
            if (task.getRequirement()!=null){
                if (task.getRequirement().getId() == requirement.getId()){
                    ans.push(task);
                }
            }
        }
        return ans;
    }
}
