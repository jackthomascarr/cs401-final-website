

function helloJS()
{
    alert("The Dude Abides FOR REAL! (this is from the file js/main.js)");
}

const blogPosts = [];

const post = {
    blogTitle: "",
    blogBody: ""
};

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


    if (document.getElementById("createButton").value =="Cancel") {
        document.getElementById("createButton").value = "Create New Post";
        document.getElementById("createButton").style = "background-color: #298CD6";
    }
    else {
        document.getElementById("createButton").value = "Cancel";
        document.getElementById("createButton").style = "background-color: red";
    }
}

var inputVal;
var title;
function getInputValue(){
    // Selecting the input element and get its value
    inputVal = document.getElementById("textbox").value;
    title = document.getElementById("title").value;
    post.blogTitle = title;
    post.blogBody = inputVal;

    var table = document.getElementById("blogTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = "<td>" + "<h2>" + post.blogTitle
        + "<input type=\"button\" style=\"float:right;\" value=\"Delete\" onclick=\"deleteRow(this.parentNode.parentNode.rowIndex)\"></h2></td>"
        + "<p>" + post.blogBody + "</p>";
}


function deleteRow(i){
    document.getElementById('blogTable').deleteRow(i)
}
