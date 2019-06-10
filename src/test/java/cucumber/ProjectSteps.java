package cucumber;

import com.psa.psa.dao.project.ProjectDao;
import com.psa.psa.model.project.Project;
import com.psa.psa.model.project.ProjectState;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class ProjectSteps {
    Project aProject;
    ProjectState aState;
    ProjectDao dao;
    String name1 = "Nombre Irrepetble";

    @Given("he creado un proyecto")
    public void heCreadoUnProyecto(){
        aProject = new Project("miProyecto");
    }

    @When("veo el estado del proyecto creado")
    public void veoElEstadoDelProyectoCreado(){
        aState = aProject.getProjectState();
    }

    @Then("el estado del proyecto es inicial")
    public void elEstadoDelProyectoEsInicial(){
        Assert.assertEquals(aState, ProjectState.INITIAL);
    }

    @Given("he creado un proyecto con un nombre")
    public void heCreadoUnProyectoConUnNombre(){
        aProject = dao.createNewProject(name1);
    }

    @When("intento crear un proyecto con el mismo nombre")
    public void intentoCrearUnProyectoConElMismoNombre(){
        aProject = dao.createNewProject(name1);
    }

    @Then("el proyecto no fue creado")
    public void elProyectoNoFueCreado(){
        Assert.assertNull(aProject);
    }
}
