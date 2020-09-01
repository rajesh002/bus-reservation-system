package com.springbt.busreservation.controller;

import antlr.ASTNULLType;
import com.springbt.busreservation.exception.ResourceNotFoundException;
import com.springbt.busreservation.model.Bus;
import com.springbt.busreservation.repository.BusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*", allowedHeaders = "*")
//@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/busreservation")
public class BusController {

    @Autowired
    private BusRepository busRepository;

    @GetMapping("/buses")
    public List<Bus> getAllBuses(){
        return  busRepository.findAll();
    }

    @PostMapping("/buses")
    public Bus createBus(@Valid @RequestBody Bus bus){
       return busRepository.save(bus);
    }

    @DeleteMapping("/buses/{id}")
    public Map<String, Boolean> deleteBus(@PathVariable(value = "id") Long busId)
            throws ResourceNotFoundException {
        Bus bus = busRepository.findById(busId)
                .orElseThrow(() -> new ResourceNotFoundException("Bus not found for this id :: " + busId));

        busRepository.delete(bus);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }

    @GetMapping("/buses/{id}")
    public ResponseEntity<Bus> getBusByID(@PathVariable(value = "id") Long busId)
            throws ResourceNotFoundException {
        Bus bus = busRepository.findById(busId)
                .orElseThrow(() -> new ResourceNotFoundException("Bus not found for this id :: " + busId));
        return ResponseEntity.ok().body(bus);
    }


    @PutMapping("/buses/{id}")
    public ResponseEntity<Bus> updateBus(@PathVariable(value = "id") Long busId,
                                                   @Valid @RequestBody Bus busDetails) throws ResourceNotFoundException {
        Bus bus = busRepository.findById(busId)
                .orElseThrow(() -> new ResourceNotFoundException("Bus not found for this id :: " + busId));

        bus.setBusFrom(busDetails.getBusFrom());
        bus.setName(busDetails.getName());
        bus.setBusTo(busDetails.getBusTo());

        final Bus updatedBus = busRepository.save(bus);
        return ResponseEntity.ok(updatedBus);
    }
}