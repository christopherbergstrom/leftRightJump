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
    down[e.which] = true;

    // right
    if (down[39] && right)
    {
      // console.log("right");
      right = false;
      block.css("background-image", "url(images/soldier1.png)");
      intRight = setInterval(function()
      {
        hor += 1;
        block.css("marginLeft", hor+"px");
      }, 1);
    }

    // left
    if (down[37] && left)
    {
      // console.log("left");
      left = false;
      block.css("background-image", "url(images/soldier2.png)");
      intLeft = setInterval(function()
      {
        hor -= 1;
        block.css("marginLeft", hor+"px");
      }, 1);
    }

    // jump
    if (down[38] && jump)
    {
      // console.log("jump");
      jump = false;
      var upInterval1 = setInterval(function()
      {
        vert -= 3;
        block.css("marginTop", vert+"px");
      }, 1);
      var upTimeout1 = setTimeout(function()
      {
        clearInterval(upInterval1);
        var upInterval2 = setInterval(function()
        {
          vert -= 2;
          block.css("marginTop", vert+"px");
        }, 1);
        var upTimeout2 = setTimeout(function()
        {
          clearInterval(upInterval2);
          var upInterval3 = setInterval(function()
          {
            vert -= 1;
            block.css("marginTop", vert+"px");
          }, 1);
          var upTimeout3 = setTimeout(function()
          {
            clearInterval(upInterval3);
            var downInterval1 = setInterval(function()
            {
              vert += 1;
              block.css("marginTop", vert+"px");
            }, 1);
            var downTimeout1 = setTimeout(function()
            {
              clearInterval(downInterval1);
              var downInterval2 = setInterval(function()
              {
                vert += 2;
                block.css("marginTop", vert+"px");
              }, 1);
              var downTimeout2 = setTimeout(function()
              {
                clearInterval(downInterval2);
                var downInterval3 = setInterval(function()
                {
                  vert += 3;
                  block.css("marginTop", vert+"px");
                }, 1);
                var downTimeout3 = setTimeout(function()
                {
                  clearInterval(downInterval3);
                  block.css("marginTop", lowest+"px");
                  jump = true;
                  // console.log(vert);
                  vert = lowest;
                  // console.log(jump);
                }, 100);
              }, 100);
            }, 100);
          }, 100);
        }, 100);
      }, 100);
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
      if (!right && jump)
      {
        // console.log("clear right 1");
        if (intRight)
        {
          clearInterval(intRight);
          right = true;
        }
      }
      else if (!right && !jump && !down[39])
      {
        // console.log("clear right 2");
        if (intRight)
        {
          clearInterval(intRight);
          right = true;
        }
      }
      if (!left && jump)
      {
        // console.log("clear left 1");
        if (intLeft)
        {
          clearInterval(intLeft);
          left = true;
        }
      }
      else if (!left && !jump && !down[37])
      {
        // console.log("clear left 2");
        if (intLeft)
        {
          clearInterval(intLeft);
          left = true;
        }
      }
    }
  });
});
