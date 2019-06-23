package cucumber;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import com.psa.psa.model.resources.Resource;
import com.psa.psa.model.project.Project;


public class ReporteSteps {
    Project aProyect;
    Resource resource1;
    Resource resource2;
    Long CostoEsperado;

    @Given("Hay Recursos trabajando")
    public void hay_Recursos_trabajando() {
        resource1 = new Resource("Jose", Long.valueOf(39535335));
    }

    @When("quiero facturar")
    public void quiero_facturar() {
        resource1.setHoursWorked(30);
    }

    @Then("devo poder ver las horas que trabajaron los recursos")
    public void devo_poder_ver_las_horas_que_trabajaron_los_recursos() {
        Integer hours_worked = resource1.getHoursWorked();
        Assert.assertEquals(hours_worked, java.util.Optional.of(30));
    }


    @Given("hay recursos trabajando en un proyecto")
    public void hay_recursos_trabajando_en_un_proyecto() {
        aProyect = new Project("Proyecto 1");
        resource1 = new Resource("Jose", Long.valueOf(39535335));
        resource2 = new Resource("Edit", Long.valueOf(17361422));
        aProyect.assignResource(resource1);
        aProyect.assignResource(resource2);
        resource1.setSalary((long) 30);
        resource2.setSalary((long) 30);
    }

    @When("es fin de mes")
    public void es_fin_de_mes() {
        resource1.setHoursWorked(30);
        resource2.setHoursWorked(30);
    }

    @Then("espero un reporte de costos")
    public void espero_un_reporte_de_costos() {
        CostoEsperado = (long)30*30*2;
        Long CostoReal = aProyect.getCost();
        Assert.assertEquals(CostoReal,CostoEsperado);
    }

}

