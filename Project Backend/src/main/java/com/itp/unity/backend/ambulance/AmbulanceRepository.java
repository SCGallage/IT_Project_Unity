package com.itp.unity.backend.ambulance;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AmbulanceRepository extends JpaRepository<Ambulance, String> {
    List<Ambulance> findByAmbulanceOwner(String f_name);
}