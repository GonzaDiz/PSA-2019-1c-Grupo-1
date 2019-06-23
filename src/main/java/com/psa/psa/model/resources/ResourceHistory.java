package com.psa.psa.model.resources;

import java.util.ArrayList;
import java.util.List;

public class ResourceHistory {

    private List<Assignation> assignations = new ArrayList<>();

    public List<Assignation> getAssignations() {
        return assignations;
    }

    public void setAssignations(List<Assignation> assignations) {
        this.assignations = assignations;
    }
}
