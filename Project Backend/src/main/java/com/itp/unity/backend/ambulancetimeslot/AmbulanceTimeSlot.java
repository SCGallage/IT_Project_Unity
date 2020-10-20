package com.itp.unity.backend.ambulancetimeslot;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name="timeslot_details")
//@SequenceGenerator(name="amSequence", initialValue=9000, allocationSize=10000)

public class AmbulanceTimeSlot {

    @Id
    //@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "amSequence")
    //@GeneratedValue(strategy = GenerationType.AUTO)
    @GeneratedValue
    private String id;

    @Column(name="status")
    private String state;

    @Column(name="time")
    private String time;

    @Column(name="phone")
    private String phone;

    @Column(name="ambulance_id")
    private String ambulanceId;

    @Column(name="driver_id")
    private String driverId;

    @Column(name="nurse_id")
    private String nurseId;

    public AmbulanceTimeSlot() {
    }

    public AmbulanceTimeSlot(String id, String state, String time, String phone, String ambulanceId, String driverId, String nurseId) {
        super();
        this.id = id;
        this.state = state;
        this.time = time;
        this.phone = phone;
        this.ambulanceId = ambulanceId;
        this.driverId = driverId;
        this.nurseId = nurseId;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getTime() { return time; }

    public void setTime(String time) {
        this.time = time;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAmbulanceId() {
        return ambulanceId;
    }

    public void setAmbulanceId(String ambulanceId) {
        this.ambulanceId = ambulanceId;
    }

    public String getDriverId() {
        return driverId;
    }

    public void setDriverId(String driverId) {
        this.driverId = driverId;
    }

    public String getNurseId() {
        return nurseId;
    }

    public void setNurseId(String nurseId) {
        this.nurseId = nurseId;
    }

   /* @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof AmbulanceTimeSlot)) return false;
        AmbulanceTimeSlot that = (AmbulanceTimeSlot) o;
        return getId().equals(that.getId()) &&
                Objects.equals(getState(), that.getState()) &&
                Objects.equals(getTime(), that.getTime()) &&
                Objects.equals(setPhone(), that.getPhone()) &&
                Objects.equals(getAmbulanceId(), that.getAmbulanceId()) &&
                Objects.equals(getDriverId(), that.getDriverId()) &&
                Objects.equals(getNurseId(), that.getNurseId());
    }*/

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getState(), getTime(), getPhone(), getAmbulanceId(), getDriverId(), getNurseId());
    }
/*
    @Override
    public String toString() {
        return "AmbulanceTimeSlot{" +
                "id='" + id + '\'' +
                ", state='" + state + '\'' +
                ", time='" + time + '\'' +
                ", email='" + email + '\'' +
                ", ambulanceId='" + ambulanceId + '\'' +
                ", driverId='" + driverId + '\'' +
                ", nurseId='" + nurseId + '\'' +
                ", action='" + action + '\'' +
                '}';
    }
*/
}

