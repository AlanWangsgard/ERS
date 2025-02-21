package Revature.services;

import Revature.DAOs.UserDAO;
import Revature.models.DTOs.OutgoingUserDTO;
import Revature.models.User;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {

    private final UserDAO userDAO;

    public UserService(UserDAO userDAO) {this.userDAO = userDAO; }

    public List<OutgoingUserDTO> getAllUsers(){

        List<User> returnedUsers = userDAO.findAll();

        List<OutgoingUserDTO> userDTOs = new ArrayList<>();

        for(User u : returnedUsers){
            userDTOs.add(new OutgoingUserDTO(u));
        }

        return userDTOs;
    }

}
