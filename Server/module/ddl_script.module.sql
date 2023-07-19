drop table User_data;
create table User_data(
    User_id bigserial,
    Fname varchar(20),
    Lname varchar(20),
    Email varchar(20),
    Password varchar(20),
    primary key (User_id)
);

INSERT INTO User_data(Fname, Lname, Email, Password) VALUES('Aniket', 'Kanodia', 'ak@gmail.com','1234');
INSERT INTO User_data(Fname, Lname, Email, Password) VALUES('Sidharth', 'Jain', 'sj@gmail.com','1234');
INSERT INTO User_data(Fname, Lname, Email, Password) VALUES('Harsh', 'Saboo', 'hs@gmail.com','1234');

SELECT * FROM User_data;

CREATE table Quiz(
    Quiz_id bigserial,
    Creater_id bigserial,
    Name varchar(50),
    questions_count numeric(15,2),
    duration numeric(15,2),
    primary key(Quiz_id),
    foreign key(Creater_id) references User_data
);

INSERT INTO Quiz(Creater_id,Name,questions_count,duration) VALUES(1, 'Test1', 3, 30);
INSERT INTO Quiz(Creater_id,Name,questions_count,duration) VALUES(2, 'Test2', 5, 30);
INSERT INTO Quiz(Creater_id,Name,questions_count,duration) VALUES(3, 'Test3', 5, 30);

CREATE table Questions(
  Question_id bigserial,
  Quiz_id bigserial,
  Ques_text varchar(255),
  Option_1 varchar(255),
  Option_2 varchar(255), 
  Option_3 varchar(255), 
  Option_4 varchar(255), 
  Correct_Option varchar(255),
  primary key(Question_id),
  foreign key(Quiz_id) references Quiz
);

INSERT INTO Questions(Quiz_id,Ques_text,Option_1,Option_2,Option_3,Option_4,Correct_Option) VALUES(1, 'This is ques1', 'Q1Op1', 'Q1Op2', 'Q1Op3', 'Q1Op4', 'Q1Op2');
INSERT INTO Questions(Quiz_id,Ques_text,Option_1,Option_2,Option_3,Option_4,Correct_Option) VALUES(1, 'This is ques2', 'Q2Op1', 'Q2Op2', 'Q2Op3', 'Q2Op4', 'Q2Op3');
INSERT INTO Questions(Quiz_id,Ques_text,Option_1,Option_2,Option_3,Option_4,Correct_Option) VALUES(1, 'This is ques3', 'Q3Op1', 'Q3Op2', 'Q3Op3', 'Q3Op4', 'Q3Op1');

CREATE table Marks(
    User_id bigserial,
    Quiz_id bigserial,
    correct_answers numeric(15,2),
    primary key(User_id, Quiz_id),
    foreign key(User_id) references User_data,
    foreign key(Quiz_id) references Quiz
);

INSERT INTO Marks(User_id, Quiz_id, correct_answers) VALUES (1,1,2);
INSERT INTO Marks(User_id, Quiz_id, correct_answers) VALUES (2,1,1);
INSERT INTO Marks(User_id, Quiz_id, correct_answers) VALUES (3,1,3);

