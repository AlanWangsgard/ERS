package Revature.services;

import Revature.DAOs.UserDAO;
import Revature.models.DTOs.LoginDTO;
import Revature.models.DTOs.OutgoingUserDTO;
import Revature.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final UserDAO userDAO;

    @Autowired
    public AuthService(UserDAO userDAO){
        this.userDAO = userDAO;
    }

    public OutgoingUserDTO registerUser(User user){


        User returnedUser = userDAO.save(user);

        OutgoingUserDTO outUserDTO = new OutgoingUserDTO(
                returnedUser.getUserId(),
                returnedUser.getUsername(),
                returnedUser.getRole()
        );

        return outUserDTO;

    }

    public OutgoingUserDTO login(LoginDTO loginDTO){


        if(loginDTO.getUsername() == null || loginDTO.getUsername().isBlank()){
            throw new IllegalArgumentException("Username cannot be empty!");
        }

        if(loginDTO.getPassword() == null || loginDTO.getPassword().isBlank()){
            throw new IllegalArgumentException("Password cannot be empty!");
        }

        //TODO: could do more checks, but this is the gist

        User returnedUser = userDAO.findByUsernameAndPassword(
                loginDTO.getUsername(),
                loginDTO.getPassword()).orElse(null);


        if(returnedUser == null){
            throw new IllegalArgumentException("Invalid username or password!");
        }

        return new OutgoingUserDTO(returnedUser);
    }

}
