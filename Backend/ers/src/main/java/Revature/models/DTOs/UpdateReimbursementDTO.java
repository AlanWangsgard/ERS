package Revature.models.DTOs;

public class UpdateReimbursementDTO {
    private int reimbId;
    private String description;
    private float amount;
    private int userId;
    private String status;

    public UpdateReimbursementDTO(int reimbId, String description, float amount, int userId, String status) {
        this.reimbId = reimbId;
        this.description = description;
        this.amount = amount;
        this.userId = userId;
        this.status = status;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getReimbId() {
        return reimbId;
    }

    public void setReimbId(int reimbId) {
        this.reimbId = reimbId;
    }

    public float getAmount() {
        return amount;
    }

    public void setAmount(float amount) {
        this.amount = amount;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "UpdateReimbursementDTO{" +
                "description='" + description + '\'' +
                ", amount=" + amount +
                ", userId=" + userId +
                ", status='" + status + '\'' +
                '}';
    }
}
