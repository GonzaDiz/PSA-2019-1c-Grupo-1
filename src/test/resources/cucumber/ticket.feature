Feature: Ticket

    Scenario: See the ticket description
        Given I have an open ticket
        When I access the ticket information
        Then I see the ticket problem description

    Scenario: Assign a ticket to a developer
        Given I have an open ticket
        When I assign a developer to solve the ticket
        Then I can see the developer is effectively assigned

    Scenario: Assign a new resource to a ticket
        Given I have an open ticket with a resource assigned
        When I assign a new developer to solve the ticket
        Then I can see the new developer is effectively assigned