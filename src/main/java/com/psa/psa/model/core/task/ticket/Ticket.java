package com.psa.psa.model.core.task.ticket;

import com.psa.psa.model.core.resources.Resource;

import java.time.LocalDateTime;

public class Ticket {

    private Long id;
    private Long clientId;
    private String product;
    private LocalDateTime startDate;
    private Incident incident;
    private Resource assignedResource;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getClientId() {
        return clientId;
    }

    public void setClientId(Long clientId) {
        this.clientId = clientId;
    }

    public String getProduct() {
        return product;
    }

    public void setProduct(String product) {
        this.product = product;
    }

    public LocalDateTime getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDateTime startDate) {
        this.startDate = startDate;
    }

    public Incident getIncident() {
        return incident;
    }

    public void setIncident(Incident incident) {
        this.incident = incident;
    }

    public Resource getAssignedResource() {
        return assignedResource;
    }

    public void setAssignedResource(Resource assignedResource) {
        this.assignedResource = assignedResource;
    }
}
