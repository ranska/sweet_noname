(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.Level = (function() {
    function Level(p5, hero, console, sound_system) {
      var currentTime, hours;
      this.p5 = p5;
      this.hero = hero;
      this.console = console;
      this.sound_system = sound_system;
      this.strums = [];
      window.strums_type = [];
      window.strums_touched = [];
      this.angle = 0;
      this.init();
      currentTime = new Date();
      hours = currentTime.getHours();
      this.this_is_night = false;
      if (hours < 9 || hours >= 20) {
        this.this_is_night = true;
      }
      this.colision = new Colision(this.p5, this.hero, this.strums, this.console);
      this.slow = this.top_slow = 3;
      this.diameter = 64;
    }
    Level.prototype.init = function() {
      this.finished = false;
      this.strums = [];
      window.strums_type = [];
      window.strums_touched = [];
      this.first_move = true;
      this.state_timer = 0;
      this.life = 80;
      this.state = "draw_begin";
      return this.anime = 0;
    };
    Level.prototype.load_images = function() {
      var url, _i, _len, _ref, _results;
      _ref = this.url_shapes;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        url = _ref[_i];
        _results.push(this.images.push(this.p5.loadImage("/images/famillies/" + url, "png", __bind(function() {
          return this.p5.draw();
        }, this))));
      }
      return _results;
    };
    Level.prototype.mouse_clicked = function() {
      if (this.first_move) {
        this.first_move = false;
        this.sound_system.play_firstMoveSound();
        this.console.add_new_line("Hero_engaged");
        this.console.add_new_line("what will you do?");
        this.console.add_new_line("Add new_Layer to /Story_Line");
        return this.console.add_new_line(" ");
      }
    };
    Level.prototype.draw = function() {
      if (this.state === "draw_begin") {
        this.draw_begin();
      }
      if (this.state === "draw_middle") {
        this.draw_middle();
      }
      if (this.state === "draw_end") {
        return this.draw_end();
      }
    };
    Level.prototype.draw_begin = function() {
      this.p5.stroke(this.p5.color(window.color));
      this.p5.noFill();
      this.p5.ellipse(this.hero.x, this.hero.y, this.diameter * this.life, this.diameter * this.life);
      if (this.life === 70) {
        return this.init_message();
      }
    };
    Level.prototype.draw_middle = function() {
      var strum, _i, _len, _ref;
      _ref = this.strums;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        strum = _ref[_i];
        strum.draw(this.angle);
      }
      return this.colision.draw();
    };
    Level.prototype.draw_end = function() {
      var strum, _i, _len, _ref;
      this.animation_end = [[28, 17], [25, 8], [18, 4], [10, 9], [4, 15], [5, 24], [9, 31], [16, 36], [25, 37], [33, 32], [40, 26], [42, 17], [40, 8], [36, -1], [30, -7], [22, -11], [14, -10], [6, -6]];
      _ref = this.strums;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        strum = _ref[_i];
        strum.draw(this.angle);
      }
      this.p5.stroke(this.p5.color(window.color));
      this.p5.fill(0, 0, 0);
      if (this.life <= 15) {
        this.p5.ellipse(this.hero.x + 28, this.hero.y + 17, 16, 16);
      }
      if (this.life <= 20) {
        this.p5.ellipse(this.hero.x + 25, this.hero.y + 8, 16, 16);
      }
      if (this.life <= 25) {
        this.p5.ellipse(this.hero.x + 18, this.hero.y + 4, 16, 16);
      }
      if (this.life <= 30) {
        this.p5.ellipse(this.hero.x + 10, this.hero.y + 9, 16, 16);
      }
      if (this.life <= 35) {
        this.p5.ellipse(this.hero.x + 4, this.hero.y + 15, 16, 16);
      }
      if (this.life <= 40) {
        this.p5.ellipse(this.hero.x + 5, this.hero.y + 24, 16, 16);
      }
      if (this.life <= 45) {
        this.p5.ellipse(this.hero.x + 9, this.hero.y + 31, 16, 16);
      }
      if (this.life <= 50) {
        this.p5.ellipse(this.hero.x + 16, this.hero.y + 36, 16, 16);
      }
      if (this.life <= 55) {
        this.p5.ellipse(this.hero.x + 25, this.hero.y + 37, 16, 16);
      }
      if (this.life <= 60) {
        this.p5.ellipse(this.hero.x + 33, this.hero.y + 32, 16, 16);
      }
      if (this.life <= 65) {
        this.p5.ellipse(this.hero.x + 40, this.hero.y + 26, 16, 16);
      }
      if (this.life <= 70) {
        this.p5.ellipse(this.hero.x + 42, this.hero.y + 17, 16, 16);
      }
      if (this.life <= 75) {
        this.p5.ellipse(this.hero.x + 40, this.hero.y + 8, 16, 16);
      }
      if (this.life <= 80) {
        this.p5.ellipse(this.hero.x + 36, this.hero.y - 1, 16, 16);
      }
      if (this.life <= 85) {
        this.p5.ellipse(this.hero.x + 30, this.hero.y - 7, 16, 16);
      }
      if (this.life <= 90) {
        this.p5.ellipse(this.hero.x + 22, this.hero.y - 11, 16, 16);
      }
      if (this.life <= 95) {
        this.p5.ellipse(this.hero.x + 14, this.hero.y - 10, 16, 16);
      }
      if (this.life <= 100) {
        this.p5.ellipse(this.hero.x + 6, this.hero.y - 6, 16, 16);
      }
      return this.p5.ellipse(this.hero.x, this.hero.y, 16, 16);
    };
    Level.prototype.update = function() {
      if (this.state_timer <= 80) {
        this.state_timer += 1;
      }
      if (this.state_timer === 80) {
        this.state = "draw_middle";
      }
      if (this.state === "draw_begin") {
        this.update_begin();
      }
      if (this.state === "draw_middle") {
        this.update_middle();
      }
      if (this.state === "draw_end") {
        return this.update_end();
      }
    };
    Level.prototype.update_begin = function() {
      if (this.life >= 0) {
        return this.life -= 1;
      }
    };
    Level.prototype.update_middle = function() {
      var strum, _i, _len, _ref;
      this.angle += 1;
      if (this.angle === 360) {
        this.angle = 0;
      }
      this.colision.update();
      this.slow -= 1;
      if (this.slow === 0) {
        _ref = this.strums;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          strum = _ref[_i];
          strum.update();
        }
        this.slow = this.top_slow;
      }
      if (this.colision.end_level) {
        this.state = "draw_end";
        this.life = 100;
        return this.next_end();
      }
    };
    Level.prototype.update_end = function() {
      if (this.life >= 0) {
        this.life -= 1;
      }
      return this.anime += 1;
    };
    Level.prototype.reboot = function() {
      this.init();
      this.sound_system.reboot();
      this.colision.reboot();
      return this.colision.strums = this.strums;
    };
    Level.prototype.quit = function() {
      return this.sound_system.stop();
    };
    Level.prototype.create_rotated_strums = function(image, rotations, name, type, angle_speed) {
      var rotation, x, _i, _len, _results;
      if (type == null) {
        type = null;
      }
      if (angle_speed == null) {
        angle_speed = 1;
      }
      _results = [];
      for (_i = 0, _len = rotations.length; _i < _len; _i++) {
        rotation = rotations[_i];
        if (!this.this_is_night) {
          x = rotation[0];
        } else {
          x = 800 - rotation[0];
        }
        _results.push(this.strums.push(new Strum(this.p5, {
          x: x,
          y: rotation[1],
          img: image,
          center_x: x,
          center_y: rotation[1],
          radius: rotation[2],
          current_angle: rotation[4],
          rotated: true,
          name: name,
          type: type,
          angle_speed: angle_speed
        })));
      }
      return _results;
    };
    Level.prototype.create_static_strums = function(image, positions, name, type, translated, speed) {
      var position, x, _i, _len, _results;
      if (type == null) {
        type = null;
      }
      if (translated == null) {
        translated = false;
      }
      if (speed == null) {
        speed = 1;
      }
      _results = [];
      for (_i = 0, _len = positions.length; _i < _len; _i++) {
        position = positions[_i];
        if (!this.this_is_night) {
          x = position[0];
        } else {
          x = 800 - position[0];
        }
        _results.push(this.strums.push(new Strum(this.p5, {
          x: x,
          y: position[1],
          img: image,
          rotated: false,
          name: name,
          type: type,
          translated: translated,
          speed: speed
        })));
      }
      return _results;
    };
    Level.prototype.create_strum = function(options) {
      var night_point, point, rally_point, x, _i, _len, _ref;
      if (!this.this_is_night) {
        x = options.x;
        rally_point = options.rally_point;
      } else {
        x = 800 - options.x;
        rally_point = [];
        _ref = options.rally_point;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          point = _ref[_i];
          night_point = [800 - point[0], point[1]];
          rally_point.push(night_point);
        }
      }
      return this.strums.push(new Strum(this.p5, {
        x: x,
        y: options.y,
        img: options.img,
        rotated: options.rotated,
        name: options.name,
        type: options.type,
        translated: options.translated,
        center_x: x,
        center_y: options.y,
        radius: options.radius,
        current_angle: options.current_angle,
        rally_point: rally_point,
        angle_speed: options.angle_speed,
        speed: options.speed
      }));
    };
    Level.prototype.init_message = function() {
      this.console.add_new_line(" ");
      this.console.add_new_line(" ");
      this.console.add_new_line(" ");
      this.console.add_new_line(" ");
      this.console.add_new_line(" ");
      this.console.add_new_line("Hero_detected");
      this.console.add_new_line("lost in my dark world...");
      return this.console.add_new_line(" ");
    };
    return Level;
  })();
}).call(this);
