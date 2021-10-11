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
    "name": "QuizzA",
    "dateCreated": "29-09-2021 09:06:59",
    "questions": [
        {
            "id": 1,
            "text": "Given the string \"strawberries\" saved in a variable called fruit, what would fruit.substring(2, 5) return?",
            "mark": 2.0,
            "answers": [
                {
                    "id": 1,
                    "answerA": "rawb",
                    "answerB": " raw",
                    "answerC": "awb",
                    "answerD": "traw"
                }
            ]
        },
        {
            "id": 2,
            "text": "How can you achieve runtime polymorphism in Java?",
            "mark": 2.0,
            "answers": [
                {
                    "id": 2,
                    "answerA": "method overloading",
                    "answerB": "method overrunning",
                    "answerC": "method overriding",
                    "answerD": "method calling"
                }
            ]
        },
        {
            "id": 3,
            "text": "Which is the most up-to-date way to instantiate the current date?",
            "mark": 2.0,
            "answers": [
                {
                    "id": 3,
                    "answerA": "new SimpleDateFormat(\"yyyy-MM-dd\").format(new Date())",
                    "answerB": "new Date(System.currentTimeMillis())",
                    "answerC": "LocalDate.now()",
                    "answerD": "Calendar.getInstance().getTime()"
                }
            ]
        },
        {
            "id": 4,
            "text": "Which statement is NOT true?",
            "mark": 2.0,
            "answers": [
                {
                    "id": 4,
                    "answerA": "An anonymous class may specify an abstract base class as its base type.",
                    "answerB": "An anonymous class does not require a zero-argument constructor.",
                    "answerC": "An anonymous class may specify an interface as its base type.",
                    "answerD": "An anonymous class may specify both an abstract class and interface as base types."
                }
            ]
        },
        {
            "id": 5,
            "text": "Which is the most reliable expression for testing whether the values of two string variables are the same?",
            "mark": 2.0,
            "answers": [
                {
                    "id": 5,
                    "answerA": " string1 == string2",
                    "answerB": "string1 = string2",
                    "answerC": "string1.matches(string2)",
                    "answerD": "string1.equals(string2)"
                }
            ]
        }
    ],
    "subject": {
        "id": 1,
        "name": "Java",
        "teacher": "James Gosling",
        "dateCreated": "06-10-2021 09:10:33"
    }
    }
