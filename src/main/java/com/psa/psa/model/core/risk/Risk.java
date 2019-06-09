package com.psa.psa.model.core.risk;

public class Risk {

    private Integer id;
    private String description;
    private Double impact;
    private Double probability;
    private Double exposure;
    private Integer priority;
    private RiskLevel qualitativeProbability;
    private RiskLevel qualitativeExposure;
    private RiskLevel qualitativeImpact;
    private boolean urgent;



    public void setDescription(String description) {this.description = description;}

    public Risk(Integer id, String description, Double probability, Double impact){

        if (probability<=0 || probability>=1 || impact <= 0 || impact >=1){
            throw new RuntimeException("Valor invalido para riesgo");
        }
        this.description = description;
        this.impact = impact;
        this.exposure = probability*impact;
        this.probability = probability;
        this.id = id;
    }


    public Integer getId() {return id;}
    public String getDescription() {return description;}
    public Double getImpact() {return impact;}
    public Double getProbability() {return probability;}
    public Double getExposure() {return exposure;}

    public void setQualitativeExposure(RiskLevel qualitativeExposure) {
        this.qualitativeExposure = qualitativeExposure;
    }

    public void setQualitativeImpact(RiskLevel qualitativeImpact) {
        this.qualitativeImpact = qualitativeImpact;
    }

    public void setQualitativeProbability(RiskLevel qualitativeProbability) {
        this.qualitativeProbability = qualitativeProbability;
    }

    public void setUrgent(boolean urgent) {
        this.urgent = urgent;
    }

    public void setProbability(Double probability){
        if (probability<=0 || probability >=1){
            throw new RuntimeException("Probabilidad invalida para riesgo");
        }
        this.probability = probability;
        this.exposure = this.probability*this.impact;
    }

    public void setImpact(Double impact){
        if (impact <= 0 || impact>=1){
            throw new RuntimeException("Impacto invalido para riesgo");
        }
        this.impact = impact;
        this.exposure = this.impact*this.probability;
    }
}