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
     <a href="live.php" style="font-family: Arial, Helvetica, sans-serif;">Live Posts</a>
     <a href="index.php" class="active" style="font-family: Arial, Helvetica, sans-serif;">Home</a>
     <a href="javascript:void(0);" class="icon" onclick="myFunction()">
     </a>
  </div>

  <div class="center">
      <input type="button" name="create" id="createButton" class="createButton" value="Create New Post" onclick="createNewBlog()" />
  </div>
  <br>
  <div id="createBlog"  style="display:none; width:800px; margin:0 auto;" class="center" >
      <h3 style="text-align:center; font-family: Arial, Helvetica, sans-serif;">Tell us about the time you did that thing!</h3>

        <input type="text" id="title" name="title" placeholder="Enter a Funky Title Here!"><br>
        <textarea name="textbox" id="textbox" cols="40" rows="5"></textarea>
        <br><br>
        <button id="postButton" class="postButton" onclick="getInputValue();">Post to Blogapalooza!</button>

  </div>


</body>
  <script src="js/main.js"></script>
</html>