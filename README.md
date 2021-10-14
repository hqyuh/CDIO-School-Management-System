# CDIO-School-Management-System - Nhóm 2
CDIO4
Tài liệu: https://docs.google.com/document/d/1IF0161DW51SMb2w6AFRamR3i3xMjoAZPNmd7XhoQKu0/edit#heading=h.7uh78ifol2db
######################################################################################################################
Giao diện: https://www.figma.com/file/9Vr2NDQpJD8guALaTt1XWR/Untitled?node-id=0%3A1
######################################################################################################################
Database: https://dbdiagram.io/d/61396086825b5b0146f9b555
######################################################################################################################
Discord: https://discord.com/channels/856773246069637152/856773246069637158


*****
  LOGIN
     
   request
     
     {
        "username": "quanghuy",
        "password": "1q2w3e456789"
     }
     
   response
     
     {
        "authenticationToken": "eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJxdWFuZ2h1eSJ9.K33MRVbk4NF8SfILLxNq6lqAqjVFgIgWy1h1ak6gfL92edoQvLNya0BelLhnUai3Vy7V_oZvnJpDJo8PzRT5ISGz_C6qsvuz_fa0YqV9uhpFKuRJ-E8q2ReXi2UrULgFFrq7hbIEwGeJMmfdODSBNajbKIU7r0y2gazRu-TWxdZAQqBwiBuol20UELOxmP18p5XRWANU2OFUax9qzHu8wvgnULnW40X9LSpQDWzrFRAe4FCa6ykSHRNNBtRFxzyGcHZ9XYFkmj4_FGstmp-zUMucubqRQIAk6D1anHu3a7U_tKlgLnv10F3RSeheqCB7pbWW5S8JvrjhB0b6b9fI4w",
        "username": "quanghuy"
     }
     
     

 REGISTER

   request 
     
     {
        "username": "admin",
        "email": "admin@exam.com",
        "password": "1q2w3e456789"
     }
     
   response
  
        "User Registration Successfully"

 SUBJECT 
     
 request
 
     {
        "name": "PHP",
        "teacher": {
        "teacherId": 1
        }
     }
     
 response
 
     {
        "id": 5,
        "name": "PHP",
        "dateCreated": "14-10-2021 02:21:26",
        "teacher": {
            "teacherId": 1,
            "name": "James Gosling",
            "position": "Professor"
        }
    }
     
     
     
     
 
 QUIZZ
 
     {
    "id": 1,
    "name": "Quizz A",
    "dateCreated": "13-10-2021 09:55:08",
    "examTime: 1200,
    "description": "Mid-term test",
    "questions": [
        {
            "id": 1,
            "text": "How can you achieve runtime polymorphism in Java?",
            "mark": 2.0,
            "dateCreated": "13-10-2021 09:55:08",
            "answerA": "method overloading",
            "answerB": "method overrunning",
            "answerC": "method overriding",
            "answerD": "method calling"
        },
        {
            "id": 2,
            "text": "What method can be used to create a new instance of an object?",
            "mark": 2.0,
            "dateCreated": "13-10-2021 09:55:08",
            "answerA": "another instance",
            "answerB": "field",
            "answerC": "constructor",
            "answerD": "private method"
        }
    ],
    "subject": {
        "id": 1,
        "name": "Java",
        "teacher": "James Gosling",
        "dateCreated": "13-10-2021 09:49:37"
        }
    }
