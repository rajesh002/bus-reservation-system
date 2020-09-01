package com.springbt.busreservation.repository;

import com.springbt.busreservation.model.Timing;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TimingRepository extends JpaRepository<Timing, Long> {

}
