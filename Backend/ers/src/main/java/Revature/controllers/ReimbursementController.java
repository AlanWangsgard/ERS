package Revature.controllers;

import Revature.aspects.AdminOnly;
import Revature.models.DTOs.IncomingReimbursementDTO;
import Revature.models.DTOs.IncomingUserDTO;
import Revature.models.DTOs.UpdateReimbursementDTO;
import Revature.models.Reimbursement;
import Revature.services.ReimbursementService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reimbursement")
@CrossOrigin(value = "http://localhost:5173", allowCredentials = "true")
public class ReimbursementController {

    private final ReimbursementService reimbService;

    @Autowired
    public ReimbursementController(ReimbursementService reimbService){
        this.reimbService = reimbService;
    }

    @PostMapping
    public ResponseEntity<Reimbursement> insertReimbursement(@RequestBody IncomingReimbursementDTO reimbDTO, HttpSession session){
        return ResponseEntity.accepted().body(reimbService.insertReimbursement(reimbDTO));
    }

    @PutMapping
    public ResponseEntity<Reimbursement> updateReimbursement(@RequestBody UpdateReimbursementDTO updateReimbDTO){
        return  ResponseEntity.accepted().body(reimbService.updateReimbursement(updateReimbDTO));
    }

    @GetMapping("/Id/{userId}")
    public ResponseEntity<List<Reimbursement>> getReimbursementByuserId(@PathVariable int userId, HttpSession session){
        return ResponseEntity.ok(reimbService.getReimbByUserId(userId));
    }

    @GetMapping("/pending/{userId}")
    public ResponseEntity<List<Reimbursement>> getPendingReimbursementByuserId(@PathVariable int userId, HttpSession session) {
        return ResponseEntity.ok(reimbService.getReimbByUserIdAndStatus(userId));
    }

    @GetMapping("/pending/all")
    @AdminOnly
    public ResponseEntity<List<Reimbursement>> getReimbursementByStatus() {
        return ResponseEntity.ok(reimbService.getReimbByStatus());
    }

    @GetMapping("/all")
    @AdminOnly
    public ResponseEntity<List<Reimbursement>> getAllReimbursements(){
        return ResponseEntity.ok(reimbService.getAllReimbursements());
    }

    @DeleteMapping("/{userId}")
    @AdminOnly
    public String deleteReimbursementsByUserId(@PathVariable int userId){
        return reimbService.deleteReimbursementsAndUserByUserId(userId);
    }
}
