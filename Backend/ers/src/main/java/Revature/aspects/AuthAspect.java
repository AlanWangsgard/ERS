package Revature.aspects;

import jakarta.servlet.http.HttpSession;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

@Aspect
@Component
public class AuthAspect {

    @Order(1)
    @Before("within(Revature.controllers.*)" +
            "&& !within(Revature.controllers.AuthController)")
    public void checkLoggedIn(){

        ServletRequestAttributes attributes = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
        HttpSession session = attributes.getRequest().getSession(false);


        if(session == null || session.getAttribute("userId") == null){
            throw new IllegalArgumentException("User must be logged in to do this!");
        }
    }

    @Order(2)
    @Before("@annotation(Revature.aspects.AdminOnly)")
    public void checkAdmin(){

        ServletRequestAttributes attributes = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
        HttpSession session = attributes.getRequest().getSession(false);

        if(session == null){
            throw new IllegalArgumentException("user must be logged in to do this!");
        }

        String role = session.getAttribute("role").toString();

        System.out.println(session.getAttribute("role").toString());

        if(!role.equals("admin")){
            throw new IllegalArgumentException("User must be an admin to do this!");
        }

    }

}