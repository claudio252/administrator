package com.ccuellar.administrator.repository;

import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.util.List;

@NoRepositoryBean
public interface PersonRepository<T> extends PagingAndSortingRepository<T, Long> {
    List<T> findByBirthDate(@DateTimeFormat(pattern = "yyyy-MM-dd") @Param("birthDate") LocalDate birthDate);
    List<T> findByName(@Param("name") String name);
    List<T> findByLastName(@Param("lastName") String lastName);
}
