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
    <img src="Blogapalooza (2).jpeg" alt="logo" width="45%" height="45%" style="float:left"/>
     <a href="#contact">Contact</a>
     <a href="#about">About</a>
     <a href="#home" class="active">Home</a>
     <a href="javascript:void(0);" class="icon" onclick="myFunction()">
     </a>
  </div>

  <div class="header">
    <h2>Blog Name</h2>
  </div>

  <div class="buttonDiv">
      <input type="button" name="create" id="createButton" class="createButton" value="Create New Post" onclick="createNewBlog()" />
  </div>
  <br>
  <div id="createBlog"  style="display:none;" class="createBlog" >
      <h3 style="text-align:center">Tell us about the time you did that thing!</h3>

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
  <main class="main">
  <ul id="blogEntries">
  </ul>
  </main>


</body>
  <script src="js/main.js"></script>
</html>