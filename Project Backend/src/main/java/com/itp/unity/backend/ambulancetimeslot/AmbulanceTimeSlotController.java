package com.itp.unity.backend.ambulancetimeslot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/api")
public class AmbulanceTimeSlotController {

    @Autowired
    AmbulanceTimeSlotService ambulanceTimeSlotService;

    //get all (worked)
    @GetMapping("/ambulance-timeslots")
    public List <AmbulanceTimeSlot> getAllATSlot(){
        return ambulanceTimeSlotService.getAllATSlot();
    }

    //get by id (worked)
    @GetMapping("/ambulance-timeslot/{id}")
    public AmbulanceTimeSlot getAtimeSlotbyId( @PathVariable String id){
        return ambulanceTimeSlotService.getAtimeSlotbyId(id);
    }

  /*  //adding
    @PostMapping("/ambulance-timeslot")
    public AmbulanceTimeSlot createAmbtslot(@Valid @RequestBody AmbulanceTimeSlot ambulanceTimeSlot){
        //ambulanceService.createAmbtslot(ambulanceTSlot);
        return ambulanceTimeSlotService.createAmbtslot(ambulanceTimeSlot);
    }*/

    @PostMapping("/ambulancetimeslot")
    public  ResponseEntity<AmbulanceTimeSlot> createAmbtslot(@RequestBody AmbulanceTimeSlot ambulanceTimeSlot){
        try{
            return new ResponseEntity<>(ambulanceTimeSlot, HttpStatus.CREATED);
        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //update by id xxxxxxxxxxxxxxxxxxxxxxx
    @PutMapping("/ambulance-timeslot/{id}")
    public Optional<AmbulanceTimeSlot> createAmbtslot(@PathVariable("id") String id, @Valid @RequestBody AmbulanceTimeSlot ambulanceTimeSlot) {
        return ambulanceTimeSlotService.updateAmbt((id), ambulanceTimeSlot);
    }

   /* //delete by id xxxxxxxxxxxxxxxxxxxxxxxxx
    @DeleteMapping("/ambulance-timeslot/{id}")
    public ResponseEntity<?> deleteById(@PathVariable("id") String id){

        ambulanceTimeSlotService.deleteById(id);
        return ResponseEntity.ok().body("TimeSlot deleted " + id);
    }
*/

    /*
    //delete all
    @DeleteMapping("/ambulancetimeslotdetails")
    public ResponseEntity<HttpStatus> deleteAll() {
        try{
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


  /*  //get all time slots wwwwwwwwwwww
    @GetMapping("/ambulance-timeslots")
    public @ResponseBody ResponseEntity<List <AmbulanceTimeSlot>> getAllTimeSlots(){
        try {
            return new ResponseEntity<>(ambulanceTimeSlotService.getAllTimeSlots(), HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }*/
/*
//Delete by id
    @DeleteMapping("/ambulancetimeslotdetails/{id}")
    public ResponseEntity<HttpStatus> deleteById(@PathVariable("id") String id) {
        try{
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
}*/
//save
   /* @PostMapping("/ambulancetimeslotdetails")
    public  ResponseEntity<AmbulanceTimeSlot> createAmb(@RequestBody AmbulanceTimeSlot ambulanceTimeSlot){
        try{
            return new ResponseEntity<>(ambulanceTimeSlot, HttpStatus.CREATED);
        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    */
}






