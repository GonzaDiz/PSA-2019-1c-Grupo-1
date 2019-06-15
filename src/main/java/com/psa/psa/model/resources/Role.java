package com.psa.psa.model.resources;

import javax.validation.ValidationException;
import java.util.Arrays;

public enum Role {
    DEVELOPER("Desarrollador"),
    QA("QA"),
    AUTOMATION("Automatización"),
    CONSULTANT("Consultor"),
    PROJECT_LEADER("Lider de proyecto"),
    SOFTWARE_ARCHITECT("Arquitecto de Software"),
    DATA_SCIENTIST("Data scientist"),
    PRODUCT_OWNER("Product owner"),
    PRODUCT_LEADER("Lider de producto"),
    TBD("A determinar");

    private String description;

    Role(String description) {
        this.description = description;
    }

    public String getDescription() {
        return description;
    }

    public static Role fromDescription(String description) {
        return Arrays.stream(Role.values())
                .filter(role -> role.getDescription().equals(description))
                .findFirst()
                .orElseThrow(() -> new ValidationException("No roles matching description" + description));
    }
}
