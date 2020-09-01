package com.springbt.busreservation.repository;

import com.springbt.busreservation.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long>{
	Customer findByEmail(String email);
}

