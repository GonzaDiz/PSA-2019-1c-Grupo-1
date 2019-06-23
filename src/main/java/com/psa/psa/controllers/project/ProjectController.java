package com.psa.psa.controllers.project;


import com.psa.psa.model.project.Project;
import com.psa.psa.model.project.Requirement;
import com.psa.psa.model.resources.Assignation;
import com.psa.psa.model.resources.Resource;
import com.psa.psa.model.risk.Risk;
import com.psa.psa.model.risk.RiskConfig;
import com.psa.psa.model.task.Task;
import com.psa.psa.service.project.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/proyectos")
public class ProjectController {

    @Autowired
    static private ProjectService projectService;

    static {
        projectService = new ProjectService();
    }

    public static ProjectService getService(){
        return projectService;
    }

    @RequestMapping(method= RequestMethod.GET)
    public Collection<Project> getAllProjects(){
        return projectService.getAllProjects();
    }

    @RequestMapping(method=RequestMethod.POST)
    public Project createNewProject(@RequestBody Map<String,String> payload){
        return projectService.createNewProject(payload.get("name"));
    }

    @RequestMapping(value="/{id}/tareas", method=RequestMethod.GET)
    public Collection<Task> getAllProjectTasks(@PathVariable String id){
        return projectService.getAllProjectTasks(Integer.valueOf(id));
    }

    @RequestMapping(value="/{id}/tareas", method=RequestMethod.POST)
    public Task addTaskToProject(@PathVariable String id,@RequestBody Map<String,String> payload){
        return projectService.addTaskToProject(Integer.valueOf(id),payload.get("title"));
    }

    @RequestMapping(value="/{id}/recursos",method=RequestMethod.GET)
    public Collection<Resource> getProjectResources(@PathVariable String id){
        return projectService.getProjectResources(Integer.valueOf(id));
    }

    @RequestMapping(value="/{id}/tareas/{taskId}/asignacion",method = RequestMethod.POST)
    public boolean assignTask(@PathVariable String id, @PathVariable String taskId, @RequestBody HashMap<String,Long> payload){
        return projectService.assignTask(Integer.valueOf(id),Integer.valueOf(taskId),payload.get("cuit"));
    }

    @RequestMapping(value="/{id}/tareas/{taskId}/asignacion",method = RequestMethod.DELETE)
    public void unassignTask(@PathVariable String id, @PathVariable String taskId){
        projectService.unassignTask(Integer.valueOf(id),Integer.valueOf(taskId));
    }

    @RequestMapping(value="/{id}/riesgos",method=RequestMethod.POST)
    public void addRisk(@PathVariable String id, @RequestBody HashMap<String,String> payload){
        try{
            double prob = Double.parseDouble(payload.get("probability"));
            double impact = Double.parseDouble(payload.get("impact"));
            projectService.addRisk(Integer.valueOf(id),payload.get("description"),prob,impact);
        } catch (Exception e){
            return;
        }
    }

    @RequestMapping(value="/{id}/riesgos/{riskId}",method=RequestMethod.POST)
    public void updateRisk(@PathVariable String id,@PathVariable String riskId, @RequestBody HashMap<String,String> payload){
        try{
            double prob = Double.parseDouble(payload.get("probability"));
            double impact = Double.parseDouble(payload.get("impact"));
            projectService.updateRisk(Integer.valueOf(id),Integer.valueOf(riskId),payload.get("description"),prob,impact);
        } catch (Exception e){
            return ;
        }
    }

    @RequestMapping(value="/{id}/riesgos",method = RequestMethod.GET)
    public Collection<Risk> getAllRisks(@PathVariable String id){
        return projectService.getRisks(Integer.valueOf(id));
    }

    @RequestMapping(value="{id}/riesgos/config",method=RequestMethod.GET)
    public RiskConfig getRiskConfig(@PathVariable String id){
        return projectService.getRiskConfig(Integer.valueOf(id));
    }

    @RequestMapping(value="{id}/riesgos/config",method=RequestMethod.POST)
    public RiskConfig updateRiskConfig(@PathVariable String id,@RequestBody HashMap<String,String> payload){
        try{
            double lowMed = Double.parseDouble(payload.get("lowMediumLimit"));
            double medHigh = Double.parseDouble(payload.get("mediumHighLimit"));
            double expLim = Double.parseDouble(payload.get("exposureLimit"));
            return projectService.updateRiskConfig(Integer.valueOf(id),lowMed,medHigh,expLim);
        } catch (Exception e){
            return null;
        }
    }

    @RequestMapping(value="{id}/recursos/asignaciones",method=RequestMethod.GET)
    public Map<Long, Assignation> getCurrentAssignation(@PathVariable String id){
        return projectService.getCurrentAssignations(Integer.parseInt(id));
    }

    @RequestMapping(value="{id}/requisitos",method=RequestMethod.POST)
    public Requirement getCurrentAssignation(@PathVariable String id, @RequestBody HashMap<String,String> payload){
        return projectService.addRequirement(Integer.parseInt(id),payload.get("name"),payload.get("description"),payload.get("priority"));
    }

    @RequestMapping(value="/{id}/requisitos", method=RequestMethod.GET)
    public Collection<Requirement> getAllProjectRequirements(@PathVariable String id){
        return projectService.getAllProjectRequirements(Integer.parseInt(id));
    }

    @RequestMapping(value="/{id}/tareas/{taskId}/requisito", method=RequestMethod.GET)
    public Requirement getTaskRequirement(@PathVariable String id,@PathVariable String taskId){
        return projectService.getTaskRequirement(Integer.parseInt(id),Integer.parseInt(taskId));
    }

    @RequestMapping(value="/{id}/tareas/{taskId}/requisito/{reqId}",method = RequestMethod.POST)
    public Requirement setTaskRequirement(@PathVariable String id,@PathVariable String taskId,@PathVariable String reqId){
        return projectService.setTaskRequirement(Integer.parseInt(id),Integer.parseInt(taskId),Integer.parseInt(reqId));
    }

    @RequestMapping(value ="/{id}/tareas/{taskId}/requisito",method = RequestMethod.DELETE)
    public void unsetTaskRequirement(@PathVariable String id, @PathVariable String taskId){
        projectService.unsetTaskRequirement(Integer.parseInt(id),Integer.parseInt(taskId));
    }

    @RequestMapping(value="/{id}/requisitos/{reqId}/tareas",method = RequestMethod.GET)
    public Collection<Task> getRequirementTasks(@PathVariable String id, @PathVariable String reqId){
       return projectService.getRequirementTasks(Integer.parseInt(id),Integer.parseInt(reqId));
    }

}

