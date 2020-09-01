package com.springbt.busreservation.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springbt.busreservation.model.WorkingTiming;

@Repository
public interface WorkingTimeRepository extends JpaRepository<WorkingTiming, Long> {
}
