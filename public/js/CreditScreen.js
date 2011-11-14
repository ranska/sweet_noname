(function() {
  var Button;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  window.Menu = (function() {
    function Menu(p5) {
      this.p5 = p5;
      this.img_logo = this.p5.loadImage('/images/sweet_logo', 'png', function() {
        return this.p5.draw();
      });
      this.init();
    }
    Menu.prototype.next = function() {
      return console.log("start_menu");
    };
    Menu.prototype.init = function() {
      return this.finished = false;
    };
    Menu.prototype.mouse_clicked = function() {
      return this.button.mouse_clicked();
    };
    Menu.prototype.draw = function() {
      this.p5.image(this.img_logo, 100, 100);
      return this.button.draw();
    };
    Menu.prototype.update = function() {
      if (this.button.pressed) {
        return this.finished = true;
      }
    };
    Menu.prototype.reboot = function() {
      this.init();
      return this.button.init();
    };
    Menu.prototype.quit = function() {};
    return Menu;
  })();
  window.Menu1 = (function() {
    __extends(Menu1, window.Menu);
    function Menu1() {
      Menu1.__super__.constructor.apply(this, arguments);
    }
    Menu1.prototype.init = function() {
      Menu1.__super__.init.call(this);
      return this.button = new Button(this.p5, 300, 250, '/images/start');
    };
    Menu1.prototype.next = function() {
      console.log("menu1 .next");
      return this.p5.fsm.explain_me();
    };
    return Menu1;
  })();
  window.Menu2 = (function() {
    __extends(Menu2, window.Menu);
    function Menu2() {
      Menu2.__super__.constructor.apply(this, arguments);
    }
    Menu2.prototype.init = function() {
      Menu2.__super__.init.call(this);
      return this.button = new Button(this.p5, 300, 250, '/images/restart');
    };
    return Menu2;
  })();
  window.CreditScreen = (function() {
    __extends(CreditScreen, window.Menu);
    function CreditScreen() {
      CreditScreen.__super__.constructor.apply(this, arguments);
    }
    CreditScreen.prototype.init = function() {
      CreditScreen.__super__.init.call(this);
      return this.button = new Button(this.p5, 100, 250, '/images/start');
    };
    CreditScreen.prototype.next = function() {
      console.log("credit screen");
      return this.p5.fsm.back_f_how();
    };
    return CreditScreen;
  })();
  Button = (function() {
    function Button(p5, x, y, url) {
      this.p5 = p5;
      this.x = x;
      this.y = y;
      this.img = this.p5.loadImage(url, 'png', function() {
        return this.p5.draw();
      });
      this.width = this.img.width;
      this.height = this.img.height;
      this.init();
    }
    Button.prototype.init = function() {
      return this.pressed = false;
    };
    Button.prototype.draw = function() {
      return this.p5.image(this.img, this.x, this.y);
    };
    Button.prototype.update = function() {};
    Button.prototype.over_rect = function() {
      return this.p5.mouseX >= this.x && this.p5.mouseX <= this.x + this.width && this.p5.mouseY >= this.y && this.p5.mouseY <= this.y + this.height;
    };
    Button.prototype.mouse_clicked = function() {
      if (this.over_rect()) {
        return this.pressed = true;
      }
    };
    return Button;
  })();
}).call(this);
