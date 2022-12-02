function validate_first_name() {
    console.log("Validate is called!");
    //first, get the input fields to validate!
    var first_name = document.getElementById("fname");
    //lay out the pattern expected for name, email, and date!
    var name_pattern = /^[A-Za-z]+$/;
    var first_name_res = first_name.value.match(name_pattern);
    if(!first_name_res){
        alert("First name is required. Make sure to type in first name using only letters (max length of 30) and no spaces!");
    }
}
function validate_last_name() {
    var last_name = document.getElementById("lname");
    var name_pattern = /^[A-Za-z]+$/;
    var last_name_res = last_name.value.match(name_pattern);
    if(!last_name_res){
        alert("Last name is required. Make sure to type in last name using only letters (max length of 30) and no spaces!");
    }
}
function validate_email() {
    var email = document.getElementById("email");
    var email_pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var email_res = email.value.match(email_pattern);
    if(!email_res){
        alert("Make sure to type in valid email with characters and numbers before and after @! Also, make sure to end with valid domain!");
    }
}
function show_work() {
    var work_div = document.getElementById("work");
    var work_button = document.getElementById("work_button");
    if(work_div.getAttribute("class") !== "hidden"){
        work_div.setAttribute("class", "hidden");
        work_button.innerHTML = "Click to view my work experiences!";

    }
    else{
        work_div.setAttribute("class", "visible");
        work_button.innerHTML = "Click to hide my work experiences!";
    }
}
function show_hobby() {
    var hobby_div = document.getElementById("hobby");
    var hobby_button = document.getElementById("hobby_button");
    if(hobby_div.getAttribute("class") !== "hidden"){
        hobby_div.setAttribute("class", "hidden");
        hobby_button.innerHTML = "List out my favorite hobbies!";
    }
    else{
        hobby_div.setAttribute("class", "block");
        hobby_button.innerHTML = "Hide away my favorite hobbies!";
    }
}