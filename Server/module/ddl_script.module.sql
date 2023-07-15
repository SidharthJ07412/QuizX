drop table User;
create table User(
    User_id bigserial,
    Fname varchar(20),
    Lname varchar(20),
    Email varchar(20),
    Password varchar(20),
    primary key (User_id)
);

INSERT INTO User(Fname, Lname, Email, Password) VALUES('Aniket', 'Kanodia', 'ak@gmail.com','1234');
INSERT INTO User(Fname, Lname, Email, Password) VALUES('Sidharth', 'Jain', 'sj@gmail.com','1234');
INSERT INTO User(Fname, Lname, Email, Password) VALUES('Harsh', 'Saboo', 'hs@gmail.com','1234');

SELECT * FROM User;

CREATE table Quiz(
    Quiz_id bigserial,
    Creater_id bigserial,
    Name varchar(50),
    questions_count numeric(15,2),
    duration numeric(15,2),
    primary key(Quiz_id),
    foreign key(Creater_id) references User
);

INSERT INTO Quiz(Creater_id,Name,)