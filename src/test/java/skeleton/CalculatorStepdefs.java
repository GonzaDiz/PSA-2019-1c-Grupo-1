package skeleton;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class CalculatorStepdefs {

    @Given("I have a calculator")
    public void i_have_a_calculator() {

    }

    @When("I add {int} and {int}")
    public int i_add_and(Integer int1, Integer int2) {
        return int1 + int2;
    }

    @Then("I get {int}")
    public void i_get(Integer int1) {
        // Write code here that turns the phrase above into concrete actions
        Assert.assertTrue(4 == int1);
    }


}
