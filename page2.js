function send() {
    p1_name = localStorage.getItem("p1 name")
    p2_name = localStorage.getItem("p2 name");
    document.getElementById("p1_name_pts").value = p1_name;
    document.getElementById("p2_name_pts").value = p2_name;
    number1 = document.getElementById("num-input1").value;
    number2 = document.getElementById("num-input2").value;
    answer = parseInt(number1) + parseInt(number2);
    console.log(answer);
    question_statement = "<h4>" + number1 + "+" + number2 + "</h4>";
    input_box = "<br>Answer: <input type='text' id='input_box'>";
    check_button = "<br><br><button class='btn btn-warning' onclick='check()'>Check</button>";
    row = question_statement + input_box + check_button;
    document.getElementById("question").value = row;
    document.getElementById("num-input1").value = "";
    document.getElementById("num-input2").value = "";
}

question_turn = "player1";
answer_turn = "player_2";

function check() {
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log(answer);
    if (answer == lowercase_word) {
        if (answer_turn == "player1") {
            p1_score = p1_score + 1;
            document.getElementById("p1_pts").innerHTML = p1_score;
        } else {
            p2_score = p2_score + 1;
            document.getElementById("p2_pts").innerHTML = p2_score;
        }
    }
    if (question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("player_q_turn").innerHTML = "Question Turn" + p2_name;
    } else {
        question_turn = "player1";
        document.getElementById("player_q_turn").innerHTML = "Question Turn" + p1_name;
    }
    if (answer_turn == "player1") {
        answer_turn = "player2";
        document.getElementById("player_a_turn").innerHTML = "Answer Turn" + p2_name;
    } else {
        answer_turn = "player1";
        document.getElementById("player_a_turn").innerHTML = "Answer Turn" + p1_name;
    }
    document.getElementById("question").value = "";
}