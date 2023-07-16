package com.example.quizapp.models;

public class User {
    private Long User_id;
    private String Fname;
    private String Lname;
    private String Email;
    private String password;
    private String Cpassword;

    public String getCpassword() {
        return this.Cpassword;
    }

    public void setCpassword(String Cpassword) {
        this.Cpassword = Cpassword;
    }


    public Long getUser_id() {
        return this.User_id;
    }

    public void setUser_id(Long User_id) {
        this.User_id = User_id;
    }

    public String getFname() {
        return this.Fname;
    }

    public void setFname(String Fname) {
        this.Fname = Fname;
    }

    public String getLname() {
        return this.Lname;
    }

    public void setLname(String Lname) {
        this.Lname = Lname;
    }

    public String getEmail() {
        return this.Email;
    }

    public void setEmail(String Email) {
        this.Email = Email;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    
}
