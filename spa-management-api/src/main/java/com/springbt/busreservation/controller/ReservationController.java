package com.springbt.busreservation.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springbt.busreservation.model.Reservation;
import com.springbt.busreservation.repository.ReservationRepository;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/v1/busreservation")
public class ReservationController {

	@Autowired
    private ReservationRepository reservationRepository;

    
    @GetMapping("/reservation")
    public List<Reservation> getAllReservation(){

        return  reservationRepository.findAll();
    }

    @PostMapping("/reservation")
    public Reservation createReservation(@Valid @RequestBody  Reservation reservation){
        reservation.setStatus("Created");
        return  reservationRepository.save(reservation);
    }

    @GetMapping("/reservation/{id}")
    public Reservation getReservationById(@PathVariable(value = "id") Long reservationId)
            throws ResourceNotFoundException {
    	Reservation reservation = reservationRepository.findById(reservationId)
                .orElseThrow(() -> new ResourceNotFoundException("Reservation details not found for given id :"+reservationId));
        return reservation;
    }

}