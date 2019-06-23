package com.psa.psa.service.resources;

import com.psa.psa.controllers.api.AssignResourceRequest;
import com.psa.psa.controllers.api.CreateResourceRequest;
import com.psa.psa.controllers.project.ProjectController;
import com.psa.psa.dao.resources.ResourcesDAO;
import com.psa.psa.model.project.Project;
import com.psa.psa.model.resources.*;
import com.psa.psa.service.project.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;

import javax.validation.ValidationException;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Service
public class ResourcesService {

    @Autowired
    private ResourcesDAO resourcesDAO;
    @Autowired
    private ProjectService projectService;

    public void createResource(CreateResourceRequest request) {

    }

    public Resource getResourceByCuit(Long cuit) {
        return this.resourcesDAO.getByCuit(cuit).orElseThrow(() -> new HttpClientErrorException(HttpStatus.NOT_FOUND));
    }

    public void createNewResource(String name, Long cuit, Integer salary, Seniority seniority, Integer limweekhours,
                                  Integer workload, List<Role> roles) {
        this.resourcesDAO.createNewResource(name, cuit, salary, seniority, limweekhours, workload, roles);
    }

    public void updateResource(String name, Long cuit, Integer salary, Seniority seniority, Integer limweekhours,
                                  Integer workload, List<Role> roles) {
        this.resourcesDAO.updateResource(name, cuit, salary, seniority, limweekhours, workload, roles);
    }

    public Collection<Resource> getAllResources() {
        return this.resourcesDAO.getAll();
    }

    public void assignResource(AssignResourceRequest request) {
        try{

            Project project = ProjectController.getService().getAllProjects().stream()
                .filter(p -> p.getName().equals(request.getProjectName()))
                .findFirst().orElseThrow(() -> new ValidationException("Project not found for name "+ request.getProjectName()));

        Resource resource = this.resourcesDAO.getAll().stream()
                .filter(r -> r.getName().equals(request.getResourceName()))
                .findFirst()
                .orElseThrow(() -> new ValidationException("Resource not found for name "+ request.getResourceName()));

        ResourceHistory history = Optional.ofNullable(resource.getResourceHistory()).orElse(new ResourceHistory());
        Assignation assignation = new Assignation();
        assignation.setProject(project);
        assignation.setDedication(request.getWeekHours());
        assignation.setStartDate(request.getStartDate());
        assignation.setEndDate(request.getEndDate());
        assignation.setRole(Role.fromDescription(request.getRole()));
        history.getAssignations().add(assignation);
        project.assignResource(resource,assignation);
        resource.setResourceHistory(history);
        } catch (Exception e){
            throw new ValidationException(e.getMessage());
        }
    }

    public ResourceHistory getResourceHistory(Long cuit) {
        return this.resourcesDAO.getByCuit(cuit)
                .orElseThrow(() -> new ValidationException("Resource not found for cuit "+ cuit))
                .getResourceHistory();
    }
}
