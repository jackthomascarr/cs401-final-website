const ul = document.querySelector('#blogEntries');
const main = document.querySelector('.main');

//this loops through local storage (where I store blog content) and appends to list
for(i=0; i<localStorage.length; i++){
const postTitle = localStorage.key(i);
const postBody = localStorage.getItem(postTitle);
if(postTitle.length > 0 & postBody.length > 0){
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = postTitle;
    const label = document.createElement('label');
    label.textContent = postBody;
    const edit = document.createElement('button');
    edit.textContent = 'edit';
    const deleteButton = document.createElement('removeButton');
    deleteButton.textContent = 'delete';

    li.appendChild(span);
    li.appendChild(label);
    li.appendChild(edit);
    li.appendChild(deleteButton);

    ul.append(li);
}
}


//this event listener deals with delete/edit/save functionality
ul.addEventListener('click', (event) => {
    if(event.target.tagName === 'BUTTON' || event.target.tagName === 'REMOVEBUTTON') {
        const button = event.target;
        const removeButton = event.target;
        const li = button.parentNode;
        const ul = li.parentNode;
        if(removeButton.textContent === 'delete') {
            const title = li.firstElementChild;
            localStorage.removeItem(title.textContent); //removes from local storage based of key value
            ul.removeChild(li);
        } else if(button.textContent === 'edit') {
            const span = li.firstElementChild;
            const label = li.firstElementChild.nextElementSibling;
            const inputSpan = document.createElement('input');
            const inputLabel = document.createElement('textarea');
            inputSpan.type = 'text';
            inputSpan.value = span.textContent;
            li.insertBefore(inputSpan, span); //replaces title with new edited title
            li.removeChild(span);
            inputLabel.type = 'text';
            inputLabel.value = label.textContent;
            li.insertBefore(inputLabel, label); //replaces body of blog with new edited version
            li.removeChild(label);
            button.textContent = 'save';
        } else if(button.textContent === 'save') {
            const inputSpan = li.firstElementChild;
            const inputLabel = li.firstElementChild.nextElementSibling;
            const span = document.createElement('span');
            const label = document.createElement('label');
            console.log(inputSpan.value);
            span.textContent = inputSpan.value; //sets new values as the vales inputed by user
            label.textContent = inputLabel.value;
            li.insertBefore(span, inputSpan);
            li.removeChild(inputSpan);
            li.insertBefore(label, inputLabel);
            li.removeChild(inputLabel);
            button.textContent = 'edit';
        }
    }
});

const div = document.createElement('div');
const label = document.createElement('label');
const list = ul.children;
console.log(list);

div.appendChild(label);
main.insertBefore(div, ul);

//displays all of the blog posts to live posts page
for(let i = 0; i < list.length; i++) {
    var li = list[i];
    li.style.display = '';
}