package com.itp.unity.backend.service;

import com.itp.unity.backend.model.MedOrder;
import com.itp.unity.backend.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    public void addOrder(MedOrder medOrder){

        orderRepository.save(medOrder);

    }

}
