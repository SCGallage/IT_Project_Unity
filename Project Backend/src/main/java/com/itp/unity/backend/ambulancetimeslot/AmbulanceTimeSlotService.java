package com.itp.unity.backend.ambulancetimeslot;

import com.itp.unity.backend.ambulance.Ambulance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class AmbulanceTimeSlotService{

    @Autowired
    AmbulanceTimeSlotRepository ambulanceTimeSlotRepository;

        //save time slots
    public AmbulanceTimeSlot createAmbtslot(AmbulanceTimeSlot ambulanceTimeSlot) {
        return ambulanceTimeSlotRepository.save(ambulanceTimeSlot);
    }

 /*   public String deleteAmbt(String Id) {
        Optional<AmbulanceTimeSlot> ambulanceTSlot = ambulanceTimeSlotRepository.findById(Id);
        if (ambulanceTSlot.isPresent()) {
            ambulanceTimeSlotRepository.deleteById(Id);
            return "Deleted " + Id;
        } else
            return "Id is not found";
    }*/

    //Finding ambulance time slot by id
    public AmbulanceTimeSlot getAtimeSlotbyId(String Id) {
        return ambulanceTimeSlotRepository.findById(Id).orElse(null);
    }

    //get all (worked)
    // /Finding all ambulance details
    public List<AmbulanceTimeSlot> getAllATSlot() {
        List<AmbulanceTimeSlot> ambulanceTimeSlot = new ArrayList<>();
        ambulanceTimeSlot.addAll(ambulanceTimeSlotRepository.findAll());
        return ambulanceTimeSlot;
    }

   /* //Finding all ambulance time slots
    public List<AmbulanceTimeSlot> getAllATSlot() {
        List<AmbulanceTimeSlot> ambulanceTimeSlots = new ArrayList<>();
        try {
            ambulanceTimeSlots = ambulanceTimeSlotRepository.findAll();
            return ambulanceTimeSlots;
        }catch (Exception e){
            return null;
        }
    }*/

    //delete time slots by id
    public void deleteById(String id){
        ambulanceTimeSlotRepository.deleteById(id);
    }

    //update ambulance
    public Optional<AmbulanceTimeSlot> updateAmbt(String id, AmbulanceTimeSlot ambulanceTimeSlot){
        return ambulanceTimeSlotRepository.findById(id).map((t)->{
            t.setState(ambulanceTimeSlot.getState());
            t.setTime(ambulanceTimeSlot.getTime());
            t.setPhone(ambulanceTimeSlot.getPhone());
            t.setAmbulanceId(ambulanceTimeSlot.getAmbulanceId());
            t.setDriverId(ambulanceTimeSlot.getDriverId());
            t.setNurseId(ambulanceTimeSlot.getNurseId());
            return ambulanceTimeSlotRepository.save(t);
        });
    }

/*
    public List<AmbulanceTimeSlot> getAllAmbulanceTimeSlots() {
        List<AmbulanceTimeSlot> ambulanceTimeSlots = new ArrayList<>();
        ambulanceTimeSlotRepository.findAll()
                .forEach(ambulanceTimeSlots::add);
        return ambulanceTimeSlots;
    }

    public AmbulanceTimeSlot getAmbulanceTimeSlot(String id){
        return ambulanceTimeSlots.stream().filter(a -> a.getId().equals(id)).findFirst().get();
    }

    public void addAmbulanceTimeSlot(AmbulanceTimeSlot ambulanceTimeSlot){
        ambulanceTimeSlotRepository.save(ambulanceTimeSlot);
    }

    public void updateAmbulanceTimeSlot(String id, AmbulanceTimeSlot ambulanceTimeSlot){
        for (int i = 0; i < ambulanceTimeSlots.size(); i++){
            AmbulanceTimeSlot a = ambulanceTimeSlots.get(i);
            if (a.getId().equals(id)){
                ambulanceTimeSlots.set(i, ambulanceTimeSlot);
                return;
            }
        }
    }

    public void deleteAmbulanceTimeSlot(String id){
        ambulanceTimeSlots.removeIf(a -> a.getId().equals(id));
    }
*/

}
