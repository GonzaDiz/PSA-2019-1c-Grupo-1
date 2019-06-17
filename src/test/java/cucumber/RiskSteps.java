package cucumber;

import com.psa.psa.model.project.Project;
import com.psa.psa.model.risk.Risk;
import com.psa.psa.service.project.ProjectService;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

import static org.junit.Assert.*;

public class RiskSteps {

    private Risk r;
    private Project aProject;
    private ProjectService projectService;

    @Given("tengo un proyecto creado")
    public void tengoUnProyectoCreado(){
        projectService = new ProjectService();
        aProject = projectService.createNewProject("Mi primer proyecto");
        Assert.assertNotNull(aProject);
    }

    @When("creo un riesgo nuevo con una {string}, una {double} y un {double}")
    public void creoUnRiesgoConDescripcionProbabilidadYExposicion(String descripcion, Double prob, Double impact){
        r = projectService.addRisk(aProject.getId(),descripcion,prob,impact);
    }

    @When("la probabilidad va entre {double} y {double}")
    public void la_probabilidad_va_entre_y(Double double1, Double double2) {
        assertTrue(r.getProbability() > double1);
        assertTrue(r.getProbability() < double2);
    }

    @When("el impacto va entre {double} y {double}")
    public void el_impacto_va_entre_y(Double double1, Double double2) {
        assertTrue(r.getImpact() > double1);
        assertTrue(r.getImpact() < double2);
    }

    @Then("ese riesgo pasa a tener esa {string}, esa {double} y ese {double}")
    public void ese_riesgo_pasa_a_tener_esa_esa_y_ese(String string, Double double1, Double double2) {
        assertEquals(r.getDescription(), string);
        assertEquals(r.getProbability(), double1);
        assertEquals(r.getImpact(), double2);
    }


    @Given("tengo un proyecto con un riesgo creado")
    public void tengoUnProyectoConUnRiesgoCreado(){
        tengoUnProyectoCreado();
        r = projectService.addRisk(aProject.getId(),"Mi Riesgo",0.4,0.4);
    }

    @Then("su exposicion debe ser el producto de la {double} con el {double}")
    public void su_debe_ser_el_producto_de_la_probabilidad_con_el_impacto_y_se_denota(Double double1, Double double2){
        Double expectedExposure = double1*double2;
        assertEquals(r.getExposure(), expectedExposure);
    }

    @When("ingreso una {string}")
    public void ingreso_una(String string) {
        r.setDescription(string);
    }

    @Then("ese riesgo pasa a tener esa {string}")
    public void ese_riesgo_pasa_a_tener_esa(String string) {
        assertEquals(r.getDescription(), string);
    }

    @When("ingreso una probabilidad de {double}")
    public void ingreso_una_probabilidad_de(Double double1) {
        try{
            r.setProbability(double1);
        } catch (Exception e){

        }
    }

    @Then("ese riesgo pasa a tener esa probabilidad de {double}")
    public void ese_riesgo_pasa_a_tener_esa_probabilidad_de(Double double1) {
        assertEquals(r.getProbability(), double1);
    }

    @Then("ese riesgo no pasa a tener esa probabilidad de {double}")
    public void ese_riesgo_no_pasa_a_tener_esa_probabilidad_de(Double double1) {
        assertNotEquals(r.getProbability(), double1);
    }

    @When("ingreso un impacto de {double}")
    public void ingreso_un_impacto_de(Double double1) {
        try{
            r.setImpact(double1);
        }
        catch(Exception e){

        }
    }

    @When("ingreso una probabilidad de {double} y un impacto de {double}")
    public void ingresoUnaProbabilidadYUnImpacto(Double d1, Double d2){
        try{
            r.setProbability(d1);
            r.setImpact(d2);
        } catch (Exception e){

        }
    }

    @Then("ese riesgo pasa a tener ese impacto de {double}")
    public void ese_riesgo_pasa_a_tener_ese_impacto_de(Double double1) {
        assertEquals(r.getImpact(), double1);
    }

    @Then("ese riesgo no pasa a tener ese impacto de {double}")
    public void ese_riesgo_no_pasa_a_tener_ese_impacto_de(Double double1) {
        assertNotEquals(r.getImpact(), double1);
    }


    @Then("ese riesgo pasa a tener {double} de exposicion")
    public void ese_riesgo_pasa_a_tener_de_exposicion(Double double1) {
        assertEquals(r.getExposure(), double1);
    }

    @When ("intento crear un riesgo con una probabilidad {double}")
    public void intentoCrearUnRiesgoConUnaProbabilidad(Double d1){
       try{
           r = projectService.addRisk(aProject.getId(),"R1",d1,0.1);
       } catch (Exception e){

       }
    }

    @When("intento crear un riesgo con un impacto {double}")
    public void intentoCrearUnRiesgoConUnImpactoInvalido(Double d1){
        try{
            r = projectService.addRisk(aProject.getId(),"R1",0.1,d1);
        } catch(Exception e){

        }
    }

    @Then("el riesgo no es creado")
    public void elRiesgoNoEsCreado(){
        assertNull(r);
    }
}