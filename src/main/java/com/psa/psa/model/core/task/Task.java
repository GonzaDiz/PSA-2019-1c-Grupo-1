package com.psa.psa.model.core.task;

import java.time.Duration;
import java.time.LocalDateTime;

public class Task {

    private Long id;
    private String name;
    private String title;
    private String description;
    private TaskState taskState;
    private Duration estimatedTimeToComplete;
    private Duration dedicatedHoursToComplete;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
}
