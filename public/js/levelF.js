(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; }, __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  window.LevelF = (function() {
    __extends(LevelF, window.Level);
    function LevelF(p5, hero, console, sound_system) {
      this.p5 = p5;
      this.hero = hero;
      this.console = console;
      this.sound_system = sound_system;
      this.keyPressed = __bind(this.keyPressed, this);
      this.images = [];
      this.browser = window.shape.browser;
      this.level_name = "f";
      this.url_shapes = ["" + this.browser + "/" + this.level_name + "/1", "" + this.browser + "/" + this.level_name + "/3", "" + this.browser + "/" + this.level_name + "/5", 'common/5', 'common/16', 'exit/1'];
      this.load_images();
      LevelF.__super__.constructor.call(this, this.p5, this.hero, this.console, this.sound_system);
    }
    LevelF.prototype.next = function() {
      return console.log("level_1 .next");
    };
    LevelF.prototype.next_end = function() {
      this.p5.console.clear();
      console.log("text_end = " + this.colision.text_end);
      if (this.colision.text_end === "all_explodeF") {
        this.all_explode();
      }
      if (this.colision.text_end === "one_explode") {
        this.one_explode();
      }
      if (this.colision.text_end === "no_one_explode") {
        this.no_one_explode();
      }
      console.log("____________ next_end f");
      this.p5.console.add_new_boxed_line("Next Level ? Press 'n'");
      this.p5.console.add_new_boxed_line("Menu ? Press 'm'");
      this.p5.console.add_new_boxed_line("Restart Level ? Press 'r'");
      this.p5.console.add_new_boxed_line(" ");
      return this.p5.keyPressed = this.keyPressed;
    };
    LevelF.prototype.all_explode = function() {
      this.p5.console.add_new_boxed_line("Hero_connected");
      this.p5.console.add_new_boxed_line("you're alone ?... Come home boy...");
      this.p5.console.add_new_boxed_line("Add new_Layer to /Story_line");
      return this.p5.console.add_new_boxed_line(" ");
    };
    LevelF.prototype.one_explode = function() {
      this.p5.console.add_new_boxed_line("Hero_connected");
      this.p5.console.add_new_boxed_line("Welcome home ! An eventful journey isn't it ?");
      this.p5.console.add_new_boxed_line("Add new_Layer to /Story_line");
      return this.p5.console.add_new_boxed_line(" ");
    };
    LevelF.prototype.no_one_explode = function() {
      this.p5.console.add_new_boxed_line("Hero_connected");
      this.p5.console.add_new_boxed_line("Home sweet home ! You made it ! ");
      this.p5.console.add_new_boxed_line("Add new_Layer to /Story_line");
      return this.p5.console.add_new_boxed_line(" ");
    };
    LevelF.prototype.keyPressed = function() {
      console.log("Menu1 key " + this.p5.key);
      if (String.fromCharCode(this.p5.key) === 'n') {
        this.p5.console.clear();
        this.console.boxed = false;
        this.p5.fsm.go_level_2();
        this.finished = true;
      }
      if (String.fromCharCode(this.p5.key) === 'm') {
        this.p5.console.clear();
        this.console.boxed = false;
        this.p5.fsm.back_f_1();
        this.finished = true;
      }
      if (String.fromCharCode(this.p5.key) === 'r') {
        this.p5.console.clear();
        this.console.boxed = false;
        this.p5.fsm.loop_1();
        return this.finished = true;
      }
    };
    LevelF.prototype.init = function() {
      var rotations;
      LevelF.__super__.init.call(this);
      this.hero.init(790, 10);
      this.sound_system.current_level = 1;
      this.create_strum({
        x: 250,
        y: 32,
        img: this.images[0],
        name: "name",
        type: 0,
        translated: true,
        rally_point: [[250, 568], [250, -168]],
        speed: 1.25
      });
      this.create_strum({
        x: 550,
        y: 32,
        img: this.images[0],
        name: "name",
        type: 0,
        translated: true,
        rally_point: [[550, 568], [550, -168]],
        speed: 1.25
      });
      this.create_strum({
        x: 32,
        y: 200,
        img: this.images[0],
        name: "name",
        type: 0,
        translated: true,
        rally_point: [[868, 200], [-68, 200]],
        speed: 1.25
      });
      this.create_strum({
        x: 768,
        y: 200,
        img: this.images[0],
        name: "name",
        type: 0,
        translated: true,
        rally_point: [[-68, 200], [868, 200]],
        speed: 1.25
      });
      this.create_strum({
        x: 250,
        y: 368,
        img: this.images[0],
        name: "name",
        type: 0,
        translated: true,
        rally_point: [[250, -168], [250, 568]],
        speed: 1.25
      });
      this.create_strum({
        x: 550,
        y: 368,
        img: this.images[0],
        name: "name",
        type: 0,
        translated: true,
        rally_point: [[550, -168], [550, 568]],
        speed: 1.25
      });
      this.create_strum({
        x: 175,
        y: 32,
        img: this.images[1],
        name: "name",
        type: 1,
        translated: true,
        rally_point: [[175, 306], [175, -96]],
        speed: 0.75
      });
      this.create_strum({
        x: 175,
        y: 96,
        img: this.images[1],
        name: "name",
        type: 1,
        translated: true,
        rally_point: [[175, 370], [175, -32]],
        speed: 0.75
      });
      this.create_strum({
        x: 175,
        y: 160,
        img: this.images[1],
        name: "name",
        type: 1,
        translated: true,
        rally_point: [[175, 434], [175, 32]],
        speed: 0.75
      });
      this.create_strum({
        x: 175,
        y: 224,
        img: this.images[1],
        name: "name",
        type: 1,
        translated: true,
        rally_point: [[175, 498], [175, 96]],
        speed: 0.75
      });
      this.create_strum({
        x: 625,
        y: 178,
        img: this.images[1],
        name: "name",
        type: 1,
        translated: true,
        rally_point: [[625, -96], [625, 306]],
        speed: 0.75
      });
      this.create_strum({
        x: 625,
        y: 240,
        img: this.images[1],
        name: "name",
        type: 1,
        translated: true,
        rally_point: [[625, -32], [625, 370]],
        speed: 0.75
      });
      this.create_strum({
        x: 625,
        y: 304,
        img: this.images[1],
        name: "name",
        type: 1,
        translated: true,
        rally_point: [[625, 32], [625, 434]],
        speed: 0.75
      });
      this.create_strum({
        x: 625,
        y: 368,
        img: this.images[1],
        name: "name",
        type: 1,
        translated: true,
        rally_point: [[625, 96], [625, 498]],
        speed: 0.75
      });
      rotations = [[32, 368, 100.0, -0.7, 90], [32, 368, 100.0, -0.7, 270]];
      this.create_rotated_strums(this.images[2], rotations, "name", 2, 1.75);
      rotations = [[400, 200, 127.5, 0.7, 135], [400, 200, 98.0, 0.7, 107], [400, 200, 97.5, 0.7, 71], [400, 200, 130.0, 0.7, 44], [400, 200, 95.0, 0.7, 162], [400, 200, 90.0, 0.7, 202], [400, 200, 85.0, 0.7, 245], [400, 200, 120.0, 0.7, 275]];
      this.create_rotated_strums(this.images[3], rotations, "name", 3, 0.5);
      this.create_static_strums(this.images[4], [[0, 0], [800, 400]], "name");
      return this.create_static_strums(this.images[5], [[32, 368]], "exit");
    };
    return LevelF;
  })();
}).call(this);
