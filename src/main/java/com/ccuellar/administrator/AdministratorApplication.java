package com.ccuellar.administrator;

import com.ccuellar.administrator.model.Hospital;
import com.ccuellar.administrator.repository.HospitalRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class AdministratorApplication {
	private static final Logger logger = LoggerFactory.getLogger(AdministratorApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(AdministratorApplication.class, args);
	}

//	@Bean
//	public CommandLineRunner demo(HospitalRepository hospitalRepository) {
//		return (args) -> {
//			hospitalRepository.save(new Hospital("Hospital de la Mujer", "Av. Saavedra #123"));
//			hospitalRepository.save(new Hospital("Hospital del Niño", "Av. Saavedra #124"));
//
//			// Get all Hospitals
//			logger.info("Hospitals found with findAll()");
//			logger.info("------------------------------");
//			for (Hospital hospital : hospitalRepository.findAll()) {
//				logger.info("Hospital " + hospital.getName());
//			}
//		};
//	}
}
