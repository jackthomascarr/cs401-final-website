const ul = document.querySelector('#blogEntries');
const main = document.querySelector('.main');


var post = localStorage["post"];

    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = post.blogTitle;
    const label = document.createElement('label');
    label.textContent = post.blogBody;
    const edit = document.createElement('button');
    edit.textContent = 'edit';
    const deleteButton = document.createElement('removeButton');
    deleteButton.textContent = 'delete';

    li.appendChild(span);
    li.appendChild(label);
    li.appendChild(edit);
    li.appendChild(deleteButton);



ul.addEventListener('click', (event) => {
    if(event.target.tagName === 'BUTTON' || event.target.tagName === 'REMOVEBUTTON') {
        const button = event.target;
        const removeButton = event.target;
        const li = button.parentNode;
        const ul = li.parentNode;
        if(removeButton.textContent === 'delete') {
            ul.removeChild(li);
        } else if(button.textContent === 'edit') {
            const span = li.firstElementChild;
            const label = li.firstElementChild.nextElementSibling;
            const inputSpan = document.createElement('input');
            const inputLabel = document.createElement('textarea');
            inputSpan.type = 'text';
            inputSpan.value = span.textContent;
            li.insertBefore(inputSpan, span);
            li.removeChild(span);
            inputLabel.type = 'text';
            inputLabel.value = label.textContent;
            li.insertBefore(inputLabel, label);
            li.removeChild(label);
            button.textContent = 'save';
        } else if(button.textContent === 'save') {
            const inputSpan = li.firstElementChild;
            const inputLabel = li.firstElementChild.nextElementSibling;
            const span = document.createElement('span');
            const label = document.createElement('label');
            span.textContent = inputSpan.value;
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
const filterLabel = document.createElement('label');
const lis = ul.children;
console.log(lis);

div.appendChild(filterLabel);
main.insertBefore(div, ul);

for(let i = 0; i < lis.length; i++) {
    var li = lis[i];
    li.style.display = '';
}