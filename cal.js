$(document).ready(function(){
  const display = $('#display');
  if (display.val() == "") { $('#but2, #but3, #but7, #but11, #but15').prop('disabled', true); }
  $('#all .buttons button').click(function() {
      const button = $(this).text();
      const x = display.val();
      if (button != "C" && button != "CE" && button != "=") {
        // checking a conditions
        if (button == ".") {
          if (x.substr(x.length-1) == "-" || x.substr(x.length-1) == "+" || x.substr(x.length-1) == "/" || x.substr(x.length-1) == "*" || x.substr(x.length-1) == "") {
            display.val(x + "0" + button);
            $('button').prop('disabled', false);
          } else if (x.substr(x.length-1) == ".") {
            return false;
          } else {
            display.val(x + button);
            $('button').prop('disabled', false);
          }
        } else {
          display.val(x + button);
          $('button').prop('disabled', false);
        }
        // calculations
      } else if (button == "=") {
        // subtraction
        if (x.includes("-")) {
          const y = x.indexOf("-");
          const z = x.substr(0, y);
          const a = x.substr(y+1, x.length-1);
          display.val(x + button + (parseFloat(z)-parseFloat(a)));
          // addition
        } else if (x.includes("+")) {
          const y = x.indexOf("+");
          const z = x.substr(0, y);
          const a = x.substr(y+1, x.length-1);
          display.val(x + button + (parseFloat(z)+parseFloat(a)));
          // division
        } else if (x.includes("/")) {
          const y = x.indexOf("/");
          const z = x.substr(0, y);
          const a = x.substr(y+1, x.length-1);
          display.val(x + button + (parseFloat(z)/parseFloat(a)));
          // multiplication
        } else if (x.includes("*")) {
          const y = x.indexOf("*");
          const z = x.substr(0, y);
          const a = x.substr(y+1, x.length-1);
          display.val(x + button + (parseFloat(z)*parseFloat(a)));
        }
        $('button').prop('disabled', true);
        $('#but0').prop('disabled', false);
        // delete last chart from display
      } else if (button == "CE") {
        display.val(x.toString().substr(0, x.length-1));
        // clear display
      } else {
        $('button').prop('disabled', false);
        $('#but2, #but3, #but7, #but11, #but15').prop('disabled', true);
        display.val("");
      }

  });
});
