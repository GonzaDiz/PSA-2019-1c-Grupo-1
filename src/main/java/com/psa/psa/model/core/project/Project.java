package com.psa.psa.model.core.project;

import com.psa.psa.model.core.risk.Risk;
import com.psa.psa.model.core.task.Task;
import com.psa.psa.model.core.task.TaskManager;

import java.time.LocalDateTime;
import java.util.HashMap;

public class Project {

    private static Integer nextId = 0;
    private Integer id;
    private String name;
    private LocalDateTime startDate;
    private ProjectState projectState;
    private String projectType;

    private TaskManager tasks;


    public Project(String name) {
        this.id = nextId;
        nextId+=1;
        this.name = name;
        this.startDate = LocalDateTime.now();
        this.projectType = "Desarrollo";
        this.projectState = ProjectState.INITIAL;
        this.tasks = new TaskManager();
    }

    public Task addTask(String title){
        Task newTask = tasks.addTask(title);
        return newTask;
    }

    public String getName() {
        return name;
    }

    public Integer getId(){
        return this.id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDateTime getStartDate() {
        return startDate;
    }

    public String getProjectType() {
        return projectType;
    }

    public ProjectState getProjectState() {
        return projectState;
    }

    public void setProjectState(ProjectState projectState) {
        this.projectState = projectState;
    }

}
