package Revature.models.DTOs;

public class IncomingReimbursementDTO {

    private String description;
    private float amount;
    private int userId;
    private String status;

    public IncomingReimbursementDTO(){

    }

    public IncomingReimbursementDTO(String description, float amount, int userId, String status) {
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
        return "IncomingReimbursementDTO{" +
                "description='" + description + '\'' +
                ", amount=" + amount +
                ", userId=" + userId +
                ", status='" + status + '\'' +
                '}';
    }
}
