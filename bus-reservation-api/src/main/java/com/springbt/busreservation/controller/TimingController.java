package com.springbt.busreservation.controller;


import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.stream.LongStream;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springbt.busreservation.model.Reservation;
import com.springbt.busreservation.model.Timing;
import com.springbt.busreservation.model.WorkingTiming;
import com.springbt.busreservation.repository.ReservationRepository;
import com.springbt.busreservation.repository.TimingRepository;
import com.springbt.busreservation.repository.WorkingTimeRepository;
import com.sun.el.parser.ParseException;


@CrossOrigin(origins = "*", allowedHeaders = "*")

@RestController
@RequestMapping("/api/v1/busreservation")
public class TimingController {

	@Autowired
    private TimingRepository timingRepository;
    @Autowired
    private WorkingTimeRepository workingTimeRepository;

    @Autowired
    private ReservationRepository reservationRepository;

    @GetMapping("/timing")
    public List<Timing> getAllTimings(){
        return timingRepository.findAll();
    }

    @PostMapping("/timing")
    public Timing createTiming(@Valid @RequestBody Timing timing) {
        return timingRepository.save(timing);
    }

    @GetMapping("/workingtimings")
    public List<WorkingTiming> getAllWorkingTimings(){
        return  workingTimeRepository.findAll();
    }

    @PostMapping("/workingtimings")
    public  WorkingTiming createWorkingTimings(@Valid @RequestBody WorkingTiming workingTiming){
        return  workingTimeRepository.save(workingTiming);
    }

    @GetMapping("/timing/available/{id}/{date}")
    public List<Timing> getAvaiableTimesForBus(@PathVariable(value = "id") Long busId, @PathVariable(value = "date") String date) throws ParseException, java.text.ParseException {
        List<Timing> timing= timingRepository.findAll();
        Date uDate = new SimpleDateFormat("yyyy-mm-dd").parse(date);
        List<Reservation> reservation = reservationRepository.findBookingByDateEqualsAndAndBusId( uDate, busId);
        long[] usedTimings = new long[reservation.size()];
        for (int i = 0; i < usedTimings.length; i++) {
            System.out.println(reservation.get(i).getTimeId());
            usedTimings[i]=reservation.get(i).getTimeId();
        }
        timing.removeIf(slot -> LongStream.of(usedTimings).anyMatch(x -> x == slot.getId()));
        return  timing;
    }
}