package cucumber;

import com.psa.psa.model.project.Project;
import com.psa.psa.model.project.ProjectState;
import com.psa.psa.service.project.ProjectService;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class ProjectSteps {
    Project aProject;
    ProjectState aState;
    ProjectService projectService;
    String name1 = "Nombre Irrepetble";

    @Given("he creado un proyecto")
    public void heCreadoUnProyecto(){
        projectService = new ProjectService();
        aProject = projectService.createNewProject("Mi primer proyecto");
    }

    @When("veo el estado del proyecto creado")
    public void veoElEstadoDelProyectoCreado(){
        aState = aProject.getProjectState();
    }

    @Then("el estado del proyecto es inicial")
    public void elEstadoDelProyectoEsInicial(){
        Assert.assertEquals(aState, ProjectState.INICIAL);
    }

    @Given("he creado un proyecto con un nombre")
    public void heCreadoUnProyectoConUnNombre(){
        projectService = new ProjectService();
        aProject = projectService.createNewProject(name1);
    }

    @When("intento crear un proyecto con el mismo nombre")
    public void intentoCrearUnProyectoConElMismoNombre(){
        aProject = projectService.createNewProject(name1);
    }

    @Then("el proyecto no fue creado")
    public void elProyectoNoFueCreado(){
        Assert.assertNull(aProject);
    }

    @When("intento crear un proyecto con nombre vacio")
    public void intentoCrearProyectoConNombreVacio(){
        projectService = new ProjectService();
        aProject = projectService.createNewProject("");
    }

}
