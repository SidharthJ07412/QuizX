package com.example.quizapp.repositories;


import com.example.quizapp.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

public class UserRepository {
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public UserRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public User createUser(User user) {
        String sql = "INSERT INTO User_data (Fname,Lname, Email, password) VALUES (?, ?, ?,?)";
        jdbcTemplate.update(sql, user.getFname(),user.getLname(), user.getEmail(), user.getPassword());
        return user;
    }
    
    public User findByUser_id(Long User_id) {
        String sql = "SELECT * FROM User_data WHERE User_id = ?";
        return jdbcTemplate.queryForObject(sql, (rs, rowNum) -> {
            User user = new User();
            user.setUser_id(rs.getLong("User_id"));
            user.setFname(rs.getString("Fname"));
            user.setLname(rs.getString("Lname"));
            user.setEmail(rs.getString("Email"));
            user.setPassword(rs.getString("password"));
            return user;
        }, User_id);
    }
}
