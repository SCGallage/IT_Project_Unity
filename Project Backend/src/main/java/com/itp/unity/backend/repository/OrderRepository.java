package com.itp.unity.backend.repository;

import com.itp.unity.backend.model.MedOrder;
import org.springframework.data.repository.CrudRepository;

public interface OrderRepository extends CrudRepository<MedOrder, String> {
}
