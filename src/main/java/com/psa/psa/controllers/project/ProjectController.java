package com.psa.psa.controllers.project;


import com.psa.psa.model.core.project.Project;
import com.psa.psa.service.project.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


import java.util.Collection;
import java.util.Map;

@RestController
@RequestMapping("/proyectos")
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    @RequestMapping(method= RequestMethod.GET)
    public Collection<Project> getAllProjects(){
        return this.projectService.getAllProjects();
    }

    @RequestMapping(method=RequestMethod.POST)
    public void createNewProject(@RequestBody Map<String,String> payload){
        this.projectService.createNewProject(payload.get("name"));
    }
}
