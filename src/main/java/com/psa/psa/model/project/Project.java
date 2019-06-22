package com.psa.psa.model.project;

import com.psa.psa.model.client.Client;
import com.psa.psa.model.product.Product;
import com.psa.psa.model.product.Version;
import com.psa.psa.model.resources.Resource;
import com.psa.psa.model.risk.Risk;
import com.psa.psa.model.risk.RiskConfig;
import com.psa.psa.model.risk.RiskManager;
import com.psa.psa.model.task.Task;
import com.psa.psa.model.task.TaskManager;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.HashMap;
import java.util.Stack;

public class Project {

    private static Integer nextId = 0;
    private Integer id;
    private String name;
    private LocalDateTime startDate;
    private ProjectState projectState;
    private ProjectType projectType;

    private TaskManager tasks;
    private RiskManager risks;
    private RequirementManager requirements;
    private HashMap<Long,Resource> resources;
    private Stack<Phase> phases;
    private Version version;
    private Client client;

    // Sin version, actualmente no tenemos de donde obtener los productos
    public Project(String name) {
        this.id = nextId;
        nextId+=1;
        this.name = name;
        this.startDate = LocalDateTime.now();
        this.projectType = ProjectType.DESARROLLO;
        this.projectState = ProjectState.INICIAL;
        this.tasks = new TaskManager();
        this.risks = new RiskManager();
        this.requirements = new RequirementManager();
        this.resources = new HashMap<Long,Resource>();
        this.phases = new Stack<Phase>();
        this.phases.push(new Phase("Inicial"));
    }

    public Project(String name, Version version) {
        this.id = nextId;
        nextId+=1;
        this.name = name;
        this.startDate = LocalDateTime.now();
        this.projectType = ProjectType.DESARROLLO;
        this.projectState = ProjectState.INICIAL;
        this.tasks = new TaskManager();
        this.risks = new RiskManager();
        this.requirements = new RequirementManager();
        this.resources = new HashMap<Long,Resource>();
        this.phases = new Stack<Phase>();
        this.phases.push(new Phase("Inicial"));
        this.version = version;
    }


    public Project(String name, Version version, Client client) {
        this.id = nextId;
        nextId+=1;
        this.name = name;
        this.startDate = LocalDateTime.now();
        this.projectType = ProjectType.IMPLEMENTACION;
        this.projectState = ProjectState.INICIAL;
        this.tasks = new TaskManager();
        this.risks = new RiskManager();
        this.requirements = new RequirementManager();
        this.resources = new HashMap<Long,Resource>();
        this.phases = new Stack<Phase>();
        this.phases.push(new Phase("Inicial"));
        this.version = version;
        this.client = client;
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

    public ProjectType getProjectType() {
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

    public boolean assignTask(Integer taskId, Long cuit){
        if (!resources.containsKey(cuit) || tasks.getTaskById(taskId) == null){
            return false;
        }
        Task task  = tasks.getTaskById(taskId);
        Resource resource = resources.get(cuit);
        return task.assign(resource.getName());
    }

    public void unassignTask(Integer taskId){
        tasks.getTaskById(taskId).unassign();
    }

    public Collection<Task> getAllTasks(){
        return tasks.getAllTasks();
    }

    public Collection<Resource> getResources(){
        return this.resources.values();
    }

    public Resource assignResource(Resource resource){
        this.resources.put(resource.getCuit(),resource);
        return resource;
    }

    public void updateRisk(Integer riskId, String description,double prob, double impact){
        this.risks.getById(riskId).update(description,prob,impact);
    }

    public Collection<Risk> getAllRisks(){
        return risks.getAllRisks();
    }

    public RiskConfig getRiskConfig(){
        return risks.getConfig();
    }

    public RiskConfig updateRiskConfig(Double lowMedium,Double mediumHigh,Double exposureLimit){
        risks.setExposureLimit(exposureLimit);
        risks.setLowMediumLimit(lowMedium);
        risks.setMediumHighLimit(mediumHigh);
        return risks.getConfig();
    }

    public Phase getCurrentPhase(){
        return phases.peek();
    }

    public Long getCost() {
        Long cost = Long.valueOf(0);
        for (Resource resource: resources.values()) {
            cost += resource.getCost();
        }
        return cost;
    }
}
