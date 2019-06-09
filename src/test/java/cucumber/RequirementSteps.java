package cucumber;

import com.psa.psa.model.core.project.Project;
import com.psa.psa.model.core.project.Requirement;
import com.psa.psa.model.core.project.RequirementPriority;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java.en.And;
import org.junit.Assert;

import java.util.Collection;

public class RequirementSteps {

    Project myProject;
    Requirement myRequirement;
    String myName;
    String myDescription;
    RequirementPriority myPriority;
    Collection<Requirement> requirements;

    @Given("tengo un proyecto y he creado un requisito con nombre {string} y descripcion {string}")
    public void HeCreadoUnRequisitoConNombreYDescripcion(String name, String description){
        myProject = new Project ("myProject");
        myRequirement = myProject.addRequirement(name,description);
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

    @Given("tengo un proyecto y he creado un requisito sin indicar prioridad")
    public void heCreadoUnRequisitoSinAsignarPrioridad(){
        myProject = new Project ("myProject");
        myRequirement = myProject.addRequirement("nombre","descripcion");
    }

    @When("veo la prioridad del requisito")
    public void veoLaPrioridadDelRequisito(){
        myPriority = myRequirement.getPriority();
    }
    
    @Then("su prioridad es indefinida")
    public void tienePrioridadIndefinida(){
        Assert.assertEquals(myPriority,RequirementPriority.UNDEFINED);
    }

    @Given("tengo un proyecto y he creado un requisito con prioridad alta")
    public void heCreadoUnRequisitoConPrioridadAlta(){
        myProject = new Project ("myProject");
        myRequirement = myProject.addRequirement("nombre","descripcion",RequirementPriority.HIGH);
    }
    
    @Then("la prioridad es alta")
    public void tienePrioridadAlta(){
        Assert.assertEquals(myPriority,RequirementPriority.HIGH);
    }

    @Given("tengo un proyecto y he creado un requisito con prioridad media")
    public void heCreadoUnRequisitoConPrioridadMedia(){
        myProject = new Project ("myProject");
        myRequirement = myProject.addRequirement("nombre","descripcion",RequirementPriority.MEDIUM);
    }


    @Then("la prioridad es media")
    public void tienePrioridadMedia(){
        Assert.assertEquals(myPriority,RequirementPriority.MEDIUM);
    }

    @Given("tengo un proyecto y he creado un requisito con prioridad baja")
    public void heCreadoUnRequisitoConPrioridadBaja(){
        myProject = new Project ("myProject");
        myRequirement = myProject.addRequirement("nombre","descripcion",RequirementPriority.LOW);
    }
    
    @Then("su prioridad es baja")
    public void tienePrioridadBaja(){
        Assert.assertEquals(myPriority,RequirementPriority.LOW);
    }

    @Given("tengo un proyecto y tengo un requisito")
    public void heCreadoUnRequisito(){
        myProject = new Project ("myProject");
        myRequirement = myProject.addRequirement("aName", "aDescription");
    }
    @When("le especifico una nueva prioridad")
    public void realizoUnCambioEnLaPrioridad(){

        myRequirement.setPriority(RequirementPriority.HIGH);
    }

    @Then ("la prioridad es la que le acabo de especificar")
    public void laPrioridadDelRequisitoEsLaQueAcaboDeEspecificar(){
        Assert.assertEquals(myPriority,RequirementPriority.HIGH);
    }

    @Given("tengo un proyecto con requisitos de distintas prioridades")
    public void tengoUnProyectoConRequisitosDeDistintasPrioridades(){
        myProject = new Project("Mi proyecto");
        myProject.addRequirement("r1","r1",RequirementPriority.HIGH);
        myProject.addRequirement("r2","r2",RequirementPriority.HIGH);
        myProject.addRequirement("r3","r3",RequirementPriority.LOW);
        myProject.addRequirement("r4","r4",RequirementPriority.LOW);
        myProject.addRequirement("r5","r5",RequirementPriority.MEDIUM);
        myProject.addRequirement("r6","r6",RequirementPriority.MEDIUM);
        myProject.addRequirement("r7","r7",null);
        myProject.addRequirement("r8","r8",RequirementPriority.UNDEFINED);
    }

    @When("veo los requisitos de prioridad alta")
    public void veoLosRequisitosDePrioridadAlta(){
        requirements = myProject.getRequirementsByPriority(RequirementPriority.HIGH);
    }

    @Then("todos los requisitos que veo tienen prioridad alta")
    public void todosLosRequisitosQueVeoTienePrioridadAlta(){
        for(Requirement req : requirements){
            Assert.assertEquals(req.getPriority(),RequirementPriority.HIGH);
        }
    }

    @When("veo los requisitos de prioridad media")
    public void veoLosRequisitosDePrioridadMedia(){
        requirements = myProject.getRequirementsByPriority(RequirementPriority.MEDIUM);
    }

    @Then("todos los requisitos que veo tienen prioridad media")
    public void todosLosRequisitosQueVeoTienePrioridadMedia(){
        for(Requirement req : requirements){
            Assert.assertEquals(req.getPriority(),RequirementPriority.MEDIUM);
        }
    }

    @When("veo los requisitos de prioridad baja")
    public void veoLosRequisitosDePrioridadBaja(){
        requirements = myProject.getRequirementsByPriority(RequirementPriority.LOW);
    }

    @Then("todos los requisitos que veo tienen prioridad baja")
    public void todosLosRequisitosQueVeoTienePrioridadBaja(){
        for(Requirement req : requirements){
            Assert.assertEquals(req.getPriority(),RequirementPriority.LOW);
        }
    }

    @When("veo los requisitos de prioridad indefinida")
    public void veoLosRequisitosDePrioridadIndefinida(){
        requirements = myProject.getRequirementsByPriority(RequirementPriority.UNDEFINED);
    }

    @Then("todos los requisitos que veo tienen prioridad indefinida")
    public void todosLosRequisitosQueVeoTienePrioridadIndefinida(){
        for(Requirement req : requirements){
            Assert.assertEquals(req.getPriority(),RequirementPriority.UNDEFINED);
        }
    }
}