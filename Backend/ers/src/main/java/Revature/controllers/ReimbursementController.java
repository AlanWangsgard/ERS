package Revature.controllers;

import Revature.models.DTOs.IncomingReimbursementDTO;
import Revature.models.DTOs.UpdateReimbursementDTO;
import Revature.models.Reimbursement;
import Revature.services.ReimbursementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/reimbursement")
@CrossOrigin
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

}
