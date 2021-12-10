function helloJS()
{
    alert("The Dude Abides FOR REAL! (this is from the file js/main.js)");

}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
