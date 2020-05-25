package com.ccuellar.administrator.model;

import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
public class Patient extends Person {
    @ManyToMany(mappedBy = "patients")
    private List<Doctor> doctors;

    @OneToMany(mappedBy = "patient")
    private List<VisitNote> visitNotes;

    public List<Doctor> getDoctors() {
        return doctors;
    }

    public void setDoctors(List<Doctor> doctors) {
        this.doctors = doctors;
    }

    public List<VisitNote> getVisitNotes() {
        return visitNotes;
    }

    public void setVisitNotes(List<VisitNote> visitNotes) {
        this.visitNotes = visitNotes;
    }
}
