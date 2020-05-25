package com.ccuellar.administrator.repository;

import com.ccuellar.administrator.model.Doctor;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "doctor", path = "doctor")
public interface DoctorRepository extends PersonRepository<Doctor> {
}

