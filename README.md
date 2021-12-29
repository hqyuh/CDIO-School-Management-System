# CDIO-School-Management-System - Nhóm 2
CDIO4
Tài liệu: https://docs.google.com/document/d/1IF0161DW51SMb2w6AFRamR3i3xMjoAZPNmd7XhoQKu0/edit#heading=h.7uh78ifol2db
######################################################################################################################

Giao diện: https://www.figma.com/file/9Vr2NDQpJD8guALaTt1XWR/Untitled?node-id=0%3A1
######################################################################################################################

Database: https://dbdiagram.io/d/61396086825b5b0146f9b555
######################################################################################################################

Discord: https://discord.com/channels/856773246069637152/856773246069637158
######################################################################################################################

4. Proposal: https://docs.google.com/document/d/1JYh5wpmIWnowkCd6q8osMEemUTLUdRvYYgIrpEW9rA8/edit
######################################################################################################################

5. Project plan: https://docs.google.com/document/d/1PthBGdnf2dbHK3wOtvVAS09SxUZyUrg_pGHph-SHd8A/edit
######################################################################################################################

6. User story: https://docs.google.com/document/d/1ZmeS09tMfcT-G_6M4K8Y9ClrVsAC3Y3xBXWFSEPK8mI/edit
######################################################################################################################

7. Product backlog: https://docs.google.com/document/d/1daPPWnOR-g_wjuNjyJDk4t33Fo6n8o0dQKyifkAoG_c/edit#
######################################################################################################################

8. Interface Design: https://docs.google.com/document/d/12lY7gO94c9iotlvSE26G7N4Pyge_feki9V24le5Tpd4/edit?fbclid=IwAR3N71-2N9MrWQ7cw2bHAOdCT0kPawXdRPQoxIL2DCBYE1N_FmmiPpLaO8E#
######################################################################################################################
9. Database Design: https://docs.google.com/document/d/1tKkKocEX583e1ZALRerd-iT1xeMEgOg0T2rtVV0ZWjo/edit?fbclid=IwAR3KCKkD-4O5bk51fwSyP5B-ZHCN4qlvTv1HLhpmHfYRqRz5AkVminTJ3N4#
######################################################################################################################
10. Test Plan: https://docs.google.com/document/d/1pvj_f2KhEa2sdE7qA0ZIE6fxFMdnBOkcD9qqDjpWRDM/edit#
######################################################################################################################
11. Naming Convention: https://docs.google.com/document/d/1wDqKNuwlZg-MscVntuAPhc1VulhVvfjfmrzC6pwkM28/edit?usp=sharing
######################################################################################################################
12. Coding Convention: https://docs.google.com/document/d/1CnNrw3iEg1osgf_IMH4xHpmqZ739PjZbvJNgIzDHPMU/edit?usp=sharing
######################################################################################################################
13. Meeting With Mentor: https://docs.google.com/document/d/10ptU_kP9VP8WJeY84mGpWF4oAxog3QOOTBPOtnPC9p0/edit?usp=sharing
######################################################################################################################
14. Weekly Meeting: https://docs.google.com/document/d/1G2CnxVakIU6iFlz0Ah1LDPlMdAjFQounW5kgrVMSHso/edit?usp=sharing
######################################################################################################################
15. Kết luận: https://docs.google.com/document/d/1y72gP6nS72ipnLLov6T6yKPL0RR6BoWy_y_Gly82oP8/edit?usp=sharing
######################################################################################################################

* SprintBacklog https://docs.google.com/spreadsheets/d/1A8aFyrPWbRDLea1L0J4s2WEUuQh5LjcSHqebL_3JFMw/edit#gid=0
######################################################################################################################

* TEST CASE
* TEST1: https://docs.google.com/spreadsheets/d/1TKhkPtoo311MlBpH-6x5WwhKGinbcXlBWU_tF_Vk41Q/edit?fbclid=IwAR2j6iLtlG9KZBDCzlg-sMpwVytFOt_Et8QNpzDB8LJBxy3wo34W6KMmeqE#gid=585024898
* TEST2: https://docs.google.com/spreadsheets/d/1AqxBFBCaIfVZqyddFap-dCMs7DWjdf0g07eBH3MdMlc/edit?usp=sharing
* TEST3: https://docs.google.com/spreadsheets/d/1Vy_Lujy7hKYTYmV4ipmPMq01nZ8fdIqKeBORTFJuy2E/edit?usp=sharing

USE CASES: https://drive.google.com/drive/folders/1TMUT76Jz-wj22ueF9ceRLGB-wq1cay4f?usp=sharing






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
     

 SUBJECT 
     
 
 POST, PUT
 request
 
     {
        "name": "English"
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
        "isStart": null,
        "isEnd: null,
        "activationCode": 416001,
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
      
   
   GET
    
      /api/quizz/{id}/status/{status}
      EX: /api/quizz/40/status/false
      
      
      
Student Answer
  
   POST 
   
      {
         "testQuizzId": 2,                   id bài test quizz
         "questionId": 8,                    id câu hỏi
         "isSelected": "A"                   câu trả lời
      }
      
Question

   POST
   
      {
         "text": "2 + 4 = ???",
         "mark": 2.0,
         "answerA": "1",
         "answerB": "8",
         "answerC": "6",
         "answerD": "5",
         "result": "C",
         "testQuizzId": 22        id bài test
      }
      

User
    
    [
        {
            "userId": 1,
            "username": "quanghuy",
            "email": "",
            "fullName": "Ho Quang Huy",
            "password": "$2a$10$w7j/qlV9a08nX0jFod1WkO1KCl.O.k9XxneqqD7VfuvhZN.MCBzoi",
            "created": "14-10-2021 01:24:47",
            "enabled": true,
            "role": "ROLE_TEACHER"
        },
        {
            "userId": 2,
            "username": "hoquanghuy",
            "email": "",
            "fullName": null,
            "password": "$2a$10$Di9HvRTAuEPNMViWtvw9a.NIHR1WitikYUpaR0Qpqd3Z2b2EJo7eC",
            "created": "17-10-2021 10:59:52",
            "enabled": true,
            "role": "ROLE_ADMIN"
        },
        {
            "userId": 5,
            "username": "summer",
            "email": "",
            "fullName": "Summer Time",
            "password": "$2a$10$4eqPxw/x9Qhbn8sDiLxPgO4nlU8f9vE6kNUodwS.Q5cMRxyuPbzqu",
            "created": "26-10-2021 10:34:17",
            "enabled": true,
            "role": "ROLE_STUDENT"
        }
    ]
    
    
    
Student Mark
  
  POST
  
    {
        "mark": 8.0,            // điểm
        "testQuizzId": 3        // id của bài test
    }
    
    
  GET   
 
    /api/studentMark/quizz/{id}
    EX: /api/studentMark/quizz/2  
    
    [
        {
          "id": 3,
          "mark": 8.0,
          "testQuizzId": 2,
          "testQuizzName": "Quizz A",
          "username": "quanghuy"
        },
        {
          "id": 7,
          "mark": 8.0,
          "testQuizzId": 2,
          "testQuizzName": "Quizz A",
          "username": "summer"
        }
    ]
    
    
  GET  
  
    /api/studentMark/user/{username}
    EX: /api/studentMark/user/summer
  
    [
        {
            "id": 6,
            "mark": 8.0,
            "testQuizzId": 33,
            "testQuizzName": "Test A",
            "username": "summer"
        },
        {
            "id": 8,
            "mark": 10.0,
            "testQuizzId": 2,
            "testQuizzName": "Quizz A",
            "username": "summer"
        }
    ]
    
    
  GET   /api/quizz/code/{code}
    
    http://localhost:8080/api/quizz/code/780226
    
  
  Account Lock
  
    /api/user/{id}/enabled/{status}
    Ex: /api/user/2/enabled/true  
    
  Resetpassword
  
    /api/auth/resetPassword/{email} 
    
  User
  
  POST
   
    /api/user/
    
      {
        "username": "Alex",
        "email": "alex@gmail.com",
        "fullName": "Jame Alex",
        "role": "ROLE_STUDENT",
        "position": "Student of DTU"
      }
  
   PATCH
   
    /api/user/
    
       {
         "userId": 33,
         "username": "alex",
         "email": "alex@gmail.com",
         "fullName": "Alex CLI",
         "password": "1q2w3e456789", // reset password
         "enabled": false,
         "role": "ROLE_STUDENT",
         "position": "SP"
       }
      

    
      
    
 
 
    
