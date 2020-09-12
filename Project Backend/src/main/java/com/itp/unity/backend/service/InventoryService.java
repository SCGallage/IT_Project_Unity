package com.itp.unity.backend.service;

import com.itp.unity.backend.model.InventoryItem;
import com.itp.unity.backend.model.ItemIdOnly;
import com.itp.unity.backend.repository.InventoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class InventoryService {

    @Autowired
    private InventoryRepository inventoryRepository;

    public boolean addInventoryItem(InventoryItem inventoryItem){
        InventoryItem inventoryItem1 = inventoryRepository.save(inventoryItem);
        if(inventoryItem1 != null)
            return true;
        else
            return false;
    }

    public List<InventoryItem> getAllInventoryItems(){
        List<InventoryItem> inventoryItems = new ArrayList<>();
        inventoryRepository.findAll().forEach(inventoryItems::add);
        return inventoryItems;
    }

    public InventoryItem getInventoryItem(String itemID){
        return inventoryRepository.findById(itemID).orElse(null);
    }

    public boolean updateInventoryItem(String itemID, InventoryItem updatedInventoryItem) {
        InventoryItem inventoryItem = inventoryRepository.findById(itemID).get();
        inventoryItem.setDetails(updatedInventoryItem);
        InventoryItem inventoryItem1 = inventoryRepository.save(inventoryItem);
        if(inventoryItem1 != null)
            return true;
        else
            return false;
    }

    public void deleteInventoryItem(String itemID) {
        inventoryRepository.deleteById(itemID);
    }

    public List<InventoryItem> findByItemType(String itemType){
        List<InventoryItem> inventoryItems = new ArrayList<>();
        inventoryRepository.findByItemType(itemType).forEach(inventoryItems::add);
        return inventoryItems;
    }

    public List<InventoryItem> itemsNearingExpiration(){

        List<InventoryItem> inventoryItems = new ArrayList<>();

        inventoryRepository.findAll().forEach(inventoryItem -> {
            Date date = inventoryItem.getExpDate();
            Date date1 = new Date();
            long difference = date.getTime() - date1.getTime();
            long diffenceMonths = difference / (1000*60*60*24);
            if(diffenceMonths <= 30){
                inventoryItems.add(inventoryItem);
            }
        });

        return inventoryItems;

    }

    public List<InventoryItem> itemsExpired(){

        List<InventoryItem> inventoryItems = new ArrayList<>();

        inventoryRepository.findAll().forEach(inventoryItem -> {
            Date date = inventoryItem.getExpDate();
            Date date1 = new Date();
            long difference = date.getTime() - date1.getTime();
            long diffenceMonths = difference / (1000*60*60*24);
            if(diffenceMonths <= 0){
                inventoryItems.add(inventoryItem);
            }
        });

        return inventoryItems;

    }

    public List<ItemIdOnly> findItemIDs(){

        return inventoryRepository.findAllBy();

    }

}
