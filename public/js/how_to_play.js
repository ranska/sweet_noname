(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.HowToPlayScreen = (function() {
    function HowToPlayScreen(p5) {
      this.p5 = p5;
      this.how_to_play_keys = __bind(this.how_to_play_keys, this);
      this.init();
    }
    HowToPlayScreen.prototype.init = function() {
      this.finished = false;
      this.button = new Button(this.p5, 0, 0, '/images/howtoplay');
      this.p5.console.clear();
      this.p5.console.add_new_boxed_line("Back to menu ? Press 'b'");
      return this.p5.keyPressed = this.how_to_play_keys;
    };
    HowToPlayScreen.prototype.next = function() {
      console.log("how to play screen");
      return this.p5.fsm.back_f_how();
    };
    HowToPlayScreen.prototype.mouse_clicked = function() {
      return this.button.mouse_clicked();
    };
    HowToPlayScreen.prototype.draw = function() {
      return this.button.draw();
    };
    HowToPlayScreen.prototype.update = function() {
      if (this.button.pressed) {
        return this.finished = true;
      }
    };
    HowToPlayScreen.prototype.reboot = function() {
      this.init();
      return this.button.init();
    };
    HowToPlayScreen.prototype.quit = function() {};
    HowToPlayScreen.prototype.how_to_play_keys = function() {
      console.log("how_to_play key " + this.p5.key);
      if (String.fromCharCode(this.p5.key) === 'b') {
        return this.p5.fsm.back_f_how();
      }
    };
    return HowToPlayScreen;
  })();
}).call(this);
