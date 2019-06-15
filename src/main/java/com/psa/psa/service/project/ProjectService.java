package com.psa.psa.service.project;

import com.psa.psa.dao.project.ProjectDao;
import com.psa.psa.model.project.Project;
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


}
