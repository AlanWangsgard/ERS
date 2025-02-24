package Revature.services;

import Revature.DAOs.UserDAO;
import Revature.models.DTOs.LoginDTO;
import Revature.models.DTOs.OutgoingUserDTO;
import Revature.models.RequestResponse;
import Revature.models.User;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

@Service
public class AuthService {

    private final UserDAO userDAO;

    @Autowired
    public AuthService(UserDAO userDAO){
        this.userDAO = userDAO;
    }

    public RequestResponse registerUser(User user){

        if(userDAO.findByUsername(user.getUsername()).isPresent()){
            return new RequestResponse("User Already exists", "error");
        }else {

            User returnedUser = userDAO.save(user);

            OutgoingUserDTO outUserDTO = new OutgoingUserDTO(
                    returnedUser.getUserId(),
                    returnedUser.getUsername(),
                    returnedUser.getRole()
            );

            return new RequestResponse(outUserDTO.toString(), "ok");
        }
    }

    public OutgoingUserDTO login(LoginDTO loginDTO){


        if(loginDTO.getUsername() == null || loginDTO.getUsername().isBlank()){
            throw new IllegalArgumentException("Username cannot be empty!");
        }

        if(loginDTO.getPassword() == null || loginDTO.getPassword().isBlank()){
            throw new IllegalArgumentException("Password cannot be empty!");
        }


        User returnedUser = userDAO.findByUsernameAndPassword(
                loginDTO.getUsername(),
                loginDTO.getPassword()).orElse(null);


        if(returnedUser == null){
            throw new IllegalArgumentException("Invalid username or password!");
        }

        return new OutgoingUserDTO(returnedUser);
    }

    public void logOut(){
        ServletRequestAttributes attributes = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
        HttpSession session = attributes.getRequest().getSession(false);
        System.out.println(session == null);
        session.invalidate();
    }

}
