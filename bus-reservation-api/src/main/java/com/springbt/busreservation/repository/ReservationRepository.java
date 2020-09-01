package com.springbt.busreservation.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springbt.busreservation.model.Reservation;

@Repository
public interface ReservationRepository  extends JpaRepository<Reservation, Long> {
    public  List<Reservation> findBookingByDateEqualsAndAndBusId( Date uDate, Long busId);
}