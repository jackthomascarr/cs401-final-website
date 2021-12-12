
//post object contains title and body of blog as strings
const post = {
    blogTitle: "",
    blogBody: ""
};


//this function is the create page. Hides divs/updates buttons when different buttons are pressed
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

//this function deals with nav bar functionality
function myFunction() {
    var x = document.getElementById("navId");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


var inputVal;
var title;
function getInputValue(){ //this function grabs values and  adds the post to local storage to be used later in live.js
    inputVal = document.getElementById("textbox").value;
    title = document.getElementById("title").value;
    post.blogTitle = title;
    post.blogBody = inputVal;
    localStorage.setItem(post.blogTitle, post.blogBody)
    alert("Successfully posted your blog entry! Head to live posts page to look at it and your other posts!");
}



