player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
player1_score = 0;
player2_score = 0;
question_turn = "player1";
answer_turn = "player2";
document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_answer").innerHTML =  "Answer Turn - " + player2_name;
document.getElementById("player_question").innerHTML = "Question Turn- " + player1_name;
function send(){
    hint = document.getElementById("hint_input").value;
    console.log(hint);
    localStorage.setItem("hint",hint);

    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("Word in lowercase = " + word);

    CharAt1 = word.charAt(1);
    console.log(CharAt1);

    half_of_the_word_length = Math.floor(word.length/2);
    CharAt2 = word.charAt(half_of_the_word_length);
    console.log(CharAt2);

    word_length_minus_one = word.length - 1;
    CharAt3 = word.charAt(word_length_minus_one);
    console.log(CharAt3);

    remove_char_at_1 = word.replace(CharAt1,"_");
    remove_char_at_2 = remove_char_at_1.replace(CharAt2,"_");
    remove_char_at_3 = remove_char_at_2.replace(CharAt3,"_");

    question_word = "<h4 id = 'word_display'> Q." + remove_char_at_3 + "</h4>";
    input_box = "<br>Answer: <input type = 'text' id = 'answer_input'></input>";
    hint_label = "<br><label>Hint: " + localStorage.getItem("hint") + "</label>";
    check_button = "<br><br><button class = 'btn btn-info' onclick = 'check()'>Check</button>";
    row = question_word + input_box + hint_label + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
    document.getElementById("hint_input").value = "";
    document.getElementById("message").innerHTML = "";
}
function check(){
    get_answer = document.getElementById("answer_input").value;
    answer = get_answer.toLowerCase();
    console.log("answer in lower case - "+ answer);

    if(answer == word){
        document.getElementById("message").innerHTML = "Your answer is correct. Well Done!!!";
        if(answer_turn == "player1"){
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else{
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    else{
        document.getElementById("message").innerHTML = "Your answer is incorrect. Try harder next time.";
    }


    if (question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
    }
    else{
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
    }

    if (answer_turn == "player1"){
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
    }
    else{
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
    }
    document.getElementById("output").innerHTML = "";
}