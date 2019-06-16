package com.psa.psa.model.resources;

import javax.validation.ValidationException;
import java.util.Arrays;

public enum Seniority {
    TRAINEE("Trainee"),
    JUNIOR("Junior"),
    JUNIOR_ADVANCE("Junior advance"),
    SEMI_SENIOR("Semi-Senior"),
    SENIOR("Senior"),
    TBD("A determinar");

    private String description;

    Seniority(String description) {
        this.description = description;
    }

    public static Seniority fromDescription(String description) {
        return Arrays.stream(Seniority.values())
                .filter(seniority -> seniority.getDescription().equals(description))
                .findFirst()
                .orElseThrow(() -> new ValidationException("No seniority matching description " + description));
    }

    public String getDescription() {
        return description;
    }
}
