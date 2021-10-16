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
        "id": 2,
        "name": "Quizz B",
        "dateCreated": "13-10-2021 09:55:08",
        "description": "Quizz test 2",
        "examTime": 1200,
        "questions": [
            {
                "id": 5,
                "text": "How can you achieve runtime polymorphism in Java?",
                "mark": 2.0,
                "dateCreated": "14-10-2021 10:54:09",
                "answerA": "method overloading",
                "answerB": "method overrunning",
                "answerC": "method overriding",
                "answerD": "method calling",
                "result": "C"
            },
            {
                "id": 6,
                "text": "What method can be used to create a new instance of an object?",
                "mark": 2.0,
                "dateCreated": "13-10-2021 09:55:08",
                "answerA": "another instance",
                "answerB": "field",
                "answerC": "constructor",
                "answerD": "private method",
                "result": "C"
            },
            {
                "id": 7,
                "text": "How do you write a foreach loop that will iterate over ArrayList<Pencil>pencilCase?",
                "mark": 2.0,
                "dateCreated": "13-10-2021 09:55:08",
                "answerA": "for (Pencil pencil : pencilCase) {}",
                "answerB": "for (pencilCase.next()) {}",
                "answerC": "for (Pencil pencil : pencilCase.iterator()) {}",
                "answerD": "for (pencil in pencilCase) {}",
                "result": "A"
            },
            {
                "id": 8,
                "text": " Which is the most reliable expression for testing whether the values of two string variables are the same?",
                "mark": 2.0,
                "dateCreated": "13-10-2021 09:55:08",
                "answerA": "string1 == string2",
                "answerB": "string1 = string2",
                "answerC": " string1.matches(string2)",
                "answerD": "string1.equals(string2)",
                "result": "D"
            },
            {
                "id": 9,
                "text": " Which code snippet is valid?",
                "mark": 2.0,
                "dateCreated": "13-10-2021 09:55:08",
                "answerA": "ArrayList<String> words = new ArrayList<String>(){\"Hello\", \"World\"};",
                "answerB": "ArrayList words = Arrays.asList(\"Hello\", \"World\");",
                "answerC": "ArrayList<String> words = {\"Hello\", \"World\"};",
                "answerD": "ArrayList<String> words = new ArrayList<>(Arrays.asList(\"Hello\", \"World\"));",
                "result": "D"
            }
        ]
    }
    
    
 All Teacher
    
    [
        {
            "teacherId": 1,
            "name": "James Gosling",
            "position": "Professor"
        },
        {
            "teacherId": 2,
            "name": "Guido van Rossum",
            "position": "Professor"
        },
        {
            "teacherId": 3,
            "name": "Brendan Eichh",
            "position": "Professor"
        },
        {
            "teacherId": 4,
            "name": "Anders Hejlsberg",
            "position": "Professor"
        },
        {
            "teacherId": 5,
            "name": "Bjarne Stroustrup",
            "position": "Professor"
        },
        {
            "teacherId": 6,
            "name": "Martin Odersky",
            "position": "Professor"
        }
    ]
    
  POST Teacher
    
   request
   
     {
        "name": "Quang Huy",
        "position": "Professor"
      }
    
  response
  
    {
        "teacherId": 8,
        "name": "Quang Huy",
        "position": "Professor"
    }
    
 PUT Teacher
 
   request
    
      {
          "teacherId": 7,
          "name": "Quang Huyyyyy",
          "position": "Professor"
      }
      
     
   response
   
      {
          "teacherId": 8,
          "name": "Quang Huyyyy",
          "position": "Professor"
      }
      
      
   DELETE 
   
      Chỉ cần http://localhost:8080/api/teacher/{id}
      
      
 QUIZZ
    
   POST Quizz
   
   request
    
      {
          "name": "Quizz GG",
          "description": "First quizz",
          "examTime": 1100,
          "subject": {"id": 1}
      }
      
   response
      
      {
        "id": 11,
        "name": "Quizz GG",
        "dateCreated": "14-10-2021 11:21:59",
        "description": "First quizz",
        "examTime": 1100,
        "questions": null,
        "subject": {
            "id": 1,
            "name": "Java",
            "dateCreated": "14-10-2021 11:17:48",
        }
      }
      
      
  PUT Quizz
  
   request
      
      {
        "id": 13,
        "name": "Quizz HHHHHHHHHHHHHH",
        "description": "First quizz",
        "examTime": 1100,
        "subject": {"id": 1}
      }
      
   response
    
      {
        "id": 13,
        "name": "Quizz HHHHHHHHHHHHHH",
        "dateCreated": "14-10-2021 11:21:59",
        "description": "First quizz",
        "examTime": 1100,
        "questions": null,
        "subject": {
            "id": 1,
            "name": "Java",
            "dateCreated": "14-10-2021 11:17:48",
        }
      }
  
  
   DELETE Quizz
   
      Chỉ cần http://localhost:8080/api/quizz/{id}
      
      
      
Student Answer
  
   POST 
   
      {
         "testQuizzId": 2,                   id bài test quizz
         "questionId": 8,                    id câu hỏi
         "isSelected": "A"                   câu trả lời
      }
      
      
    
 
 
    
