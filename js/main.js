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
    if (document.getElementById('createBlog').style.display == "none")
        document.getElementById('createBlog').style.display = "block";
    else document.getElementById('createBlog').style.display = "none";


    if (document.getElementById("createButton").value =="Cancel")
        document.getElementById("createButton").value = "Create New";
    else document.getElementById("createButton").value = "Cancel";
}

function getInputValue(){
    // Selecting the input element and get its value
    var inputVal = document.getElementById("postButton").value;

    // Displaying the value
    alert(inputVal);
}
