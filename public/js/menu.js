(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; }, __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
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
      this.finished = false;
      this.p5.console.clear();
      return this.p5.sound_system.stop();
    };
    Menu.prototype.mouse_clicked = function() {};
    Menu.prototype.draw = function() {
      return this.p5.image(this.img_logo, 50, 100);
    };
    Menu.prototype.update = function() {};
    Menu.prototype.reboot = function() {
      return this.init();
    };
    Menu.prototype.quit = function() {};
    return Menu;
  })();
  window.Menu1 = (function() {
    __extends(Menu1, window.Menu);
    function Menu1() {
      this.keyPressed = __bind(this.keyPressed, this);
      Menu1.__super__.constructor.apply(this, arguments);
    }
    Menu1.prototype.init = function() {
      this.os = "linux";
      if ($.client.os === "Linux") {
        this.os = "linux";
      }
      if ($.client.os === "Mac") {
        this.os = "macos";
      }
      if ($.client.os === "Windows") {
        this.os = "windows";
      }
      this.browser = window.my_browser;
      Menu1.__super__.init.call(this);
      console.log("init menu 1");
      this.p5.console.add_new_boxed_line("Welcome Player this is the Sweet_Noname console");
      this.p5.console.add_new_boxed_line("Your World : " + this.os);
      this.p5.console.add_new_boxed_line("Your Playground : " + this.browser);
      this.p5.console.add_new_boxed_line("Sound_system is On");
      this.p5.console.add_new_boxed_line(" ");
      this.p5.console.add_new_boxed_line("How to Play ? Press 'h'");
      this.p5.console.add_new_boxed_line("Credits ? Press 'c'");
      this.p5.console.add_new_boxed_line("Start Game ? Press 's'");
      return this.p5.keyPressed = this.keyPressed;
    };
    Menu1.prototype.next = function() {
      console.log("menu1 .next");
      return this.p5.fsm.go_level_1();
    };
    Menu1.prototype.keyPressed = function() {
      console.log("Menu1 key " + this.p5.key);
      if (String.fromCharCode(this.p5.key) === 'c') {
        this.p5.console.clear();
        this.p5.console.boxed = false;
        this.p5.fsm.who_make_this();
      }
      if (String.fromCharCode(this.p5.key) === 'h') {
        this.p5.console.clear();
        this.p5.console.boxed = false;
        this.p5.fsm.explain_me();
      }
      if (String.fromCharCode(this.p5.key) === 's') {
        this.p5.console.clear();
        this.p5.console.boxed = false;
        return this.p5.fsm.go_level_1();
      }
    };
    return Menu1;
  })();
  window.Menu2 = (function() {
    __extends(Menu2, window.Menu);
    function Menu2() {
      Menu2.__super__.constructor.apply(this, arguments);
    }
    Menu2.prototype.init = function() {
      return Menu2.__super__.init.call(this);
    };
    Menu2.prototype.next = function() {
      console.log("menu2 .next");
      return this.p5.fsm.back_f_end();
    };
    return Menu2;
  })();
  window.Button = (function() {
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
