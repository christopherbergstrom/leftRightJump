var keysDown = [];
var intArray = [];
$(document).ready(function()
{
  var down = true;
  var jump = true;
  var hor = 0;
  var vert = window.innerHeight/10*7;
  var int;
  var block = $("#block");
  block.css("marginTop", vert+"px");
  $(document).keydown(function(e)
  {
    keysDown[e.which] = true;
    // right
    if (keysDown[39] && down)
    {
      console.log("right");
      // console.log(down);
      down = false;
      int = setInterval(function()
      {
        hor += 1;
        block.css("marginLeft", hor+"px");
      }, 1);
      intArray.push(int);
    }
    // left
    if (keysDown[37] && down)
    {
      console.log("left");
      // console.log(down);
      down = false;
      int = setInterval(function()
      {
        hor -= 1;
        block.css("marginLeft", hor+"px");
      }, 1);
      intArray.push(int);
    }
    // // up
    // if (keysDown[38] && down)
    // {
    //   down = false;
    //   int = setInterval(function()
    //   {
    //     vert -= 1;
    //     block.css("marginTop", vert+"px");
    //   }, 1);
    // }

    // jump
    if (keysDown[38] && jump)
    {
      console.log("jump");
      jump = false;
      var upInterval = setInterval(function()
      {
        vert -= 2;
        block.css("marginTop", vert+"px");
      }, 1);
      var upTimeout = setTimeout(function()
      {
        clearInterval(upInterval);
        var downInterval = setInterval(function()
        {
          vert += 2;
          block.css("marginTop", vert+"px");
        }, 1);
        var downTimeout = setTimeout(function()
        {
          clearInterval(downInterval);
          jump = true;
          // console.log(jump);
        }, 300);
      }, 300);
    }


    // jump right
    // if (keysDown[39] && down && keysDown[38] && jump)
    // {
    //   console.log("right jump");
    //   // down = false;
    //   // int = setInterval(function()
    //   // {
    //     vert -= 1;
    //     hor += 1;
    //     $("#block").css("marginTop", vert+"px");
    //     $("#block").css("marginLeft", hor+"px");
    //   // }, 1);
    // }
  }).keyup(function(e)
  {
    // for (var i = 0; i < intArray.length; i ++)
    // {
    //   clearInterval(intArray[i]);
    // }
    // intArray = [];
    // down = true;
    // if (int)
    if (int && jump)
    {
      console.log("int here");
      clearInterval(int);
      down = true;
    }
    else
    {
      console.log("int NOT here");
    }
    keysDown[e.which] = false;
  });
});
