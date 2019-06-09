package com.psa.psa.model.core.risk;

import java.util.HashMap;

public class RiskManager {


    private Integer nextId;
    private Double lowMediumLimit;
    private Double mediumHighLimit;


    private Double exposureLimit;

    private HashMap<Integer, Risk> risks;

    public RiskManager(){
        nextId = 0;
        lowMediumLimit = 0.3;
        mediumHighLimit = 0.7;
        exposureLimit = 0.7;
        risks = new HashMap<Integer,Risk>();
    }

    public Risk addRisk(String description, Double probability, Double exposure){
        if (description.isEmpty()){
            return null;
        }
        Risk newRisk = new Risk(nextId, description, probability, exposure);
        risks.put(newRisk.getId(),newRisk);
        nextId+=1;
        return returnRiskQualitative(newRisk);
    }

    public Double getLowMediumLimit() {
        return lowMediumLimit;
    }

    public void setLowMediumLimit(Double lowMediumLimit) {
        this.lowMediumLimit = lowMediumLimit;
    }

    public Double getMediumHighLimit() {
        return mediumHighLimit;
    }

    public void setMediumHighLimit(Double mediumHighLimit) {
        this.mediumHighLimit = mediumHighLimit;
    }

    public Double getExposureLimit() {
        return exposureLimit;
    }

    public void setExposureLimit(Double exposureLimit) {
        this.exposureLimit = exposureLimit;
    }

    private Risk returnRiskQualitative(Risk risk){
        if (risk==null){
            return null;
        }
        if (risk.getProbability() >= mediumHighLimit){
            risk.setQualitativeProbability(RiskLevel.HIGH);
        } else if (risk.getProbability() >= lowMediumLimit){
            risk.setQualitativeProbability(RiskLevel.MEDIUM);
        } else {
            risk.setQualitativeProbability(RiskLevel.LOW);
        }

        if (risk.getExposure() >= mediumHighLimit){
            risk.setQualitativeExposure(RiskLevel.HIGH);
        } else if ( risk.getExposure() >= lowMediumLimit){
            risk.setQualitativeExposure(RiskLevel.MEDIUM);
        } else {
            risk.setQualitativeExposure(RiskLevel.LOW);
        }

        if (risk.getImpact() >= mediumHighLimit){
            risk.setQualitativeImpact(RiskLevel.HIGH);
        } else if (risk.getImpact() >= lowMediumLimit){
            risk.setQualitativeImpact(RiskLevel.MEDIUM);
        } else {
            risk.setQualitativeImpact(RiskLevel.LOW);
        }

        if (risk.getExposure() >= exposureLimit){
            risk.setUrgent(true);
        } else {
            risk.setUrgent(false);
        }
        return risk;
    }

}
