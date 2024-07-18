$(document).ready(function(){
    const students = [
        { name: "shambhu", reg: "9631978435" }
    ];

    $("#frm-login").submit(function(e) {
        e.preventDefault();
        
        const regNumber = $("#phone-number").val();
        let found = false;

        for (let i = 0; i < students.length; i++) {
            if (students[i].reg === regNumber) {
                found = true;
                window.location.href = "contact.html";
                break;
            }
        }

        if (!found) {
            alert("Invalid registration number. Please try again.");
        }
    });
});
// script.js
$(document).ready(function(){
    $("#show-signup").click(function(){
        $("#login").hide();
        $("#signup").show();
    });

    $("#hide-signup").click(function(){
        $("#signup").hide();
        $("#login").show();
    });
});

