(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; }, __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  window.LevelL = (function() {
    __extends(LevelL, window.Level);
    function LevelL(p5, hero, console, sound_system) {
      this.p5 = p5;
      this.hero = hero;
      this.console = console;
      this.sound_system = sound_system;
      this.keyPressed = __bind(this.keyPressed, this);
      this.images = [];
      this.browser = window.shape.browser;
      this.level_name = "l";
      this.url_shapes = ["" + this.browser + "/" + this.level_name + "/1", "" + this.browser + "/" + this.level_name + "/2", "" + this.browser + "/" + this.level_name + "/3", "" + this.browser + "/" + this.level_name + "/4", "" + this.browser + "/" + this.level_name + "/5", "" + this.browser + "/" + this.level_name + "/6", "" + this.browser + "/" + this.level_name + "/7", 'common/4', 'common/13', 'exit/1'];
      this.load_images();
      LevelL.__super__.constructor.call(this, this.p5, this.hero, this.console, this.sound_system);
    }
    LevelL.prototype.next = function() {
      return console.log("level_3 .next");
    };
    LevelL.prototype.next_end = function() {
      this.p5.console.clear();
      console.log("text_end = " + this.colision.text_end);
      if (this.colision.text_end === "all_explodeL") {
        this.all_explode();
      }
      if (this.colision.text_end === "one_explode") {
        this.one_explode();
      }
      if (this.colision.text_end === "no_one_explode") {
        this.no_one_explode();
      }
      console.log("____________ next_end f");
      this.p5.console.add_new_boxed_line("Restart Level ? Press 'r'");
      this.p5.console.add_new_boxed_line("Menu ? Press 'm'");
      return this.p5.keyPressed = this.keyPressed;
    };
    LevelL.prototype.all_explode = function() {
      this.p5.console.add_new_boxed_line("Hero_connected");
      this.p5.console.add_new_boxed_line("you're alone ?... Come home boy...");
      this.p5.console.add_new_boxed_line("Add new_Layer to /Story_line");
      return this.p5.console.add_new_boxed_line(" ");
    };
    LevelL.prototype.one_explode = function() {
      this.p5.console.add_new_boxed_line("Hero_connected");
      this.p5.console.add_new_boxed_line("Welcome home ! An eventful journey isn't it ?");
      this.p5.console.add_new_boxed_line("Add new_Layer to /Story_line");
      return this.p5.console.add_new_boxed_line(" ");
    };
    LevelL.prototype.no_one_explode = function() {
      this.p5.console.add_new_boxed_line("Hero_connected");
      this.p5.console.add_new_boxed_line("Home sweet home ! You made it ! ");
      this.p5.console.add_new_boxed_line("Add new_Layer to /Story_line");
      return this.p5.console.add_new_boxed_line(" ");
    };
    LevelL.prototype.keyPressed = function() {
      console.log("Menu1 key " + this.p5.key);
      if (String.fromCharCode(this.p5.key) === 'r') {
        this.p5.console.clear();
        this.console.boxed = false;
        this.p5.fsm.loop_3();
        this.finished = true;
      }
      if (String.fromCharCode(this.p5.key) === 'm') {
        this.p5.console.clear();
        this.console.boxed = false;
        this.p5.fsm.back_f_3();
        return this.finished = true;
      }
    };
    LevelL.prototype.init = function() {
      var rotations;
      LevelL.__super__.init.call(this);
      this.hero.init(10, 390);
      this.sound_system.current_level = 3;
      this.create_strum({
        x: 0,
        y: 336,
        img: this.images[0],
        name: "name",
        type: 0,
        translated: true,
        rally_point: [[0, 336], [358, 336]],
        speed: 0.75
      });
      this.create_strum({
        x: 74,
        y: 336,
        img: this.images[0],
        name: "name",
        type: 0,
        translated: true,
        rally_point: [[74, 336], [432, 336]],
        speed: 0.75
      });
      this.create_strum({
        x: -74,
        y: 336,
        img: this.images[0],
        name: "name",
        type: 0,
        translated: true,
        rally_point: [[-74, 336], [284, 336]],
        speed: 0.75
      });
      this.create_strum({
        x: 358,
        y: 336,
        img: this.images[0],
        name: "name",
        type: 0,
        translated: true,
        rally_point: [[358, 336], [716, 336]],
        speed: 0.75
      });
      this.create_strum({
        x: 432,
        y: 336,
        img: this.images[0],
        name: "name",
        type: 0,
        translated: true,
        rally_point: [[432, 336], [790, 336]],
        speed: 0.75
      });
      this.create_strum({
        x: 284,
        y: 336,
        img: this.images[0],
        name: "name",
        type: 0,
        translated: true,
        rally_point: [[284, 336], [642, 336]],
        speed: 0.75
      });
      this.create_strum({
        x: 614,
        y: 0,
        img: this.images[1],
        name: "name",
        type: 1,
        translated: true,
        rally_point: [[614, 0], [614, 358]],
        speed: 0.75
      });
      this.create_strum({
        x: 614,
        y: -74,
        img: this.images[1],
        name: "name",
        type: 1,
        translated: true,
        rally_point: [[614, -74], [614, 284]],
        speed: 0.75
      });
      this.create_strum({
        x: 614,
        y: 74,
        img: this.images[1],
        name: "name",
        type: 1,
        translated: true,
        rally_point: [[614, 74], [614, 432]],
        speed: 0.75
      });
      this.create_strum({
        x: 614,
        y: 358,
        img: this.images[1],
        name: "name",
        type: 1,
        translated: true,
        rally_point: [[614, 358], [614, 716]],
        speed: 0.75
      });
      this.create_strum({
        x: 614,
        y: 284,
        img: this.images[1],
        name: "name",
        type: 1,
        translated: true,
        rally_point: [[614, 284], [614, 642]],
        speed: 0.75
      });
      this.create_strum({
        x: 614,
        y: 432,
        img: this.images[1],
        name: "name",
        type: 1,
        translated: true,
        rally_point: [[614, 432], [614, 790]],
        speed: 0.75
      });
      this.create_strum({
        x: 400,
        y: 600,
        img: this.images[7],
        name: "name",
        type: 7,
        translated: true,
        rally_point: [[550, 600], [550, 0], [250, 0], [250, 600], [400, 600]],
        speed: 0.75
      });
      this.create_strum({
        x: 250,
        y: 600,
        img: this.images[7],
        name: "name",
        type: 7,
        translated: true,
        rally_point: [[550, 600], [550, 0], [250, 0], [250, 600]],
        speed: 0.75
      });
      this.create_strum({
        x: 550,
        y: 600,
        img: this.images[7],
        name: "name",
        type: 7,
        translated: true,
        rally_point: [[550, 0], [250, 0], [250, 600], [550, 600]],
        speed: 0.75
      });
      this.create_strum({
        x: 400,
        y: 0,
        img: this.images[7],
        name: "name",
        type: 7,
        translated: true,
        rally_point: [[250, 0], [250, 600], [550, 600], [550, 0], [400, 0]],
        speed: 0.75
      });
      this.create_strum({
        x: 250,
        y: 0,
        img: this.images[7],
        name: "name",
        type: 7,
        translated: true,
        rally_point: [[250, 600], [550, 600], [550, 0], [250, 0]],
        speed: 0.75
      });
      this.create_strum({
        x: 550,
        y: 0,
        img: this.images[7],
        name: "name",
        type: 7,
        translated: true,
        rally_point: [[250, 0], [250, 600], [550, 600], [550, 0]],
        speed: 0.75
      });
      this.create_strum({
        x: 250,
        y: 150,
        img: this.images[7],
        name: "name",
        type: 7,
        translated: true,
        rally_point: [[250, 150], [250, 600], [550, 600], [550, 0], [250, 0]],
        speed: 0.75
      });
      this.create_strum({
        x: 550,
        y: 150,
        img: this.images[7],
        name: "name",
        type: 7,
        translated: true,
        rally_point: [[550, 150], [550, 0], [250, 0], [250, 600], [550, 600]],
        speed: 0.75
      });
      this.create_strum({
        x: 250,
        y: 300,
        img: this.images[7],
        name: "name",
        type: 7,
        translated: true,
        rally_point: [[250, 300], [250, 600], [550, 600], [550, 0], [250, 0]],
        speed: 0.75
      });
      this.create_strum({
        x: 550,
        y: 300,
        img: this.images[7],
        name: "name",
        type: 7,
        translated: true,
        rally_point: [[550, 300], [550, 0], [250, 0], [250, 600], [550, 600]],
        speed: 0.75
      });
      this.create_strum({
        x: 250,
        y: 450,
        img: this.images[7],
        name: "name",
        type: 7,
        translated: true,
        rally_point: [[250, 450], [250, 600], [550, 600], [550, 0], [250, 0]],
        speed: 0.75
      });
      this.create_strum({
        x: 550,
        y: 450,
        img: this.images[7],
        name: "name",
        type: 7,
        translated: true,
        rally_point: [[550, 450], [550, 0], [250, 0], [250, 600], [550, 600]],
        speed: 0.75
      });
      this.create_static_strums(this.images[2], [[32, 32], [76, 76], [120, 120], [768, 368], [724, 324], [680, 280]], "name", 0);
      rotations = [[768, 32, 74.0, -1.75, 45], [768, 32, 148.0, -1.75, 45], [768, 32, 222.0, -1.75, 45], [768, 32, 296.0, -1.75, 45]];
      this.create_rotated_strums(this.images[3], rotations, "name", 3, 0.75);
      rotations = [[768, 32, 74.0, -1.75, 135], [768, 32, 148.0, -1.75, 135], [768, 32, 222.0, -1.75, 135], [768, 32, 296.0, -1.75, 135]];
      this.create_rotated_strums(this.images[4], rotations, "name", 4, 0.75);
      rotations = [[768, 32, 74.0, -1.75, 225], [768, 32, 148.0, -1.75, 225], [768, 32, 222.0, -1.75, 225], [768, 32, 296.0, -1.75, 225]];
      this.create_rotated_strums(this.images[3], rotations, "name", 3, 0.75);
      rotations = [[768, 32, 74.0, -1.75, 315], [768, 32, 148.0, -1.75, 315], [768, 32, 222.0, -1.75, 315], [768, 32, 296.0, -1.75, 315]];
      this.create_rotated_strums(this.images[4], rotations, "name", 4, 0.75);
      rotations = [[400, 200, 200.0, -1.75, 165], [400, 200, 200.0, -1.75, 345], [400, 200, 400.0, -1.75, 225], [400, 200, 400.0, -1.75, 45]];
      this.create_rotated_strums(this.images[8], rotations, "name", 8, -1.5);
      this.create_strum({
        x: 768,
        y: 304,
        img: this.images[5],
        name: "name",
        type: 5,
        translated: true,
        rally_point: [[768, 304], [668, 304]],
        speed: 0.25
      });
      this.create_strum({
        x: 768,
        y: 240,
        img: this.images[5],
        name: "name",
        type: 5,
        translated: true,
        rally_point: [[768, 240], [668, 240]],
        speed: 0.25
      });
      this.create_strum({
        x: 768,
        y: 176,
        img: this.images[5],
        name: "name",
        type: 5,
        translated: true,
        rally_point: [[768, 176], [668, 176]],
        speed: 0.25
      });
      this.create_strum({
        x: 768,
        y: 112,
        img: this.images[6],
        name: "name",
        type: 6,
        translated: true,
        rally_point: [[768, 112], [668, 112]],
        speed: 0.25
      });
      this.create_strum({
        x: 832,
        y: 112,
        img: this.images[5],
        name: "name",
        type: 5,
        translated: true,
        rally_point: [[832, 112], [732, 112]],
        speed: 0.25
      });
      this.create_strum({
        x: 896,
        y: 112,
        img: this.images[5],
        name: "name",
        type: 5,
        translated: true,
        rally_point: [[896, 112], [796, 112]],
        speed: 0.25
      });
      this.create_strum({
        x: 674,
        y: 176,
        img: this.images[6],
        name: "name",
        type: 6,
        translated: true,
        rally_point: [[674, 176], [574, 176]],
        speed: 0.25
      });
      this.create_strum({
        x: 610,
        y: 176,
        img: this.images[5],
        name: "name",
        type: 5,
        translated: true,
        rally_point: [[610, 176], [510, 176]],
        speed: 0.25
      });
      this.create_strum({
        x: 546,
        y: 112,
        img: this.images[5],
        name: "name",
        type: 5,
        translated: true,
        rally_point: [[546, 112], [446, 112]],
        speed: 0.25
      });
      this.create_strum({
        x: 482,
        y: 112,
        img: this.images[5],
        name: "name",
        type: 5,
        translated: true,
        rally_point: [[482, 112], [382, 112]],
        speed: 0.25
      });
      this.create_strum({
        x: 546,
        y: 240,
        img: this.images[6],
        name: "name",
        type: 6,
        translated: true,
        rally_point: [[546, 240], [446, 240]],
        speed: 0.25
      });
      this.create_strum({
        x: 482,
        y: 304,
        img: this.images[6],
        name: "name",
        type: 6,
        translated: true,
        rally_point: [[482, 304], [382, 304]],
        speed: 0.25
      });
      this.create_strum({
        x: 398,
        y: 176,
        img: this.images[6],
        name: "name",
        type: 6,
        translated: true,
        rally_point: [[398, 176], [298, 176]],
        speed: 0.25
      });
      this.create_strum({
        x: 398,
        y: 112,
        img: this.images[5],
        name: "name",
        type: 5,
        translated: true,
        rally_point: [[398, 112], [298, 112]],
        speed: 0.25
      });
      this.create_strum({
        x: 334,
        y: 48,
        img: this.images[5],
        name: "name",
        type: 5,
        translated: true,
        rally_point: [[334, 48], [234, 48]],
        speed: 0.25
      });
      this.create_strum({
        x: 270,
        y: 112,
        img: this.images[5],
        name: "name",
        type: 5,
        translated: true,
        rally_point: [[270, 112], [170, 112]],
        speed: 0.25
      });
      this.create_strum({
        x: 334,
        y: 304,
        img: this.images[6],
        name: "name",
        type: 6,
        translated: true,
        rally_point: [[334, 304], [234, 304]],
        speed: 0.25
      });
      this.create_strum({
        x: 270,
        y: 240,
        img: this.images[6],
        name: "name",
        type: 6,
        translated: true,
        rally_point: [[270, 240], [170, 240]],
        speed: 0.25
      });
      this.create_strum({
        x: 186,
        y: 176,
        img: this.images[6],
        name: "name",
        type: 6,
        translated: true,
        rally_point: [[186, 176], [86, 176]],
        speed: 0.25
      });
      this.create_strum({
        x: 122,
        y: 112,
        img: this.images[6],
        name: "name",
        type: 6,
        translated: true,
        rally_point: [[122, 112], [22, 112]],
        speed: 0.25
      });
      this.create_strum({
        x: 58,
        y: 176,
        img: this.images[6],
        name: "name",
        type: 6,
        translated: true,
        rally_point: [[58, 176], [-42, 176]],
        speed: 0.25
      });
      this.create_strum({
        x: 674,
        y: 368,
        img: this.images[6],
        name: "name",
        type: 6,
        translated: true,
        rally_point: [[674, 368], [574, 368]],
        speed: 0.25
      });
      this.create_strum({
        x: 610,
        y: 432,
        img: this.images[6],
        name: "name",
        type: 6,
        translated: true,
        rally_point: [[610, 432], [510, 432]],
        speed: 0.25
      });
      this.create_strum({
        x: 610,
        y: 496,
        img: this.images[5],
        name: "name",
        type: 5,
        translated: true,
        rally_point: [[610, 496], [510, 496]],
        speed: 0.25
      });
      this.create_strum({
        x: 542,
        y: 496,
        img: this.images[5],
        name: "name",
        type: 5,
        translated: true,
        rally_point: [[542, 496], [442, 496]],
        speed: 0.25
      });
      this.create_strum({
        x: 398,
        y: 432,
        img: this.images[6],
        name: "name",
        type: 6,
        translated: true,
        rally_point: [[398, 432], [298, 432]],
        speed: 0.25
      });
      this.create_strum({
        x: 334,
        y: 432,
        img: this.images[5],
        name: "name",
        type: 5,
        translated: true,
        rally_point: [[334, 432], [234, 432]],
        speed: 0.25
      });
      this.create_strum({
        x: 270,
        y: 496,
        img: this.images[6],
        name: "name",
        type: 6,
        translated: true,
        rally_point: [[270, 496], [170, 496]],
        speed: 0.25
      });
      return this.create_static_strums(this.images[9], [[768, 32]], "exit", 0);
    };
    return LevelL;
  })();
}).call(this);
