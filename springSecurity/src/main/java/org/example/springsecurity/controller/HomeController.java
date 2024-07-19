package org.example.springsecurity.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "home"; // returns home.html
    }

    @GetMapping("/login")
    public String login() {
        return "login"; // returns login.html
    }

    @GetMapping("/hello")
    public String hello() {
        return "hello"; // returns hello.html
    }
}

