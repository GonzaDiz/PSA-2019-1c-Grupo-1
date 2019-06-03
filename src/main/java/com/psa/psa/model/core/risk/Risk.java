package com.psa.psa.model.core.risk;

public class Risk {

    private Long id;
    private String description;
    private RiskLevel riskLevel;
    private Double impact;
    private Double occurrenceProbability;
    private Double exposure;
    private Integer priority;

    public void setId(Long id) {this.id = id;}
    public void setDescription(String description) {this.description = description;}
    public void setRiskLevel(RiskLevel riskLevel) {this.riskLevel = riskLevel;}
    public void setImpact(Double impact) {this.impact = impact;}
    public void setOccurrenceProbability(Double occurrenceProbability) {this.occurrenceProbability = occurrenceProbability;}
    public void setExposure(Double exposure) {this.exposure = exposure;}
    public void setPriority(Integer priority) {this.priority = priority;}

    public Long getId() {return id;}
    public String getDescription() {return description;}
    public RiskLevel getRiskLevel() {return riskLevel;}
    public Double getImpact() {return impact;}
    public Double getOccurrenceProbability() {return occurrenceProbability;}
    public Double getExposure() {return exposure;}
    public Integer getPriority() {return priority;}

    public void calculateExposure(){
        this.exposure = Math.round((occurrenceProbability * impact)*100.0)/100.0;
        if (exposure <= 0.33) setRiskLevel(riskLevel.LOW);                      //Despues estos 0.33 y 0.66 deben ser configurables
        else if (exposure <= 0.66) setRiskLevel(riskLevel.MEDIUM);
        else setRiskLevel(RiskLevel.HIGH);
    }

}
