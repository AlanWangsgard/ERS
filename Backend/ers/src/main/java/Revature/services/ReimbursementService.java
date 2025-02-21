package Revature.services;

import Revature.DAOs.ReimbursementDAO;
import Revature.DAOs.UserDAO;
import Revature.models.DTOs.IncomingReimbursementDTO;
import Revature.models.DTOs.UpdateReimbursementDTO;
import Revature.models.Reimbursement;
import Revature.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ReimbursementService {

    private final UserDAO userDAO;
    private final ReimbursementDAO reimbDAO;

    @Autowired
    public ReimbursementService(UserDAO userDAO, ReimbursementDAO reimbDAO){
        this.userDAO = userDAO;
        this. reimbDAO = reimbDAO;
    }

    public Reimbursement insertReimbursement(IncomingReimbursementDTO reimbDTO){
        Reimbursement newReimb = new Reimbursement(
                0,
                reimbDTO.getDescription(),
                reimbDTO.getAmount(),
                "pending",
                null
        );

        Optional<User> user = userDAO.findById(reimbDTO.getUserId());

        if(user.isEmpty()){

        }else {
            newReimb.setUser(user.get());
        }

        return reimbDAO.save(newReimb);
    }

    public Reimbursement updateReimbursement(UpdateReimbursementDTO upReimbDTO) {

        Optional<Reimbursement> reimbToUpdate = reimbDAO.findById(upReimbDTO.getReimbId());
        if (reimbToUpdate.isPresent()) {
            Reimbursement newReimb = reimbToUpdate.get();
            newReimb.setStatus(upReimbDTO.getStatus());
            newReimb.setAmount(upReimbDTO.getAmount());
            newReimb.setDescription(upReimbDTO.getDescription());

            return reimbDAO.save(newReimb);
        }
        return null;

    }
    }


