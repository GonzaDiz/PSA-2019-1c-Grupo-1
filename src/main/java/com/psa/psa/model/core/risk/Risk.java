package com.psa.psa.model.core.risk;

public class Risk {

    private Long id;
    private String description;
    private RiskLevel riskLevel;
    private Double impact;
    private Double occurrenceProbability;
    private Integer priority;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public RiskLevel getRiskLevel() {
        return riskLevel;
    }

    public void setRiskLevel(RiskLevel riskLevel) {
        this.riskLevel = riskLevel;
    }

    public Double getImpact() {
        return impact;
    }

    public void setImpact(Double impact) {
        this.impact = impact;
    }

    public Double getOccurrenceProbability() {
        return occurrenceProbability;
    }

    public void setOccurrenceProbability(Double occurrenceProbability) {
        this.occurrenceProbability = occurrenceProbability;
    }

    public Integer getPriority() {
        return priority;
    }

    public void setPriority(Integer priority) {
        this.priority = priority;
    }
}
