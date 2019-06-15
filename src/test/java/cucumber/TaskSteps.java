package cucumber;

import com.psa.psa.model.project.Project;
import com.psa.psa.model.resources.Resource;
import com.psa.psa.model.task.Task;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class TaskSteps {

	Project aProject;
	Task myTask;
	String resource1,resource2;
	Resource myResource;
	boolean assigned;

	@Given("tengo un proyecto")
	public void tengoUnProyecto(){
		aProject = new Project("Mi proyecto");
	}

	@When("creo una tarea con un {string} que no existe en el proyecto")
	public void creoUnaTareaConUnTituloQueNoExisteEnElProyecto(String string1){
		myTask = aProject.addTask(string1);
	}

	@Then("la tarea es creada con el {string} que le acabo de indicar")
	public void laTareaEsCreadaConElTituloQueLeAcaboDeIndicar(String string1){
		Assert.assertEquals(myTask.getName(),string1);
	}

	@Given("tengo un proyecto con una tarea con un {string}")
	public void tengoUnProyectoConUnaTareaConUnTitulo(String string1){
		aProject = new Project("Mi Proyecto");
		myTask = aProject.addTask(string1);
		Assert.assertEquals(myTask.getName(),string1);
	}

	@When("intento crear una tarea con el mismo {string}")
	public void intentoCrearUnaTareaConElMismoTitulo(String string1){
		myTask = aProject.addTask(string1);
	}

	@Then("la tarea no es creada")
	public void laTareaNoEsCreada(){
		Assert.assertNull(myTask);
	}

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

	@Given("tengo un proyecto con una tarea y un recurso que no pertenece al proeycto")
	public void tengoUnProyectoConTareaYUnRecursoQueNoPerteneceAlProyecto(){
		aProject = new Project("MI PROYECTO");
		myTask = aProject.addTask("Mi tarea");
		myResource = new Resource("Flavio Perez",new Long(12354860));
	}

	@When("intento asignar a la tarea el recurso que no pertenece al proyecto")
	public void intentoAsignarALaTareaElRecursoQueNoPerteneceAlProyecto(){
		aProject.assignTask(myTask,myResource);
	}

}
