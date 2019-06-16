package com.psa.psa.model.risk;

public class RiskConfig {

    public Double lowMediumLimit;
    public Double mediumHighLimit;
    public Double exposureLimit;

    public RiskConfig(Double lowMedium,Double mediumHigh,Double exposureLimit){
        this.lowMediumLimit = lowMedium;
        this.mediumHighLimit = mediumHigh;
        this.exposureLimit = exposureLimit;
    }
}
