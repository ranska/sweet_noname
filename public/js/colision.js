(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.Colision = (function() {
    function Colision(ps, hero, strums, console) {
      this.ps = ps;
      this.hero = hero;
      this.strums = strums;
      this.console = console;
      this.incrase_timer = __bind(this.incrase_timer, this);
      this.timer_colision = __bind(this.timer_colision, this);
      this.init();
    }
    Colision.prototype.init = function() {
      this.strum_hit = 0;
      this.end_level = false;
      this.explosions = [];
      this.touched_strum_types = [null, null, null, null, null, null, null, null, null];
      this.text_end = "null";
      this.time_since_last_col = 0;
      return this.life_timer = 0;
    };
    Colision.prototype.update = function() {
      var distance, end_explode, explosion, i, strum, strum_coords, strum_x, strum_y, touched, x_square, y_square, _i, _j, _len, _len2, _ref, _ref2;
      this.life_timer += 1;
      if (this.life_timer === 60) {
        this.incrase_timer();
      }
      if (this.life_timer === 60) {
        this.life_timer = 0;
      }
      i = 0;
      touched = null;
      _ref = this.strums;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        strum = _ref[_i];
        strum_coords = strum.get_coords();
        strum_x = strum_coords[0];
        strum_y = strum_coords[1];
        strum_x -= this.hero.size * 3;
        strum_y -= this.hero.size * 3;
        x_square = (this.hero.x + this.hero.size - (strum_x + strum.size)) * (this.hero.x + this.hero.size - (strum_x + strum.size));
        y_square = (this.hero.y + this.hero.size - (strum_y + strum.size)) * (this.hero.y + this.hero.size - (strum_y + strum.size));
        distance = (this.hero.size + strum.size) * (this.hero.size + strum.size);
        if ((y_square + x_square) < distance) {
          touched = i;
          this.strum_hit += 1;
          this.ps.sound_system.touch_strum();
          this.colision_message();
          this.explosions.push(new Explosion(this.ps, strum_x + strum.size / 2, strum_y + strum.size / 2));
          this.check_first_colision_type(strum);
          this.time_since_last_col = 0;
          if (strum.name === "exit") {
            console.log("@strum_hit à la fin = " + this.strum_hit);
            this.end_level = true;
            if (this.strum_hit === 1) {
              this.text_end = "no_one_explode";
              this.ps.sound_system.stop();
              this.ps.sound_system.play_music_end_good();
            }
            if (this.strum_hit >= 2) {
              this.text_end = "one_explode";
              this.ps.sound_system.stop();
              this.ps.sound_system.play_music_end_bad();
            }
            if (this.strum_hit === 27) {
              this.text_end = "all_explodeF";
            }
            if (this.strum_hit === 94) {
              this.text_end = "all_explodeM";
            }
            if (this.strum_hit === 79) {
              this.text_end = "all_explodeL";
            }
          } else {
            this.hero.choc_with(new this.ps.PVector(strum.x, strum.y));
          }
        }
        i += 1;
      }
      if (touched !== null) {
        this.strums.splice(touched, 1);
      }
      i = 0;
      end_explode = null;
      _ref2 = this.explosions;
      for (_j = 0, _len2 = _ref2.length; _j < _len2; _j++) {
        explosion = _ref2[_j];
        explosion.update();
        if (explosion.finished) {
          end_explode = i;
        }
        i += 1;
      }
      if (end_explode !== null) {
        return this.explosions.splice(end_explode, 1);
      }
    };
    Colision.prototype.timer_colision = function() {
      this.ps.noStroke();
      this.ps.fill(window.color);
      return this.ps.text("no colision since : " + this.time_since_last_col + " sec", 530, 590);
    };
    Colision.prototype.incrase_timer = function() {
      return this.time_since_last_col += 1;
    };
    Colision.prototype.draw = function() {
      var explosion, _i, _len, _ref;
      _ref = this.explosions;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        explosion = _ref[_i];
        explosion.draw();
      }
      return this.timer_colision();
    };
    Colision.prototype.reboot = function() {
      return this.init();
    };
    Colision.prototype.check_first_colision_type = function(strum) {
      if (this.touched_strum_types[strum.type] === null) {
        this.touched_strum_types[strum.type] = 1;
        return this.ps.sound_system.touch_strum_type(strum.type);
      }
    };
    Colision.prototype.colision_message = function() {
      this.console.add_new_line("Contact no " + this.strum_hit + " not allowed");
      this.console.add_new_line("no, no, no...");
      this.console.add_new_line("Erasing Unknow_object...");
      this.console.add_new_line("Add new_Layer to /Story_line");
      return this.console.add_new_line(" ");
    };
    return Colision;
  })();
}).call(this);
