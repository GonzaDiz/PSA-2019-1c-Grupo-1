package cucumber;

import com.psa.psa.model.core.task.Task;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class TaskSteps {
	
	Task myTask;
	String resource1,resource2;
	boolean assigned;
	
	@When("creo una tarea y no la asigno")
	public void veoSiEstaAsignada(){
		myTask = new Task();
	}
	
	@Then("la tarea no esta asignada")
	public void laTareaNoEstaAsignada() {
		Assert.assertFalse(myTask.isAssigned());
	}
	
	@Given("tengo una tarea no asignada y un recurso")
	public void tengoUnaTareaNoAsignadaYUnRecurso() {
		myTask = new Task();
		Assert.assertTrue(!myTask.isAssigned());
		resource1 = "Flavio Perez";
	}
	
	@When("la asigno al recurso")
	public void laAsignoAlRecurso(){
		myTask.assign(resource1);
	}
	
	@Then("veo que la tarea esta asignada")
	public void laTareaEstaAsignada() {
		Assert.assertTrue(myTask.isAssigned());
	}
	
	@Given("tengo una tarea asignada a un recurso y otro recurso")
	public void tengoUnaTareaAsignadaAUnRecurso() {
		myTask = new Task();
		resource1 = "Flavio Perez";
		myTask.assign(resource1);
		Assert.assertTrue(myTask.isAssigned());
		resource2 = "Bautista Canavese";
	}
	
	@When("intento asignarla al otro recurso")
	public void intentoAsignarlaAOtroRecurso(){
		myTask.assign(resource2);
	}
	
	@Then("la tarea permanece asignada al primer recurso")
	public void laTareaPermaneceAsignadaAlPrimerRecurso(){
		Assert.assertTrue(myTask.isAssigned());
		Assert.assertEquals(myTask.getAssignedResource(),resource1);
	}
	
}
