package com.ccuellar.administrator.repository;

import com.ccuellar.administrator.model.Hospital;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "hospital", path = "hospital")
public interface HospitalRepository extends PagingAndSortingRepository<Hospital, Long> {
}
