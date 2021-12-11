<!DOCTYPE html>
<html lang="en">

<head>
  <link rel="stylesheet" href="css/style.css">
  <title>Jack's Blogapalooza</title>
  <link rel = "icon" href =
  "WIN_20210622_19_02_08_Pro (2).jpg"
          type = "image/x-icon">

</head>


<body>
  <div class="navbar" id="navId">
    <a href="#home" class="active">Home</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
    <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    </a>
  </div>

  <div class="header">
    <h2>Blog Name</h2>
  </div>

  <input type="button" name="create" id="createButton" value="Create New Post" onclick="createNewBlog()" />
  <br>
  <div id="createBlog"  style="display:none;" class="createBlog" >
      <h2 style="text-align:center">Tell us about the time you did that thing!</h2>

           <input type="text" id="title" name="title" placeholder="Enter a Funky Title Here!"><br>
          <!-- Body Textbox -->
          <textarea name="textbox" id="textbox" cols="40" rows="5"></textarea>
          <br><br>

          <!-- Button we want to trigger on ENTER in Textbox -->
          <button id="postButton" class="postButton" onclick="getInputValue();">Post to Blogapalooza!</button>

          <!-- The div element in which we will
              append our data from text box -->
          <div id="message"></div>
  </div>


</body>
  <script src="js/main.js"></script>
</html>