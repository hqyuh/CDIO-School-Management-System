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
login 
     request {"email", "password"}
     response {"email", "token"}
     ****
 register
     request {"username" "email", "password"}
     response "OK"

 subject 
     request {"name": "R", "teacher": "Robert Gentleman and Ross Ihaka"}
     response {"id": 19,"name": "R","dateCreated": "06-10-2021 09:10:33","teacher": "Robert Gentleman and Ross Ihaka"}
     
     
     
     
 
 quizz
 
     {
    "id": 1,
    "name": "Quizz A",
    "dateCreated": "13-10-2021 09:55:08",
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
