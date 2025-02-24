package Revature.controllers;

import Revature.models.DTOs.LoginDTO;
import Revature.models.DTOs.OutgoingUserDTO;
import Revature.models.RequestResponse;
import Revature.models.User;
import Revature.services.AuthService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin(value = "http://localhost:5173", allowCredentials = "true")
public class AuthController {

    private final AuthService authService;

    @Autowired
    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public ResponseEntity<RequestResponse> registerUser(@RequestBody User user){

        RequestResponse returnedUser = authService.registerUser(user);

        return ResponseEntity.ok(returnedUser);

    }

    @PostMapping("/login")
    public ResponseEntity<OutgoingUserDTO> login(@RequestBody LoginDTO loginDTO, HttpSession session){

        OutgoingUserDTO loggedInUser = authService.login(loginDTO);

        session.setAttribute("userId", loggedInUser.getUserId());
        session.setAttribute("username", loggedInUser.getUsername());
        session.setAttribute("role", loggedInUser.getRole());

        System.out.println("User " + session.getAttribute("username") + " has logged in!");

        return ResponseEntity.ok(loggedInUser);

    }

    @GetMapping("/logout")
    public void logOut(HttpSession session){
        session.invalidate();
    }

}
