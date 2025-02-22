package Revature.controllers;

import Revature.aspects.AdminOnly;
import Revature.models.DTOs.IncomingUserDTO;
import Revature.models.DTOs.OutgoingUserDTO;
import Revature.models.User;
import Revature.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    @AdminOnly
    public ResponseEntity<List<OutgoingUserDTO>> getAllUsers(){

        return ResponseEntity.ok(userService.getAllUsers());


    }

    @PostMapping
    @AdminOnly
    public ResponseEntity<User> updateUser(@RequestBody IncomingUserDTO user){
        return ResponseEntity.ok(userService.updateUser(user));
    }

//    @DeleteMapping
//    @AdminOnly
//    public ResponseEntity<String> deleteUser(@RequestBody IncomingUserDTO user){
//        return ResponseEntity.ok(userService.deleteUser(user));
//    }


}
