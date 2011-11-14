(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.CreditScreen = (function() {
    function CreditScreen(p5) {
      this.p5 = p5;
      this.credits_key = __bind(this.credits_key, this);
      this.init();
    }
    CreditScreen.prototype.init = function() {
      this.finished = false;
      this.button = new Button(this.p5, 0, 0, '/images/ecran_credit');
      this.p5.console.clear();
      this.p5.console.add_new_boxed_line("Back to menu ? Press 'b'");
      return this.p5.keyPressed = this.credits_key;
    };
    CreditScreen.prototype.next = function() {
      console.log("credit screen");
      return this.p5.fsm.back_f_how();
    };
    CreditScreen.prototype.mouse_clicked = function() {
      return this.button.mouse_clicked();
    };
    CreditScreen.prototype.draw = function() {
      return this.button.draw();
    };
    CreditScreen.prototype.update = function() {
      if (this.button.pressed) {
        return this.finished = true;
      }
    };
    CreditScreen.prototype.reboot = function() {
      this.init();
      return this.button.init();
    };
    CreditScreen.prototype.quit = function() {};
    CreditScreen.prototype.credits_key = function() {
      console.log("credit key " + this.p5.key);
      if (String.fromCharCode(this.p5.key) === 'b') {
        return this.p5.fsm.back_f_who();
      }
    };
    return CreditScreen;
  })();
}).call(this);
