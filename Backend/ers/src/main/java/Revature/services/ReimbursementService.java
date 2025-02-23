package Revature.services;

import Revature.DAOs.ReimbursementDAO;
import Revature.DAOs.UserDAO;
import Revature.models.DTOs.IncomingReimbursementDTO;
import Revature.models.DTOs.IncomingUserDTO;
import Revature.models.DTOs.OutgoingUserDTO;
import Revature.models.DTOs.UpdateReimbursementDTO;
import Revature.models.Reimbursement;
import Revature.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
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

    public List<Reimbursement> getReimbByUserId(int userId){

            List<Reimbursement> returnedReimb = reimbDAO.findByUser_UserId(userId);

            List<Reimbursement> reimb = new ArrayList<>();


            reimb.addAll(returnedReimb);

            return reimb;
        }
    public List<Reimbursement> getReimbByUserIdAndStatus(int userId){

        List<Reimbursement> returnedReimb = reimbDAO.findByUser_UserIdAndStatus(userId, "pending");

        List<Reimbursement> reimb = new ArrayList<>();


        reimb.addAll(returnedReimb);

        return reimb;
    }
    public List<Reimbursement> getReimbByStatus(){

        List<Reimbursement> returnedReimb = reimbDAO.findByStatus("pending");

        List<Reimbursement> reimb = new ArrayList<>();


        reimb.addAll(returnedReimb);

        return reimb;
    }

    public List<Reimbursement> getAllReimbursements(){

        List<Reimbursement> returnedReimb = reimbDAO.findAll();

        List<Reimbursement> reimb = new ArrayList<>();


        reimb.addAll(returnedReimb);

        return reimb;
    }

    public String deleteReimbursementsAndUserByUserId(int userId){
        List<Reimbursement> returnedReimb = reimbDAO.findByUser_UserId(userId);

        reimbDAO.deleteAll(returnedReimb);
        userDAO.deleteById(userId);

        List<Reimbursement> reimbCheck = reimbDAO.findByUser_UserId(userId);
        Optional<User> userCheck = userDAO.findById(userId);
        if (userCheck.isEmpty() && reimbCheck.isEmpty()){
            return "User and Reimbursements Deleted";
        }else{
            return "Error";
        }
    }
    }



