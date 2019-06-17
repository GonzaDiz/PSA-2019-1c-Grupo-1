package cucumber;

import com.psa.psa.model.project.Phase;
import com.psa.psa.model.project.Project;
import com.psa.psa.model.project.ProjectState;
import com.psa.psa.service.project.ProjectService;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.junit.Assert.*;
public class PhaseSteps {

    ProjectService projectService;
    Project project;
    Phase phase;
    @When("creo un proyecto")
    public void creoUnProyecto(){
        projectService = new ProjectService();
        project = projectService.createNewProject(" mi proyecto");
    }

    @Then("el proyecto se encuentra en una fase inicial")
    public void elProyectoSeEncuentraEnUnaFaseInicial(){
        phase = project.getCurrentPhase();
        Assert.assertEquals(phase.getName(),"Inicial");
    }

    @And("se encuentra en la primer iteracion")
    public void seEncuentraEnLaPrimerIteracion(){
        Assert.assertEquals(phase.getCurrentIteration(),new Integer(1));
    }

    @Given("tengo un proyecto y una fase inicial")
    public void tengoUnProyetoYUnaFaseInicial(){
        projectService = new ProjectService();
        project = projectService.createNewProject("Mi nuevo proyecto");
        phase = project.getCurrentPhase();
    }

    @When("le doy una descripcion {string} a la fase inicial")
    public void leDoyUnaDescripcionALaFaseInicial(String string1){
        phase.setDescription(string1);
    }

    @Then("la fase tiene descripcion {string}")
    public void laFaseTieneDescripcion(String string1){
        Assert.assertEquals(phase.getDescription(),string1);
    }
}
