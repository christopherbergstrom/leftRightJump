var down = [];
$(document).ready(function()
{
  var right = true;
  var left = true;
  var jump = true;
  var hor = 0;
  var lowest = window.innerHeight/10*7;
  var vert = lowest;
  var intRight;
  var intLeft;
  var block = $("#block");
  block.css("marginTop", vert+"px");
  $(document).keydown(function(e)
  {
    if (vert > lowest)
    {
      console.log("too low!");
      vert = lowest;
    }
    down[e.which] = true;

    // right
    if (down[39] && right)
    {
      console.log("right");
      right = false;
      // if (intLeft)
      // {
      //   console.log("top clear left");
      //   clearInterval(intLeft);
      //   left = true;
      // }
      intRight = setInterval(function()
      {
        hor += 1;
        block.css("marginLeft", hor+"px");
      }, 1);
    }

    // left
    if (down[37] && left)
    {
      console.log("left");
      left = false;
      // if (intRight)
      // {
      //   console.log("top clear right");
      //   clearInterval(intRight);
      //   right = true;
      // }
      intLeft = setInterval(function()
      {
        hor -= 1;
        block.css("marginLeft", hor+"px");
      }, 1);
    }

    // jump
    if (down[38] && jump)
    {
      console.log("jump");
      jump = false;
      var upInterval = setInterval(function()
      {
        vert -= 3;
        block.css("marginTop", vert+"px");
      }, 1);
      var upTimeout = setTimeout(function()
      {
        clearInterval(upInterval);
        var downInterval = setInterval(function()
        {
          vert += 3;
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
  }).keyup(function(e)
  {
    if (e.which == 32)
    {
      console.log("attack!");
    }
    if (e.which == 37 || e.which == 38 || e.which == 39)
    {
      down[e.which] = false;
      // for (var i = 0; i < intArray.length; i ++)
      // {
      //   clearInterval(intArray[i]);
      // }
      // intArray = [];
      // down = true;
      // if (int)

      if (!right && jump)
      {
        console.log("clear right 1");
        if (intRight)
        {
          clearInterval(intRight);
          right = true;
        }
      }
      else if (!right && !jump && !down[39])
      {
        console.log("clear right 2");
        if (intRight)
        {
          clearInterval(intRight);
          right = true;
        }
      }

      if (!left && jump)
      {
        console.log("clear left 1");
        if (intLeft)
        {
          clearInterval(intLeft);
          left = true;
        }
      }
      else if (!left && !jump && !down[37])
      {
        console.log("clear left 2");
        if (intLeft)
        {
          clearInterval(intLeft);
          left = true;
        }
      }

      // else
      // {
      //   console.log("int NOT here");
      // }
    }
  });
});
