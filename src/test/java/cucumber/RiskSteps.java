package cucumber;

import com.psa.psa.model.core.risk.*;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import static org.junit.Assert.*;

public class RiskSteps {

    private Risk r;

    @Given("creo un riesgo nuevo")
    public void creo_un_riesgo_nuevo() {r = new Risk();}

    @When("ingreso una {string}, una {double} y un {double}")
    public void ingreso_una_una_y_un(String string, Double double1, Double double2) {
        r.setDescription(string);
        r.setOccurrenceProbability(double1);
        r.setImpact(double2);
        r.calculateExposure();
    }

    @When("la probabilidad va entre {double} y {double}")
    public void la_probabilidad_va_entre_y(Double double1, Double double2) {
        assertTrue(r.getOccurrenceProbability() >= double1);
        assertTrue(r.getOccurrenceProbability() <= double2);
    }

    @When("el impacto va entre {double} y {double}")
    public void el_impacto_va_entre_y(Double double1, Double double2) {
        assertTrue(r.getImpact() >= double1);
        assertTrue(r.getImpact() <= double2);
    }

    @Then("ese riesgo pasa a tener esa {string}, esa {double} y ese {double}")
    public void ese_riesgo_pasa_a_tener_esa_esa_y_ese(String string, Double double1, Double double2) {
        assertEquals(r.getDescription(), string);
        assertEquals(r.getOccurrenceProbability(), double1);
        assertEquals(r.getImpact(), double2);
    }


    @Then("su {double} debe ser el producto de la probabilidad con el impacto y se denota {string}")
    public void su_debe_ser_el_producto_de_la_probabilidad_con_el_impacto_y_se_denota(Double double1, String string) {
        assertEquals(r.getExposure(), double1);
        assertEquals(r.getRiskLevel().toString(), string);
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
        if ((double1 >= 0.0) && (double1 <= 1.0)) r.setOccurrenceProbability(double1);
    }

    @Then("ese riesgo pasa a tener esa probabilidad de {double}")
    public void ese_riesgo_pasa_a_tener_esa_probabilidad_de(Double double1) {
        assertEquals(r.getOccurrenceProbability(), double1);
    }

    @Then("ese riesgo no pasa a tener esa probabilidad de {double}")
    public void ese_riesgo_no_pasa_a_tener_esa_probabilidad_de(Double double1) {
        assertNotEquals(r.getOccurrenceProbability(), double1);
    }

    @When("ingreso un impacto de {double}")
    public void ingreso_un_impacto_de(Double double1) {
        if ((double1 >= 0.0) && (double1 <= 1.0)) r.setImpact(double1);
    }

    @Then("ese riesgo pasa a tener ese impacto de {double}")
    public void ese_riesgo_pasa_a_tener_ese_impacto_de(Double double1) {
        assertEquals(r.getImpact(), double1);
    }

    @Then("ese riesgo no pasa a tener ese impacto de {double}")
    public void ese_riesgo_no_pasa_a_tener_ese_impacto_de(Double double1) {
        assertNotEquals(r.getImpact(), double1);
    }

    @When("ingreso una probabilidad de {double} y un impacto de {double} y se calcula su exposicion")
    public void ingreso_una_probabilidad_de_y_un_impacto_de_y_se_calcula_su_exposicion(Double double1, Double double2) {
        if ((double1 >= 0.0) && (double1 <= 1.0)) r.setOccurrenceProbability(double1);
        if ((double1 >= 0.0) && (double1 <= 1.0)) r.setImpact(double2);
        r.calculateExposure();
    }

    @Then("ese riesgo pasa a tener {double} de exposicion")
    public void ese_riesgo_pasa_a_tener_de_exposicion(Double double1) {
        assertEquals(r.getExposure(), double1);
    }

}