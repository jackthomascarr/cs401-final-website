# Final website for CS401

Name: Jack Carr
email: jackcarr@u.boisestate.edu

## How to run this website

If you php install on your machine, simply go the the directory containing the files and run command below!
user@something cs401-final-website % php -S localhost:3000

Then go to your browser and type in 'localhost:3000' and the page will show up!

## Bugs

There is one known bug in this assignment that had me scratching my head for a while.
I decided to store blog posts by accessing and storing values to local storage.
Because I didn't have a database where I could set up blog ids, if you edit 
a posted blog and then try to delete it, it will be removed from view but if 
you refresh the page it shows back up. Otherwise, all other functionality works
as far as I have tested it!

## Features

My website has two pages, a page where you can create and post a blog, 
and a page where you can view, edit, save, and delete existing blogs.
On the create blog page is is very simple and user friendly. It opens 
with a simple button that says 'create post', if this button is pushed 
a hidden div will show up that allows you to add a title and a body. 
Two other buttons show up as well that give you the oprion to either cancel 
the post or post the blog to the 'live posts' section of the website. 
If you select post, a success alert will show up! 

On the live posts page, if blogs exists they will show up in a list fashion where 
you can view existing or previous posts. Each post contains two buttons below it, 
'edit' and 'delete'. If edit is selected, you may enter a new title and body to the blog, 
if you then click save then the updated input will be saved to the blog. If you select the 
delete button, the post will be deleted and removed from the screen! Like I said, there is that little bug
but it is not very noticable because the post will be removed from sight regardless.

Overall this was fun but took way longer (especially because we had to design all the css styling ourselves).
I had fun with this assignment, I kind of wish that I built some sort of sprts betting website instead,
but the blog engine was challenging and fun!
