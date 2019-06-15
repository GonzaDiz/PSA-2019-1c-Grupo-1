package com.psa.psa.service.project;

import com.psa.psa.dao.project.ProjectDao;
import com.psa.psa.model.project.Project;
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

    public void createNewProject(String name){
        this.projectDao.createNewProject(name);
    }
}
