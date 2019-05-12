package cucumber;

import com.psa.psa.model.core.resources.Resource;
import com.psa.psa.model.core.task.ticket.Incident;
import com.psa.psa.model.core.task.ticket.Ticket;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class TicketFeatureSteps {

    private static final String INCIDENT_DESCRIPTION = "Test description";
    private static final Long RESOURCE_CUIT = 12345L;
    private static final String RESOURCE_NAME = "Juan Perez";
    private static final Long RESOURCE_CUIT_ALT = 6789L;
    private static final String RESOURCE_NAME_ALT = "Pedro Rodriguez";
    private Ticket ticket;

    private Resource createResource(Long cuit, String name) {
        Resource resource = new Resource();
        resource.setCuit(cuit);
        resource.setName(name);
        return resource;
    }

    private Ticket createTicket() {
        Incident incident = new Incident();
        incident.setDescription(INCIDENT_DESCRIPTION);
        Ticket ticket = new Ticket();
        ticket.setIncident(incident);
        return ticket;
    }

    @Given("I have an open ticket")
    public void iHaveAnOpenTicket() {
        this.ticket = this.createTicket();
    }

    @When("I access the ticket information")
    public void iAccessTheTicketInformation() {

    }

    @Then("I see the ticket problem description")
    public void iSeeTheProblemDescription() {
        Assert.assertEquals(INCIDENT_DESCRIPTION, this.ticket.getIncident().getDescription());
    }

    @When("I assign a developer to solve the ticket")
    public void iAssignADeveloperToATicket() {
        Resource resource = this.createResource(RESOURCE_CUIT, RESOURCE_NAME);
        this.ticket.setAssignedResource(resource);
    }

    @Then("I can see the developer is effectively assigned")
    public void seeTheDeveloperIsAssigned() {
        Assert.assertEquals(RESOURCE_CUIT, this.ticket.getAssignedResource().getCuit());
        Assert.assertEquals(RESOURCE_NAME, this.ticket.getAssignedResource().getName());
    }

    @Given("I have an open ticket with a resource assigned")
    public void openTicketWithResourceAssigned() {
        this.ticket = this.createTicket();
        this.ticket.setAssignedResource(this.createResource(RESOURCE_CUIT, RESOURCE_NAME));
    }

    @When("I assign a new developer to solve the ticket")
    public void assignNewDeveloperToATicket() {
        Assert.assertEquals(RESOURCE_CUIT, this.ticket.getAssignedResource().getCuit());
        Assert.assertEquals(RESOURCE_NAME, this.ticket.getAssignedResource().getName());
        this.ticket.setAssignedResource(this.createResource(RESOURCE_CUIT_ALT, RESOURCE_NAME_ALT));
    }

    @Then("I can see the new developer is effectively assigned")
    public void seeTheNewDeveloperIsAssigned() {
        Assert.assertEquals(RESOURCE_CUIT_ALT, this.ticket.getAssignedResource().getCuit());
        Assert.assertEquals(RESOURCE_NAME_ALT, this.ticket.getAssignedResource().getName());
    }
}
