package com.itp.unity.backend.ambulance;

import jdk.jfr.Frequency;
import org.hibernate.annotations.Fetch;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class AmbulanceController {

    @Autowired
    AmbulanceService ambulanceService;

    //get all (worked)
    @GetMapping("/ambulances")
    public List <Ambulance> getAllAmbulances(){
        return ambulanceService.getAllAmbulance();
    }

    //get by id (worked)
    @GetMapping("/ambulance/{id}")
    public Ambulance getAmbulancebyId( @PathVariable String id){
        return ambulanceService.getAmbulancebyId(id);
    }

    //adding
    @PostMapping("/ambulance")
    public Ambulance createAmb(@RequestBody Ambulance ambulance){
        //ambulanceService.createAmb(ambulance);
        return ambulanceService.createAmb(ambulance);
    }

    //update by id xxxxxxxxxxxxxxxxxxxxxxx
    @PutMapping("/ambulance/{id}")
    public Optional<Ambulance> createAmb(@PathVariable("id") String id, @Valid @RequestBody Ambulance ambulance) {
        return ambulanceService.updateAmb(id, ambulance);
    }

    /*//delete by id xxxxxxxxxxxxxxxxxxxxxxxxx
    @DeleteMapping("/ambulance/{id}")
    public void deleteById(@PathVariable("id") String id){

        ambulanceService.deleteAmb(id);
    }*/
/*
    //adding
    @PostMapping("/ambulance")
    private String saveAmbulance(@RequestBody Ambulance ambulance){
        ambulanceService.createAmb(ambulance);
        return ambulance.getId();
    }

    @DeleteMapping("/ambulance/{id}")
    private void deleteById(@PathVariable String id){
        ambulanceService.deleteAmb(id);
    }
/*
    @RequestMapping("/ambulance/{fname}")
    public List<Ambulance> findByAmbulanceOwner(@PathVariable String f_name){
        return ambulanceService.findByAmbulanceOwner(f_name);
    }

    @RequestMapping"/ambulance/{id}")
    public List<Ambulance> findByAmbulanceId(){
        return AmbulanceService.findByAmbulanceId(id);
    }
*/

/*
    @GetMapping("/ambulance")
    public @ResponseBody ResponseEntity <List <Ambulance>> getAllAmbulances(){
        try {
            return new ResponseEntity<>(ambulanceService.getAllAmbulances(), HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/ambulance/{id}")
    public @ResponseBody ResponseEntity<?> getAmbulanceById(@PathVariable String id){
        try {
            if(ambulanceService.getAmbulancebyId(id) != null) {
                return new ResponseEntity<>(ambulanceService.getAmbulancebyId(id), HttpStatus.OK);
            }else{
                return new ResponseEntity<>("Id doesnot exists", HttpStatus.BAD_REQUEST);
            }
            }catch (Exception e){
            return new ResponseEntity<>("Error occured when finding", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
*/
/*
    @GetMapping("/ambulance/{id}")
    private Ambulance getAmbulance(@PathVariable("id") String id)
    {
        return ambulanceService.getAmbulancebyId(id);
    }
*/


    /*
//delete all
    @DeleteMapping("/ambulancedetails")
    public ResponseEntity<HttpStatus> deleteAll() {
        try{
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
//Delete by id
    @DeleteMapping("/ambulancedetails/{id}")
    public ResponseEntity<HttpStatus> deleteById(@PathVariable("id") String id) {
        try{
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
//save
    @PostMapping("/ambulancedetails")
    public  ResponseEntity<Ambulance> createAmb(@RequestBody Ambulance ambulance){
        try{
            return new ResponseEntity<>(ambulance, HttpStatus.CREATED);
        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    */

}
