package com.example.quizapp.controller;

import com.example.quizapp.models.User;
import com.example.quizapp.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {
    @RequestMapping("/")
    public String hello() {
        return "Hello User";
    }
    // private final UserRepository userRepository;

    // @Autowired
    // public UserController(UserRepository userRepository) {
    // this.userRepository = userRepository;
    // }

    // @PostMapping("/signup")
    // public User signUp(@RequestBody User user) {
    // // user.setPassword(passwordEncoder.encode(user.getPassword()));
    // return userRepository.createUser(user);
    // }

    // @PostMapping("/login")
    // public User login(@RequestBody User user) {
    // User storedUser = userRepository.findByUser_id(user.getUser_id());
    // if (storedUser != null && (user.getPassword() == storedUser.getPassword())) {
    // return storedUser;
    // }
    // return null;
    // }

}