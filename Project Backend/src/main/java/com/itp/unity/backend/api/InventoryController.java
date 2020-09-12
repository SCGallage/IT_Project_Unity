package com.itp.unity.backend.api;

import com.itp.unity.backend.model.InventoryItem;
import com.itp.unity.backend.model.ItemIdOnly;
import com.itp.unity.backend.service.InventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class InventoryController {

    @Autowired
    InventoryService inventoryService;

    @RequestMapping("/inventoryItems")
    public List<InventoryItem> getAllInventoryItems() {
        return inventoryService.getAllInventoryItems();
    }

    @RequestMapping("/inventoryItems/{id}")
    public InventoryItem getInventoryItem(@PathVariable String id){
        return inventoryService.getInventoryItem(id);
    }

    @RequestMapping("/inventoryitems/{itemType}")
    public List<InventoryItem> findByItemType(@PathVariable String itemType){
        return inventoryService.findByItemType(itemType);
    }

    @RequestMapping("/inventoryitems/itemIDs")
    public List<ItemIdOnly> findByItemType(){
        return inventoryService.findItemIDs();
    }

    @RequestMapping("/expiring")
    public List<InventoryItem> itemsNearingExpiration(){
        return inventoryService.itemsNearingExpiration();
    }

    @RequestMapping("/expired")
    public List<InventoryItem> itemsExpired(){
        return inventoryService.itemsExpired();
    }

    @RequestMapping(method = RequestMethod.POST, value = "/inventoryItems")
    public boolean addInventoryItem(@RequestBody InventoryItem inventoryItem){
        Boolean status =  inventoryService.addInventoryItem(inventoryItem);
        return status;
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/inventoryItems/update/{itemID}")
    public boolean updateItemDetails(@PathVariable String itemID, @RequestBody InventoryItem inventoryItem){
        Boolean status = inventoryService.updateInventoryItem(itemID, inventoryItem);
        return status;
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/inventoryItems/{id}")
    public void deleteInventoryItem(@PathVariable String id){
        inventoryService.deleteInventoryItem(id);
    }

}
