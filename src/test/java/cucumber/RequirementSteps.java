package cucumber;

import com.psa.psa.model.core.project.Project;
import com.psa.psa.model.core.project.Requirement;
import com.psa.psa.model.core.project.RequirementPriority;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java.en.And;
import org.junit.Assert;

public class RequirementSteps {

    Project myProject;
    Requirement myRequirement;
    String myName;
    String myDescription;
    RequirementPriority myPriority;

    @Given("he creado un requisito con nombre {string} y descripcion {string}")
    public void HeCreadoUnRequisitoConNombreYDescripcion(String name, String description){
        myRequirement = new Requirement(name,description);
    }

    @When("veo el nombre y la descripcion del requisito")
    public void veoSuNombreYDescripcion(){
        myName = myRequirement.getName();
        myDescription = myRequirement.getDescription();
    }

    @Then("su nombre es {string}")
    public void suNombreEsElCorrecto(String name){
        Assert.assertEquals(myName,name);
    }
    
    @And("su descripcion es {string}")
    public void suDescripcionEsLaCorrecta(String description){
        Assert.assertEquals(myDescription,description);
    }

    @Given("he creado un requisito sin indicar prioridad")
    public void heCreadoUnRequisitoSinAsignarPrioridad(){
        myRequirement = new Requirement("nombre","descripcion");
    }

    @When("veo la prioridad del requisito")
    public void veoLaPrioridadDelRequisito(){
        myPriority = myRequirement.getPriority();
    }
    
    @Then("su prioridad es indefinida")
    public void tienePrioridadIndefinida(){
        Assert.assertEquals(myPriority,RequirementPriority.UNDEFINED);
    }

    @Given("he creado un requisito con prioridad alta")
    public void heCreadoUnRequisitoConPrioridadAlta(){
        myRequirement = new Requirement("nombre","descripcion",RequirementPriority.HIGH);
    }
    
    @Then("la prioridad es alta")
    public void tienePrioridadAlta(){
        Assert.assertEquals(myPriority,RequirementPriority.HIGH);
    }

    @Given("he creado un requisito con prioridad media")
    public void heCreadoUnRequisitoConPrioridadMedia(){
        myRequirement = new Requirement("nombre","descripcion",RequirementPriority.MEDIUM);
    }


    @Then("la prioridad es media")
    public void tienePrioridadMedia(){
        Assert.assertEquals(myPriority,RequirementPriority.MEDIUM);
    }

    @Given("he creado un requisito con prioridad baja")
    public void heCreadoUnRequisitoConPrioridadBaja(){
        myRequirement = new Requirement("nombre","descripcion",RequirementPriority.LOW);
    }
    
    @Then("la prioridad es baja")
    public void tienePrioridadBaja(){
        Assert.assertEquals(myPriority,RequirementPriority.LOW);
    }

    @Given("que tengo un requisito")
    public void heCreadoUnRequisito(){
        myRequirement = new Requirement("aName", "aDescription");
    }
    @When("le especifico una nueva prioridad")
    public void realizoUnCambioEnLaPrioridad(){
        myRequirement.setPriority(RequirementPriority.HIGH);
    }

    @Then ("la prioridad es la que le acabo de especificar")
    public void laPrioridadDelRequisitoEsLaQueAcaboDeEspecificar(){
        Assert.assertEquals(myPriority,RequirementPriority.HIGH);
    }

}