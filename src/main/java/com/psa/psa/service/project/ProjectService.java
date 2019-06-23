package com.psa.psa.service.project;

import com.psa.psa.dao.project.ProjectDao;
import com.psa.psa.model.project.Project;
import com.psa.psa.model.project.Requirement;
import com.psa.psa.model.project.RequirementPriority;
import com.psa.psa.model.resources.Assignation;
import com.psa.psa.model.resources.Resource;
import com.psa.psa.model.risk.Risk;
import com.psa.psa.model.risk.RiskConfig;
import com.psa.psa.model.task.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Map;

@Service
public class ProjectService {

    @Autowired
    private ProjectDao projectDao;

    public ProjectService(){
        projectDao = new ProjectDao();
    }

    public Collection<Project> getAllProjects(){
        return projectDao.getAllProjects();
    }

    public Project createNewProject(String name){
        if (name == null || name.isEmpty()){
            return null;
        }
        return this.projectDao.createNewProject(name);
    }

    public Collection<Task> getAllProjectTasks(Integer projectId){
        return projectDao.getProjectById(projectId).getAllTasks();
    }

    public Task addTaskToProject(Integer projectId, String taskTitle){
        if (taskTitle == null || taskTitle.isEmpty()){
            return null;
        }
        return projectDao.getProjectById(projectId).addTask(taskTitle);
    }

    public Collection<Resource> getProjectResources(Integer projectId){
        return projectDao.getProjectById(projectId).getResources();
    }

    public boolean assignTask(Integer projectId, Integer taskId, Long cuit){
        return projectDao.getProjectById(projectId).assignTask(taskId,cuit);
    }

    public void unassignTask(Integer projectId, Integer taskId){
        projectDao.getProjectById(projectId).unassignTask(taskId);
    }

    public Risk addRisk(Integer projectId, String description, double prob, double impact){
        if (description == null || description.isEmpty()){
            return null;
        }
        return projectDao.getProjectById(projectId).addRisk(description,prob,impact);
    }

    public void updateRisk(Integer projectId,Integer riskId, String description, double prob, double impact){
        if( description == null || description.isEmpty()){
            return;
        }
        projectDao.getProjectById(projectId).updateRisk(riskId,description,prob,impact);
    }

    public Collection<Risk> getRisks(Integer id){
        return projectDao.getProjectById(id).getAllRisks();
    }

    public RiskConfig getRiskConfig(Integer id){
        return projectDao.getProjectById(id).getRiskConfig();
    }

    public RiskConfig updateRiskConfig(Integer id,Double lowMedium, Double mediumHigh,Double exposureLimit){
        return projectDao.getProjectById(id).updateRiskConfig(lowMedium,mediumHigh,exposureLimit);
    }

    public Collection<Assignation> getResourceHistory(Integer projectId,Long cuit){
       return projectDao.getProjectById(projectId).getResourceHistory(cuit);
    }

    public Map<Long,Assignation> getCurrentAssignations(Integer projectId){
        return projectDao.getProjectById(projectId).getCurrentAssignations();
    }

    public Requirement addRequirement(Integer id, String name, String descrpition, String priority){
        RequirementPriority reqPriority = RequirementPriority.UNDEFINED;
        if (priority.equals("HIGH")){
            reqPriority = RequirementPriority.HIGH;
        } else if (priority.equals("MEDIUM")){
            reqPriority = RequirementPriority.MEDIUM;
        } else if (priority.equals("LOW")){
            reqPriority = RequirementPriority.LOW;
        }
        return projectDao.getProjectById(id).addRequirement(name,descrpition,reqPriority);
    }

    public Collection<Requirement> getAllProjectRequirements(Integer id){
        return projectDao.getProjectById(id).getAllRequirements();
    }

    public Requirement getTaskRequirement(Integer projectId, Integer taskId){
        return projectDao.getProjectById(projectId).getTaskById(taskId).getRequirement();
    }

    public Requirement setTaskRequirement(Integer projectId,Integer taskId, Integer reqId){
        Project project = projectDao.getProjectById(projectId);
        Requirement requirement = project.getRequirementById(reqId);
        project.getTaskById(taskId).setRequirement(requirement);
        return requirement;
    }

    public void unsetTaskRequirement(Integer projectId,Integer taskId){
        projectDao.getProjectById(projectId).getTaskById(taskId).setRequirement(null);
    }

    public Collection<Task> getRequirementTasks(Integer projectId, Integer reqId){
        Requirement req = projectDao.getProjectById(projectId).getRequirementById(reqId);
        return projectDao.getProjectById(projectId).getTasksByRequirement(req);
    }

}
