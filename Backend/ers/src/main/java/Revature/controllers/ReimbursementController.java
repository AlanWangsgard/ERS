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
    public ResponseEntity<Reimbursement> insertReimbursement(@RequestBody IncomingReimbursementDTO reimbDTO){
        return ResponseEntity.accepted().body(reimbService.insertReimbursement(reimbDTO));
    }

    @PutMapping
    public ResponseEntity<Reimbursement> updateReimbursement(@RequestBody UpdateReimbursementDTO updateReimbDTO){
        return  ResponseEntity.accepted().body(reimbService.updateReimbursement(updateReimbDTO));
    }

    @PostMapping("/Id")
    public ResponseEntity<List<Reimbursement>> getReimbursementByuserId(@RequestBody IncomingUserDTO user, HttpSession session){
        return ResponseEntity.ok(reimbService.getReimbByUserId(user));
    }

    @GetMapping("/pending")
    public ResponseEntity<List<Reimbursement>> getPendingReimbursementByuserId(@RequestBody IncomingUserDTO user) {
        return ResponseEntity.ok(reimbService.getReimbByUserIdAndStatus(user));
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

    @DeleteMapping
    @AdminOnly
    public String deleteReimbursementsByUserId(@RequestBody IncomingUserDTO user){
        return reimbService.deleteReimbursementsAndUserByUserId(user);
    }
}
