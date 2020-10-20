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
    public Ambulance createAmb(Ambulance ambulance) {
        return ambulanceRepository.save(ambulance);
    }
/*
    //delete by id
    public String deleteAmb(String id) {
        Optional<Ambulance> ambulances = ambulanceRepository.findById(id);
        if (ambulances.isPresent()) {
            ambulanceRepository.deleteById(id);
            return "Deleted " + id;
        } else
            return "Id is not found";
    }*/

    //delete by id
    public void deleteAmb(String id) {
        ambulanceRepository.deleteById(id);
    }

        //Finding ambulance by id
    public Ambulance getAmbulancebyId(String id) {
        return ambulanceRepository.findById(id).orElse(null);
    }

    //Finding all ambulance details
    public List<Ambulance> getAllAmbulance() {
        List<Ambulance> ambulances = new ArrayList<>();
        ambulances.addAll(ambulanceRepository.findAll());
        return ambulances;
    }

    //update ambulance
    public Optional<Ambulance> updateAmb(String id, Ambulance ambulance){
        return ambulanceRepository.findById(id).map((d)->{
            d.setRegNo(ambulance.getRegNo());
            d.setVehiModel(ambulance.getVehiModel());
            d.setEmail(ambulance.getEmail());
            d.setPhone(ambulance.getPhone());
            d.setfName(ambulance.getfName());
            d.setlName(ambulance.getlName());
            d.setCity(ambulance.getCity());
            d.setVehiDetails(ambulance.getVehiDetails());
            return ambulanceRepository.save(d);
        });
    }
}

    //find by owner
   /* public Ambulance getbyAmbulanceOwner(String owner) {
        return (Ambulance) ambulanceRepository.findByAmbulanceOwner(owner);
    }
*/



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

