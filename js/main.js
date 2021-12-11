

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
    cell1.innerHTML = "<h2>" + post.blogTitle + "</h2>" +"<p>" + post.blogBody + "</p>";
}

var index, table = document.getElementById('blogTable');
for(var i = 1; i < table.rows.length; i++)
{
    table.rows[i].cells[3].onclick = function()
    {
        var c = confirm("do you want to delete this row");
        if(c === true)
        {
            index = this.parentElement.rowIndex;
            table.deleteRow(index);
        }

        //console.log(index);
    };

}

function deleteRow(i){
    document.getElementById('myTable').deleteRow(i)
}
