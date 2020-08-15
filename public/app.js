
function hello(){
    var output = 0
    var question1_1 = document.getElementById("option11")
    var question1_2 = document.getElementById("option12")
    var answer1_3 = document.getElementById("option13")
    var question1_4 = document.getElementById("option14")
    
    if(answer1_3.checked == true){
        output++
        alert("Answer is correct.")
    }
    else{
        alert("Wrong")
    }

    var question1 = {
        option11: option11.value,
        option12: option12.value,
        option13: option13.value,
        option14: option14.value
    }
    firebase.database().ref('question1').child("question1").set(question1)


    var answer2_1 = document.getElementById("option21")
    var question2_2 = document.getElementById("option22")
    var question2_3 = document.getElementById("option23")
    var question2_4 = document.getElementById("option24")
    
    if(answer2_1.checked == true){
        output++
        alert("Answer is correct.")
    }
    else{
        alert("Wrong")
    }
    var question2 = {
        option21: option21.value,
        option22: option22.value,
        option23: option23.value,
        option24: option24.value
    }
    firebase.database().ref('question2').child("question2").set(question2)


    var answer3_1 = document.getElementById("option31")
    var question3_2 = document.getElementById("option32")
    var question3_3 = document.getElementById("option33")
    var question3_4 = document.getElementById("option34")
    
    if(answer3_1.checked == true){
        output++
        alert("Answer is correct.")
    }
    else{
        alert("Wrong")
    }
    var question3 = {
        option31: option31.value,
        option32: option32.value,
        option33: option33.value,
        option34: option34.value
    }
    firebase.database().ref('question3').child("question3").set(question3)


    var question4_1 = document.getElementById("option41")
    var question4_2 = document.getElementById("option42")
    var answer4_3 = document.getElementById("option43")
    var question4_4 = document.getElementById("option44")
    
    if(answer4_3.checked == true){
        output++
        alert("Answer is correct.")
    }
    else{
        alert("Wrong")
    }
    var question4 = {
        option41: option41.value,
        option42: option42.value,
        option43: option43.value,
        option44: option44.value
    }
    firebase.database().ref('question4').child("question4").set(question4)

    alert("Your Score is" + " " + output)

 }

