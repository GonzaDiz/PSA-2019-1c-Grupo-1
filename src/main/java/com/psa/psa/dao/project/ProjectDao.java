package com.psa.psa.dao.project;

import com.psa.psa.model.project.Project;
import com.psa.psa.model.resources.Resource;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@Repository
public class ProjectDao {
    private Map<Integer,Project> projects;
    private Map<String,Integer> idByName;

    public ProjectDao(){
        projects = new HashMap<Integer,Project>();
        idByName = new HashMap<String, Integer>();
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
