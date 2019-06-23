package cucumber;

import com.psa.psa.model.project.Project;
import com.psa.psa.model.resources.Resource;
import com.psa.psa.model.task.Task;
import com.psa.psa.model.task.TaskState;
import com.psa.psa.service.project.ProjectService;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class TaskSteps {

	ProjectService myProjectService;
	Project aProject;
	Task myTask;
	String resource1,resource2;
	Resource myResource,myOtherResource;
	boolean assigned;

	@Given("tengo un proyecto")
	public void tengoUnProyecto(){
		myProjectService = new ProjectService();
		aProject = myProjectService.createNewProject("Mi proyecto");
		Assert.assertNotNull(aProject);
	}

	@When("creo una tarea con un {string} que no existe en el proyecto")
	public void creoUnaTareaConUnTituloQueNoExisteEnElProyecto(String string1){
		myTask = myProjectService.addTaskToProject(aProject.getId(),string1);
		Assert.assertNotNull(myTask);
	}

	@Then("la tarea es creada con el {string} que le acabo de indicar")
	public void laTareaEsCreadaConElTituloQueLeAcaboDeIndicar(String string1){
		Assert.assertEquals(myTask.getName(),string1);
	}

	@Given("tengo un proyecto con una tarea con un {string}")
	public void tengoUnProyectoConUnaTareaConUnTitulo(String string1){
		myProjectService = new ProjectService();
		aProject = myProjectService.createNewProject("Mi proyecto");
		myTask = myProjectService.addTaskToProject(aProject.getId(),string1);
		Assert.assertEquals(myTask.getName(),string1);
	}

	@When("intento crear una tarea con el mismo {string}")
	public void intentoCrearUnaTareaConElMismoTitulo(String string1){
		myTask = myProjectService.addTaskToProject(aProject.getId(),string1);
	}

	@Then("la tarea no es creada")
	public void laTareaNoEsCreada(){
		Assert.assertNull(myTask);
	}

	@When("creo una tarea en el proyecto y no la asigno")
	public void veoSiEstaAsignada(){
		myTask = myProjectService.addTaskToProject(aProject.getId(),"Mi tarea");
		Assert.assertNotNull(myTask);
	}
	
	@Then("la tarea no esta asignada")
	public void laTareaNoEstaAsignada() {
		Assert.assertFalse(myTask.isAssigned());
	}

	@And("tengo una tarea no asignada en el proyecto")
	public void tengoUnaTareaNoAsignadaEnELProyecto(){
		myTask = myProjectService.addTaskToProject(aProject.getId(),"Mi tarea");
		Assert.assertFalse(myTask.isAssigned());
	}

	@And("tengo un recurso asignado al proyecto")
	public void tengoUnRecursoAsignadoAlProyecto(){
		myResource = new Resource("Flavio Perez",new Long(20202020));
		aProject.assignResource(myResource);
		Assert.assertTrue(aProject.getResources().contains(myResource));
	}


	
	@When("asigno la tarea al recurso")
	public void laAsignoAlRecurso(){
		myProjectService.assignTask(aProject.getId(),myTask.getId(),myResource.getCuit());
	}
	
	@Then("veo que la tarea esta asignada")
	public void laTareaEstaAsignada() {
		Assert.assertTrue(myTask.isAssigned());
	}

	@And("tengo una tarea asignada a un recurso")
	public void tengoUnaTareaAsignadaAUnRecurso(){
		tengoUnaTareaNoAsignadaEnELProyecto();
		tengoUnRecursoAsignadoAlProyecto();
		laAsignoAlRecurso();
	}

	@And("tengo otro recurso en el proyecto")
	public void tengoOtroRecursoEnElProyecto(){
		myOtherResource = new Resource("Tito Lasanta",new Long(21212121));
		aProject.assignResource(myOtherResource);
	}

	@When("intento asignarla al otro recurso")
	public void intentoAsignarlaAOtroRecurso(){
		try{
			myProjectService.assignTask(aProject.getId(),myTask.getId(),myOtherResource.getCuit());
		}
		catch (Exception e){

		}
	}
	
	@Then("la tarea permanece asignada al primer recurso")
	public void laTareaPermaneceAsignadaAlPrimerRecurso(){
		Assert.assertTrue(myTask.isAssigned());
		Assert.assertEquals(myTask.getAssignedResource(),myResource.getName());
	}


	@And("tengo un recurso no asignado al proyecto")
	public void tengoUnRecursoNoAsignadoAlProyecto(){
		myResource = new Resource("Flavio Perez",new Long(20202020));
	}

	@When("intento asignar a la tarea el recurso que no pertenece al proyecto")
	public void intentoAsignarALaTareaElRecursoQueNoPerteneceAlProyecto(){
		myProjectService.assignTask(aProject.getId(),myTask.getId(),myResource.getCuit());
	}

	@And("tengo una tarea en el proyecto")
	public void tengoUnaTareaEnElProyecto(){
		myTask = myProjectService.addTaskToProject(aProject.getId(),"Mi tarea");
		Assert.assertNotNull(myTask);
	}

	@When("desasigno la tarea")
	public void desasignoLaTarea(){
		myProjectService.unassignTask(aProject.getId(),myTask.getId());
	}

	@When("creo una tarea con un titulo {string}")
	public void heCreadoUnaTareaConUnTitulo(String string1){
		myTask = myProjectService.addTaskToProject(aProject.getId(),string1);
		Assert.assertNotNull(myTask);
	}


	@Then("el titulo de la tarea es {string}")
	public void elTituloDeLaTareaEs(String string1){
		Assert.assertEquals(myTask.getName(),string1);
	}

	@When("creo una tarea en el proyecto")
	public void creoUnaTareaEnElProyecto(){
		myTask = myProjectService.addTaskToProject(aProject.getId(),"Mi tarea");
	}

	@Then("su estado inicial es backlog")
	public void suEstadoInicialEsBacklog(){
		Assert.assertEquals(myTask.getCurrentState(), TaskState.BACKLOG);
	}

	@Then("la cantidad de horas dedicadas es cero")
	public void laCantidadDeHorasDedicadasEsCero(){
		Assert.assertEquals(myTask.getTotalDedicatedHours(),new Integer(0));
	}

	

}
