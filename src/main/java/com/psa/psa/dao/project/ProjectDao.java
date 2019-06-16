package com.psa.psa.dao.project;

import com.psa.psa.model.project.Project;
import com.psa.psa.model.resources.Resource;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@Repository
public class ProjectDao {
    private static Map<Integer,Project> projects;
    private static Map<String,Integer> idByName;
    static{
        projects = new HashMap<Integer,Project>();
        idByName = new HashMap<String, Integer>();
        Project testProject = new Project("Proyecto de prueba");
        testProject.assignResource(new Resource("Flavio Perez Ondarts",new Long(23000000)));
        testProject.assignResource(new Resource("Tito Lasanta",new Long(230000111)));
        testProject.addTask("Tarea 1");
        testProject.addTask("Tarea 2");
        projects.put(testProject.getId(),testProject);
        idByName.put(testProject.getName(),testProject.getId());
    }

    public Collection<Project> getAllProjects(){
        return projects.values();
    }

    public Project createNewProject(String name){
        if (idByName.containsKey(name)){
            return null;
        }
        Project newProject = new Project(name);
        projects.put(newProject.getId(),newProject);
        idByName.put(newProject.getName(),newProject.getId());
        return newProject;
    }

    public Project getProjectById(Integer projectId){
        return projects.get(projectId);
    }
}
