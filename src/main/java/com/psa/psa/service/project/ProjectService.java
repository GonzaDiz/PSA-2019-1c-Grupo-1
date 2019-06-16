package com.psa.psa.service.project;

import com.psa.psa.dao.project.ProjectDao;
import com.psa.psa.model.project.Project;
import com.psa.psa.model.resources.Resource;
import com.psa.psa.model.risk.Risk;
import com.psa.psa.model.task.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class ProjectService {

    @Autowired
    private ProjectDao projectDao;

    public Collection<Project> getAllProjects(){
        return projectDao.getAllProjects();
    }

    public Project createNewProject(String name){
        return this.projectDao.createNewProject(name);
    }

    public Collection<Task> getAllProjectTasks(Integer projectId){
        return projectDao.getProjectById(projectId).getAllTasks();
    }

    public Task addTaskToProject(Integer projectId, String taskTitle){
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

    public void addRisk(Integer projectId, String description, double prob, double impact){
        projectDao.getProjectById(projectId).addRisk(description,prob,impact);
    }

    public void updateRisk(Integer projectId,Integer riskId, String description, double prob, double impact){
        projectDao.getProjectById(projectId).updateRisk(riskId,description,prob,impact);
    }

    public Collection<Risk> getRisks(Integer id){
        return projectDao.getProjectById(id).getAllRisks();
    }

}
