package com.springbt.busreservation.model;
import javax.persistence.*;

@Entity
@Table(name = "workingTiming")
public class WorkingTiming {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Column(name = "busId", nullable = false)
    private  Long busId;

    public Long getExpertId() {
        return busId;
    }

    public void setExpertId(Long busId) {
        this.busId = busId;
    }

    @Column(name = "timeId", nullable = false)
        private  Long timeId;


    public Long getTimeId() {
        return timeId;
    }

    public void setTimeId(Long timeId) {
        this.timeId = timeId;
    }
}