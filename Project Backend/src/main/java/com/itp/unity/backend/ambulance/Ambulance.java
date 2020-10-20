package com.itp.unity.backend.ambulance;

import javax.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "ambulance")
//@SequenceGenerator(name="emSequence", initialValue=8000, allocationSize=9000)

public class Ambulance{

    @Id
    //@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "emSequence")
    private String id;

    @Column(name="reg_No")
    private String regNo;

    @Column(name="vehi_Model")
    private String vehiModel;

    @Column(name="email")
    private String email;

    @Column(name="mobile")
    private String phone;

    @Column(name="f_name")
    private String fName;

    @Column(name="l_name")
    private String lName;

    @Column(name="city")
    private String city;

    @Column(name="Details")
    private String vehiDetails;

    public Ambulance() {
        super();
    }

    public Ambulance (String regNo, String vehiModel, String email, String phone, String fName, String lName, String city, String vehiDetails) {
        super();
        //this.id = id;
        this.regNo = regNo;
        this.vehiModel = vehiModel;
        this.email = email;
        this.phone = phone;
        this.fName = fName;
        this.lName = lName;
        this.city = city;
        this.vehiDetails = vehiDetails;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getRegNo() {
        return regNo;
    }

    public void setRegNo(String regNo) {
        this.regNo = regNo;
    }

    public String getVehiModel() {
        return vehiModel;
    }

    public void setVehiModel(String vehiModel) {
        this.vehiModel = vehiModel;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getfName() {
        return fName;
    }

    public void setfName(String fName) {
        this.fName = fName;
    }

    public String getlName() {
        return lName;
    }

    public void setlName(String lName) {
        this.lName = lName;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getVehiDetails() {
        return vehiDetails;
    }

    public void setVehiDetails(String vehiDetails) {
        this.vehiDetails = vehiDetails;
    }
/*
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Ambulance)) return false;
        Ambulance ambulance = (Ambulance) o;
        return getId().equals(ambulance.getId()) &&
                Objects.equals(getRegNo(), ambulance.getRegNo()) &&
                Objects.equals(getVehiModel(), ambulance.getVehiModel()) &&
                Objects.equals(getEmail(), ambulance.getEmail()) &&
                Objects.equals(getPhone(), ambulance.getPhone()) &&
                Objects.equals(getfName(), ambulance.getfName()) &&
                Objects.equals(getlName(), ambulance.getlName()) &&
                Objects.equals(getCity(), ambulance.getCity()) &&
                Objects.equals(getVehiDetails(), ambulance.getVehiDetails()) &&
                Objects.equals(getAction_(), ambulance.getAction_());
    }
*/
    /*
    @Override
    public int hashCode() {
        return Objects.hash(getId(), getRegNo(), getVehiModel(), getEmail(), getPhone(), getfName(), getlName(), getCity(), getVehiDetails(), getAction_());
    }

    @Override
    public String toString() {
        return "Ambulance{" +
                "id='" + id + '\'' +
                ", regNo='" + regNo + '\'' +
                ", vehiModel='" + vehiModel + '\'' +
                ", email='" + email + '\'' +
                ", phone='" + phone + '\'' +
                ", fName='" + fName + '\'' +
                ", lName='" + lName + '\'' +
                ", city='" + city + '\'' +
                ", vehiDetails='" + vehiDetails + '\'' +
                ", action_='" + action_ + '\'' +
                '}';
    }
*/

}
