package com.itp.unity.backend.api;

import com.itp.unity.backend.model.MedOrder;
import com.itp.unity.backend.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class OrderController {

    @Autowired
    private OrderService orderService;

    @RequestMapping(method = RequestMethod.POST, value = "/order")
    public void addOrder(@RequestBody MedOrder medOrder){
        System.out.println(medOrder.getPurchaseDate());
        orderService.addOrder(medOrder);
    }

}
