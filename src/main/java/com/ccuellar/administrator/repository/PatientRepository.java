package com.ccuellar.administrator.repository;

import com.ccuellar.administrator.model.Patient;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "patient", path = "patient")
public interface PatientRepository extends PersonRepository<Patient> {
}
