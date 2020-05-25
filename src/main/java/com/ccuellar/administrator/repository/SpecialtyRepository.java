package com.ccuellar.administrator.repository;

import com.ccuellar.administrator.model.Specialty;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "specialty", path = "specialty")
public interface SpecialtyRepository extends PagingAndSortingRepository<Specialty, Long> {
}
