package com.itp.unity.backend.ambulance;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class AmbulanceService {

    @Autowired
    private AmbulanceRepository ambulanceRepository;

    //save
    public void createAmb(Ambulance ambulance) {
        ambulanceRepository.save(ambulance);
    }

    //delete
    public String deleteAmb(String id) {
        Optional<Ambulance> ambulances = ambulanceRepository.findById(id);
        if (ambulances.isPresent()) {
            ambulanceRepository.deleteById(id);
            return "Deleted " + id;
        } else
            return "Id is not found";
    }

    //Finding ambulance by id
    public Ambulance getAmbulancebyId(String id) {
        return ambulanceRepository.findById(id).orElse(null);
    }

    //find by owner
    public Ambulance getbyAmbulanceOwner(String owner) {
        return (Ambulance) ambulanceRepository.findByAmbulanceOwner(owner);
    }

    public List<Ambulance> getAllAmbulance() {
        List<Ambulance> ambulances = new ArrayList<>();
        ambulances.addAll(ambulanceRepository.findAll());
        return ambulances;
    }
}


/*
    //Finding ambulance by id
    public Ambulance getAmbulancebyId(String id) {
        return ambulanceRepository.findById(id).orElse(null);

    }

    //delete(id)


    public void deleteAmb(String id){
        ambulanceRepository.deleteById(id);
    }

 */

    /*
    //save
    public Ambulance createAmb(Ambulance ambulance){
        return ambulanceRepository.save(ambulance);
    }

    public List<Ambulance> createAmb(List<Ambulance> ambulance){
        return ambulanceRepository.saveAll(ambulance);
    }


      /*

    public void updateAmbulance(String id, Ambulance ambulance){
        for (int i = 0; i < ambulances.size(); i++){
            Ambulance a = ambulances.get(i);
            if (a.getId().equals(id)){
                ambulances.set(i, ambulance);
                return;
            }
        }
    }

    public void deleteById(String id){
        ambulances.removeIf(a -> a.getId().equals(id));
    }
*/

