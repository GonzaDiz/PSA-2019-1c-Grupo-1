package com.psa.psa.dao.project;

import com.psa.psa.model.core.project.Project;
import org.springframework.stereotype.Repository;

import javax.print.DocFlavor;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@Repository
public class ProjectDao {
    private static Map<Integer,Project> projects;

    static{
        projects = new HashMap<Integer,Project>();
        Project testProject = new Project("Proyecto de prueba");
        projects.put(testProject.getId(),testProject);
    }

    public Collection<Project> getAllProjects(){
        return projects.values();
    }

    public void createNewProject(String name){
        Project newProject = new Project(name);
        projects.put(newProject.getId(),newProject);
    }
}
