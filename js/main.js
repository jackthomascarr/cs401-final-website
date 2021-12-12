
const ul = document.querySelector('#blogEntries');
const main = document.querySelector('.main');

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
    const li = createLi(post);
    ul.appendChild(li);
}

function createLi(post) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = post.blogTitle;
    const label = document.createElement('label');
    label.textContent = post.blogBody;
    const edit = document.createElement('button');
    edit.textContent = 'edit';
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'delete';

    li.appendChild(span);
    li.appendChild(label);
    li.appendChild(edit);
    li.appendChild(removeBtn);

    return li;
}

ul.addEventListener('click', (event) => {
    if(event.target.tagName === 'BUTTON') {
        const button = event.target;
        const li = button.parentNode;
        const ul = li.parentNode;
        if(button.textContent === 'delete') {
            ul.removeChild(li);
        } else if(button.textContent === 'edit') {
            const span = li.firstElementChild;
            const input = document.createElement('input');
            input.type = 'text';
            input.value = span.textContent;
            li.insertBefore(input, span);
            li.removeChild(span);
            button.textContent = 'save';
        } else if(button.textContent === 'save') {
            const input = li.firstElementChild;
            const span = document.createElement('span');
            span.textContent = input.value;
            li.insertBefore(span, input);
            li.removeChild(input);
            button.textContent = 'edit';
        }
    }
});

const div = document.createElement('div');
const filterLabel = document.createElement('label');
const lis = ul.children;
console.log(lis);

div.appendChild(filterLabel);
main.insertBefore(div, ul);

for(let i = 0; i < lis.length; i++) {
    var li = lis[i];
    li.style.display = '';
}


