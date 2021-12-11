function helloJS()
{
    alert("The Dude Abides FOR REAL! (this is from the file js/main.js)");

}

function myFunction() {
    var x = document.getElementById("navId");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function createNewBlog() {
    document.getElementById('createBlog').style.display = "block";
    if (document.getElementById("createButton").value =="Cancel") document.getElementById(createButton).value = "Create New";
    else document.getElementById("createButton").value = "Cancel";
}



var msg = document.getElementById("message");
var create = document.getElementById("create");
var button = document.getElementById("button");
var textBox = document.getElementById("textbox");

create.addEventListener("click", function () {
    var str = textBox.value;
    create.value = "Cancel"
    console.log(str);
});

// This event is fired when button is clicked
button.addEventListener("click", function () {
    var str = textBox.value;
    console.log(str);
    msg.innerHTML += " <p>" + str + "</p>";
});

textBox.addEventListener("keyup", function (event) {

    // Checking if key pressed is ENTER or not
    // if the key pressed is ENTER
    // click listener on button is called
    if (event.keyCode == 13) {
        button.click();
    }
});
