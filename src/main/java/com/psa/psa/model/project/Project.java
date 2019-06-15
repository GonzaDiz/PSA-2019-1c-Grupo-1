package com.psa.psa.model.project;

import com.psa.psa.model.resources.Resource;
import com.psa.psa.model.risk.Risk;
import com.psa.psa.model.risk.RiskManager;
import com.psa.psa.model.task.Task;
import com.psa.psa.model.task.TaskManager;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.HashMap;

public class Project {

    private static Integer nextId = 0;
    private Integer id;
    private String name;
    private LocalDateTime startDate;
    private ProjectState projectState;
    private String projectType;

    private TaskManager tasks;
    private RiskManager risks;
    private RequirementManager requirements;
    private HashMap<Long,Resource> resources;


    public Project(String name) {
        this.id = nextId;
        nextId+=1;
        this.name = name;
        this.startDate = LocalDateTime.now();
        this.projectType = "Desarrollo";
        this.projectState = ProjectState.INITIAL;
        this.tasks = new TaskManager();
        this.risks = new RiskManager();
        this.requirements = new RequirementManager();
    }

    public Task addTask(String title){
        Task newTask = tasks.addTask(title);
        return newTask;
    }

    public Risk addRisk(String description, Double probability, Double impact){
        return risks.addRisk(description,probability,impact);
    }

    public String getName() {
        return name;
    }

    public Requirement addRequirement(String name, String description, RequirementPriority priority){
       return requirements.addRequirement(name,description,priority);
    }

    public Requirement addRequirement(String name, String description){
        return requirements.addRequirement(name,description, null);

    }

    public Requirement getRequirementByName(String name){
        return requirements.getByName(name);
    }

    public Requirement getRequirementById(Integer id){
        return requirements.getById(id);
    }

    public Collection<Requirement> getRequirementsByPriority(RequirementPriority priority){
       return requirements.getByPriority(priority);
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

    public void assignTask(Task task, Resource resource){
        if (!resources.containsKey(resource.getCuit())){
            return;
        }
        task.assign(resource.getName());
    }

}
