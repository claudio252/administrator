package com.ccuellar.administrator.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Doctor extends Person {
    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "specialty_doctor",
        joinColumns = @JoinColumn(name = "specialty_id", referencedColumnName = "id"),
        inverseJoinColumns = @JoinColumn(name = "doctor_id", referencedColumnName = "id")
    )
    private List<Specialty> specialties;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "patient_doctor",
            joinColumns = @JoinColumn(name = "patient_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "doctor_id", referencedColumnName = "id")
    )
    private List<Patient> patients;

    @ManyToOne
    @JoinColumn(name="hospital_id")
    private Hospital hospital;

    @OneToMany(mappedBy = "doctor")
    private List<VisitNote> visitNotes;

    public List<Specialty> getSpecialties() {
        return specialties;
    }

    public void setSpecialties(List<Specialty> specialties) {
        this.specialties = specialties;
    }

    public Hospital getHospital() {
        return hospital;
    }

    public void setHospital(Hospital hospital) {
        this.hospital = hospital;
    }

    public List<Patient> getPatients() {
        return patients;
    }

    public void setPatients(List<Patient> patients) {
        this.patients = patients;
    }

    public List<VisitNote> getVisitNotes() {
        return visitNotes;
    }

    public void setVisitNotes(List<VisitNote> visitNotes) {
        this.visitNotes = visitNotes;
    }
}
