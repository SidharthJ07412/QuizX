package com.example.quizapp.quizserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("com.example.quizapp.config")
public class QuizServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(QuizServerApplication.class, args);
	}

}
