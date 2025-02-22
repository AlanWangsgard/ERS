package Revature.DAOs;

import Revature.models.Reimbursement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReimbursementDAO extends JpaRepository<Reimbursement, Integer> {
    public List<Reimbursement> findByUser_UserId(int userId);

    public List<Reimbursement> findByUser_UserIdAndStatus(int userId, String status);

    public List<Reimbursement> findByStatus(String status);

//    public void deleteByUser_UserId(int userId);
}
