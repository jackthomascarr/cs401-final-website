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

  <input type="button" name="create" id="createButton" value="Create New" onclick="createNewBlog()" />
  <div id="createBlog"  style="display:none;" class="answer_list" >
      <label for="message">Tell us about the time you did that thing!</label>
          <br><br>

          <!-- Textbox -->
          <textarea class="defaultTextBox" name="textbox" id="textbox" cols="40" rows="5"></textarea>
          <br><br>

          <!-- Button we want to trigger on ENTER in Textbox -->
          <button id="postButton">Post to Blogapalooza!</button>

          <!-- The div element in which we will
              append our data from text box -->
          <div id="message"></div>
  </div>


</body>
  <script src="js/main.js"></script>
</html>