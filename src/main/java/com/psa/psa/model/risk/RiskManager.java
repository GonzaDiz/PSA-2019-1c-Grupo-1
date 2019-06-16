package com.psa.psa.model.risk;

import java.util.Collection;
import java.util.HashMap;

public class RiskManager {


    private Integer nextId;
    private RiskConfig config;


    private HashMap<Integer, Risk> risks;

    public RiskManager(){
        nextId = 0;
        config = new RiskConfig(0.3,0.7,0.7);
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
        return config.lowMediumLimit;
    }

    public void setLowMediumLimit(Double lowMediumLimit) {
        if(lowMediumLimit<=0 || lowMediumLimit>=1 || lowMediumLimit > config.mediumHighLimit){
            return;
        }
        this.config.lowMediumLimit = lowMediumLimit;
    }

    public Double getMediumHighLimit() {
        return config.mediumHighLimit;
    }

    public void setMediumHighLimit(Double mediumHighLimit) {
        if (mediumHighLimit <=0 || mediumHighLimit>=1 || mediumHighLimit < config.lowMediumLimit){
            return;
        }
        this.config.mediumHighLimit = mediumHighLimit;
    }

    public Double getExposureLimit() {
        return config.exposureLimit;
    }

    public void setExposureLimit(Double exposureLimit) {
        if (exposureLimit<=0 || exposureLimit>=1){
            return;
        }
        this.config.exposureLimit = exposureLimit;
    }

    private Risk returnRiskQualitative(Risk risk){
        if (risk==null){
            return null;
        }
        this.setRiskQualitative(risk);
        return risk;
    }

    private void setRiskQualitative(Risk risk){
        if (risk==null){
            return;
        }
        if (risk.getProbability() >= config.mediumHighLimit){
            risk.setQualitativeProbability(RiskLevel.HIGH);
        } else if (risk.getProbability() >= config.lowMediumLimit){
            risk.setQualitativeProbability(RiskLevel.MEDIUM);
        } else {
            risk.setQualitativeProbability(RiskLevel.LOW);
        }

        if (risk.getExposure() >= config.mediumHighLimit){
            risk.setQualitativeExposure(RiskLevel.HIGH);
        } else if ( risk.getExposure() >= config.lowMediumLimit){
            risk.setQualitativeExposure(RiskLevel.MEDIUM);
        } else {
            risk.setQualitativeExposure(RiskLevel.LOW);
        }

        if (risk.getImpact() >= config.mediumHighLimit){
            risk.setQualitativeImpact(RiskLevel.HIGH);
        } else if (risk.getImpact() >= config.lowMediumLimit){
            risk.setQualitativeImpact(RiskLevel.MEDIUM);
        } else {
            risk.setQualitativeImpact(RiskLevel.LOW);
        }

        if (risk.getExposure() >= config.exposureLimit){
            risk.setUrgent(true);
        } else {
            risk.setUrgent(false);
        }
    }

    public Risk getById(Integer riskId){
        return risks.get(riskId);
    }

    public Collection<Risk> getAllRisks(){
        for(Risk r : risks.values()){
            this.setRiskQualitative(r);
        }
        return risks.values();
    }

    public RiskConfig getConfig(){
        return this.config;
    }
}
