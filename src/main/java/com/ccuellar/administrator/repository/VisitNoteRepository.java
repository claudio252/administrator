package com.ccuellar.administrator.repository;

import com.ccuellar.administrator.model.VisitNote;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "visitNote", path = "visitNote")
public interface VisitNoteRepository extends PagingAndSortingRepository<VisitNote, Long> {
    List<VisitNote> findByDoctorId(@Param("doctorId") Long doctorId);
    List<VisitNote> findByPatientId(@Param("patientId") Long patientId);
}
