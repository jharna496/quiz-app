
function hello(){
    var output = 0
    var question1_1 = document.getElementById("option1-1")
    var question1_2 = document.getElementById("option1-2")
    var answer1_3 = document.getElementById("option1-3")
    var question1_4 = document.getElementById("option1-4")
    
    if(answer1_3.checked == true){
        output++
        alert("Answer is correct.")
    }
    else{
        alert("Wrong")
    }


    var answer2_1 = document.getElementById("option2-1")
    var question2_2 = document.getElementById("option2-2")
    var question2_3 = document.getElementById("option2-3")
    var question2_4 = document.getElementById("option2-4")
    
    if(answer2_1.checked == true){
        output++
        alert("Answer is correct.")
    }
    else{
        alert("Wrong")
    }


    var answer3_1 = document.getElementById("option3-1")
    var question3_2 = document.getElementById("option3-2")
    var question3_3 = document.getElementById("option3-3")
    var question3_4 = document.getElementById("option3-4")
    
    if(answer3_1.checked == true){
        output++
        alert("Answer is correct.")
    }
    else{
        alert("Wrong")
    }


    var question4_1 = document.getElementById("option4-1")
    var question4_2 = document.getElementById("option4-2")
    var answer4_3 = document.getElementById("option4-3")
    var question4_4 = document.getElementById("option4-4")
    
    if(answer4_3.checked == true){
        output++
        alert("Answer is correct.")
    }
    else{
        alert("Wrong")
    }

    alert("Your Score is" + " " + output)

}

