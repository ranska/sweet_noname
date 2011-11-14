(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; }, __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  window.LevelM = (function() {
    __extends(LevelM, window.Level);
    function LevelM(p5, hero, console, sound_system) {
      this.p5 = p5;
      this.hero = hero;
      this.console = console;
      this.sound_system = sound_system;
      this.keyPressed = __bind(this.keyPressed, this);
      this.images = [];
      this.browser = window.shape.browser;
      this.level_name = "m";
      this.url_shapes = ["" + this.browser + "/" + this.level_name + "/1", "" + this.browser + "/" + this.level_name + "/2", "" + this.browser + "/" + this.level_name + "/3", "" + this.browser + "/" + this.level_name + "/4", "" + this.browser + "/" + this.level_name + "/5", 'common/1', 'common/12', 'exit/1'];
      this.load_images();
      LevelM.__super__.constructor.call(this, this.p5, this.hero, this.console, this.sound_system);
    }
    LevelM.prototype.next = function() {
      return console.log("level_2 .next");
    };
    LevelM.prototype.next_end = function() {
      this.p5.console.clear();
      console.log("text_end = " + this.colision.text_end);
      if (this.colision.text_end === "all_explodeM") {
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
      return this.p5.keyPressed = this.keyPressed;
    };
    LevelM.prototype.all_explode = function() {
      this.p5.console.add_new_boxed_line("Hero_connected");
      this.p5.console.add_new_boxed_line("you're alone ?... Come home boy...");
      this.p5.console.add_new_boxed_line("Add new_Layer to /Story_line");
      return this.p5.console.add_new_boxed_line(" ");
    };
    LevelM.prototype.one_explode = function() {
      this.p5.console.add_new_boxed_line("Hero_connected");
      this.p5.console.add_new_boxed_line("Welcome home ! An eventful journey isn't it ?");
      this.p5.console.add_new_boxed_line("Add new_Layer to /Story_line");
      return this.p5.console.add_new_boxed_line(" ");
    };
    LevelM.prototype.no_one_explode = function() {
      this.p5.console.add_new_boxed_line("Hero_connected");
      this.p5.console.add_new_boxed_line("Home sweet home ! You made it ! ");
      this.p5.console.add_new_boxed_line("Add new_Layer to /Story_line");
      return this.p5.console.add_new_boxed_line(" ");
    };
    LevelM.prototype.keyPressed = function() {
      console.log("Menu1 key " + this.p5.key);
      if (String.fromCharCode(this.p5.key) === 'n') {
        this.p5.console.clear();
        this.console.boxed = false;
        this.p5.fsm.go_level_3();
        this.finished = true;
      }
      if (String.fromCharCode(this.p5.key) === 'm') {
        this.p5.console.clear();
        this.console.boxed = false;
        this.p5.fsm.back_f_2();
        this.finished = true;
      }
      if (String.fromCharCode(this.p5.key) === 'r') {
        this.p5.console.clear();
        this.console.boxed = false;
        this.p5.fsm.loop_2();
        return this.finished = true;
      }
    };
    LevelM.prototype.init = function() {
      var rotations;
      LevelM.__super__.init.call(this);
      this.hero.init(10, 10);
      this.sound_system.current_level = 2;
      this.create_strum({
        x: 430,
        y: 128,
        img: this.images[3],
        name: "name",
        type: 3,
        translated: true,
        rally_point: [[430, 128], [430, -20]],
        speed: 0.75
      });
      this.create_strum({
        x: 430,
        y: 54,
        img: this.images[3],
        name: "name",
        type: 3,
        translated: true,
        rally_point: [[430, 54], [430, -94]],
        speed: 0.75
      });
      this.create_strum({
        x: 430,
        y: -20,
        img: this.images[3],
        name: "name",
        type: 3,
        translated: true,
        rally_point: [[430, -20], [430, -168]],
        speed: 0.75
      });
      this.create_strum({
        x: 430,
        y: 430,
        img: this.images[3],
        name: "name",
        type: 3,
        translated: true,
        rally_point: [[430, 430], [430, 578]],
        speed: 0.75
      });
      this.create_strum({
        x: 430,
        y: 494,
        img: this.images[3],
        name: "name",
        type: 3,
        translated: true,
        rally_point: [[430, 494], [430, 642]],
        speed: 0.75
      });
      this.create_strum({
        x: 430,
        y: 568,
        img: this.images[3],
        name: "name",
        type: 3,
        translated: true,
        rally_point: [[430, 568], [430, 716]],
        speed: 0.75
      });
      this.create_strum({
        x: 280,
        y: 274,
        img: this.images[4],
        name: "name",
        type: 3,
        translated: true,
        rally_point: [[280, 274], [132, 274]],
        speed: 0.75
      });
      this.create_strum({
        x: 206,
        y: 274,
        img: this.images[4],
        name: "name",
        type: 3,
        translated: true,
        rally_point: [[206, 274], [58, 274]],
        speed: 0.75
      });
      this.create_strum({
        x: 132,
        y: 274,
        img: this.images[4],
        name: "name",
        type: 3,
        translated: true,
        rally_point: [[132, 274], [-16, 274]],
        speed: 0.75
      });
      this.create_strum({
        x: 590,
        y: 274,
        img: this.images[4],
        name: "name",
        type: 3,
        translated: true,
        rally_point: [[590, 274], [738, 274]],
        speed: 0.75
      });
      this.create_strum({
        x: 664,
        y: 274,
        img: this.images[4],
        name: "name",
        type: 3,
        translated: true,
        rally_point: [[664, 274], [812, 274]],
        speed: 0.75
      });
      this.create_strum({
        x: 738,
        y: 274,
        img: this.images[4],
        name: "name",
        type: 3,
        translated: true,
        rally_point: [[738, 274], [886, 274]],
        speed: 0.75
      });
      rotations = [[435, 274, 155.0, 1.5, 21], [435, 274, 145.0, 1.5, 46], [435, 274, 155.0, 1.5, 70], [435, 274, 155.0, 1.5, 112], [435, 274, 145.0, 1.5, 136], [435, 274, 155.0, 1.5, 160], [435, 274, 155.0, 1.5, 202], [435, 274, 145.0, 1.5, 226], [435, 274, 155.0, 1.5, 250], [435, 274, 155.0, 1.5, 292], [435, 274, 145.0, 1.5, 316], [435, 274, 155.0, 1.5, 340]];
      this.create_rotated_strums(this.images[0], rotations, "name", 0, 1.5);
      rotations = [[435, 274, 371.0, -1, 335], [435, 274, 393.0, -1, 344], [435, 274, 420.0, -1, 352], [435, 274, 405.0, -1, 9], [435, 274, 393.0, -1, 16], [435, 274, 371.0, -1, 25], [435, 274, 420.0, -1, 172], [435, 274, 393.0, -1, 164], [435, 274, 371.0, -1, 155], [435, 274, 371.0, -1, 205], [435, 274, 393.0, -1, 196], [435, 274, 420.0, -1, 189]];
      this.create_rotated_strums(this.images[1], rotations, "name", 1, -1);
      rotations = [[435, 274, 300.0, -1.75, 90], [435, 274, 300.0, -1.75, 270]];
      this.create_rotated_strums(this.images[2], rotations, "sp 8", 2, 1.75);
      rotations = [[455, 274, 208.0, 1, 33.5], [455, 274, 225.0, 1, 46], [455, 274, 228.0, 1, 57.5], [455, 274, 220.0, 1, 69.5], [455, 274, 275.0, 1, 59], [455, 274, 268.5, 1, 69], [455, 274, 222.0, 1, 82], [455, 274, 231.0, 1, 93], [455, 274, 220.0, 1, 105], [455, 274, 225.0, 1, 117.5], [455, 274, 259.0, 1, 125.5], [455, 274, 190.0, 1, 127.5], [455, 274, 231.0, 1, 135], [455, 274, 189.0, 1, 141.5], [455, 274, 195.0, 1, 155], [455, 274, 195.0, 1, 168.5], [455, 274, 177.0, 1, 182.5], [455, 274, 200.0, 1, 195], [455, 274, 225.0, 1, 184], [455, 274, 180.0, 1, 210], [455, 274, 190.0, 1, 225], [455, 274, 195.0, 1, 239], [455, 274, 210.0, 1, 252], [455, 274, 187.0, 1, 263.5], [455, 274, 198.0, 1, 277], [455, 274, 235.0, 1, 268], [455, 274, 220.0, 1, 288.5], [455, 274, 220.0, 1, 300.5], [455, 274, 225.0, 1, 313], [455, 274, 222.0, 1, 325]];
      this.create_rotated_strums(this.images[5], rotations, "name", 5, 0.75);
      rotations = [[400, 300, 445, -0.25, 238], [400, 300, 450.0, -0.25, 252.5], [400, 300, 390, -0.25, 280], [400, 300, 395.0, -0.25, 295], [400, 300, 485.0, -0.25, 298], [400, 300, 390.0, -0.25, 312.5], [400, 300, 490.0, -0.25, 312.5], [400, 300, 420.0, -0.25, 325], [400, 300, 420.0, -0.25, 342.5], [400, 300, 400.0, -0.25, 360], [400, 300, 500.0, -0.25, 15], [400, 300, 405.0, -0.25, 17.5], [400, 300, 445, -0.25, 57], [400, 300, 450.0, -0.25, 72.5], [400, 300, 410.0, -0.25, 88], [400, 300, 402.5, -0.25, 106], [400, 300, 395.0, -0.25, 124], [400, 300, 490.0, -0.25, 124], [400, 300, 520.0, -0.25, 142.5], [400, 300, 420.0, -0.25, 142.5], [400, 300, 420.0, -0.25, 160], [400, 300, 400.0, -0.25, 178], [400, 300, 500.0, -0.25, 195], [400, 300, 405.0, -0.25, 197.5]];
      this.create_rotated_strums(this.images[6], rotations, "velocy", 6, 0.25);
      return this.create_static_strums(this.images[7], [[430, 274]], "exit", 0);
    };
    return LevelM;
  })();
}).call(this);
