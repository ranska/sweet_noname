(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.SoundSystem = (function() {
    SoundSystem.prototype.draw = function() {};
    SoundSystem.prototype.update = function() {
      return this.finished = true;
    };
    SoundSystem.prototype.reboot = function() {
      return this.init();
    };
    function SoundSystem(console) {
      this.console = console;
      this.play_music_no_col_5 = __bind(this.play_music_no_col_5, this);
      this.play_music_no_col_4 = __bind(this.play_music_no_col_4, this);
      this.play_music_no_col_3 = __bind(this.play_music_no_col_3, this);
      this.play_music_no_col_2 = __bind(this.play_music_no_col_2, this);
      this.play_music_no_col_1 = __bind(this.play_music_no_col_1, this);
      this.play_firstMoveSound = __bind(this.play_firstMoveSound, this);
      this.play_base = __bind(this.play_base, this);
      this.loopSound = __bind(this.loopSound, this);
      this.activated = true;
      this.time_outs = [[this.play_base, 300], [this.play_music_no_col_1, 10000], [this.play_music_no_col_2, 20000], [this.play_music_no_col_3, 35000], [this.play_music_no_col_4, 70000], [this.play_music_no_col_5, 90000]];
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
      this.level = "level2";
      this.current_level = "2";
      if (this.activated) {
        soundManager.onready(__bind(function() {
          var base1, colision1, colision2, colision3, firstMoveSound, level, music_col_1, music_col_2, music_col_3, music_col_4, music_col_5, music_col_6, music_col_7, music_end_bad, music_end_good, music_no_col_1, music_no_col_2, music_no_col_3, music_no_col_4, music_no_col_5, _i, _len, _ref, _results;
          if (soundManager.supported()) {
            colision1 = soundManager.createSound({
              id: 'colision1',
              url: '/sounds/collision/mp3/collision1.mp3',
              multiShot: true
            });
            colision2 = soundManager.createSound({
              id: 'colision2',
              url: '/sounds/collision/mp3/collision2.mp3',
              multiShot: true
            });
            colision3 = soundManager.createSound({
              id: 'colision3',
              url: '/sounds/collision/mp3/collision3.mp3',
              multiShot: true
            });
            _ref = [1, 2, 3];
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              level = _ref[_i];
              base1 = soundManager.createSound({
                id: "base_l" + level,
                url: "/sounds/level" + level + "/base/mp3/base0.mp3"
              });
              firstMoveSound = soundManager.createSound({
                id: "firstMoveSound_l" + level,
                url: "/sounds/level" + level + "/base/mp3/base1.mp3"
              });
              music_no_col_1 = soundManager.createSound({
                id: "music_no_col_1_l" + level,
                url: "/sounds/level" + level + "/story/mp3/sto" + level + "_1.mp3"
              });
              music_no_col_2 = soundManager.createSound({
                id: "music_no_col_2_l" + level,
                url: "/sounds/level" + level + "/story/mp3/sto" + level + "_2.mp3"
              });
              music_no_col_3 = soundManager.createSound({
                id: "music_no_col_3_l" + level,
                url: "/sounds/level" + level + "/story/mp3/sto" + level + "_3.mp3"
              });
              music_no_col_4 = soundManager.createSound({
                id: "music_no_col_4_l" + level,
                url: "/sounds/level" + level + "/story/mp3/sto" + level + "_4.mp3"
              });
              music_no_col_5 = soundManager.createSound({
                id: "music_no_col_5_l" + level,
                url: "/sounds/level" + level + "/story/mp3/sto" + level + "_5.mp3"
              });
              music_col_1 = soundManager.createSound({
                id: "music_col_1_l" + level,
                url: "/sounds/level" + level + "/" + this.os + "/mp3/1.mp3"
              });
              music_col_2 = soundManager.createSound({
                id: "music_col_2_l" + level,
                url: "/sounds/level" + level + "/" + this.os + "/mp3/2.mp3"
              });
              music_col_3 = soundManager.createSound({
                id: "music_col_3_l" + level,
                url: "/sounds/level" + level + "/" + this.os + "/mp3/3.mp3"
              });
              music_col_4 = soundManager.createSound({
                id: "music_col_4_l" + level,
                url: "/sounds/level" + level + "/" + this.os + "/mp3/4.mp3"
              });
              music_col_5 = soundManager.createSound({
                id: "music_col_5_l" + level,
                url: "/sounds/level" + level + "/" + this.os + "/mp3/5.mp3"
              });
              music_col_6 = soundManager.createSound({
                id: "music_col_6_l" + level,
                url: "/sounds/level" + level + "/" + this.os + "/mp3/6.mp3"
              });
              music_col_7 = soundManager.createSound({
                id: "music_col_7_l" + level,
                url: "/sounds/level" + level + "/" + this.os + "/mp3/7.mp3"
              });
              music_end_bad = soundManager.createSound({
                id: "music_end_bad",
                url: "/sounds/ending/mp3/bad.mp3"
              });
              _results.push(music_end_good = soundManager.createSound({
                id: "music_end_good",
                url: "/sounds/ending/mp3/good.mp3"
              }));
            }
            return _results;
          }
        }, this));
      }
    }
    SoundSystem.prototype.init = function() {
      this.current_timer = 0;
      this.lauched_timeout = [null, null, null, null, null, null];
      return this.lauched_timeout[0] = setTimeout(this.play_base, 300);
    };
    SoundSystem.prototype.loopSound = function(soundID) {
      return window.setTimeout(__bind(function() {
        return soundManager.play(soundID, {
          onfinish: __bind(function() {
            return this.loopSound(soundID);
          }, this)
        }, 1);
      }, this));
    };
    SoundSystem.prototype.touch_strum = function() {
      var random_number;
      random_number = Math.floor(Math.random() * 3);
      soundManager.play("colision" + (random_number + 1));
      if (this.current_timer < 4) {
        this.change_timer();
        return console.log("after change_timer : current_timer :" + this.current_timer + ":");
      }
    };
    SoundSystem.prototype.change_timer = function() {
      clearTimeout(this.lauched_timeout[this.current_timer]);
      return this.run_time_out();
    };
    SoundSystem.prototype.run_time_out = function() {
      this.current_timer += 1;
      return this.lauched_timeout[this.current_timer] = setTimeout(this.time_outs[this.current_timer][0], this.time_outs[this.current_timer][1]);
    };
    SoundSystem.prototype.play_base = function() {
      this.loopSound("base_l" + this.current_level);
      return this.run_time_out();
    };
    SoundSystem.prototype.play_firstMoveSound = function() {
      this.loopSound("firstMoveSound_l" + this.current_level);
      return console.log("firstMoveSound_l" + this.current_level);
    };
    SoundSystem.prototype.play_music_no_col_1 = function() {
      console.log("play_music_no_col_1 " + this.current_level + ": current_timer :" + this.current_timer + ":");
      this.loopSound("music_no_col_1_l" + this.current_level);
      this.console.add_new_line("-");
      this.console.add_new_line("you chose the hard way, interesting...");
      this.console.add_new_line("-");
      this.console.add_new_line("add new_Layer to /Story_Line");
      this.console.add_new_line(" ");
      return this.run_time_out();
    };
    SoundSystem.prototype.play_music_no_col_2 = function() {
      console.log("play_music_no_col_2 : current_timer :" + this.current_timer + ":");
      this.loopSound("music_no_col_2_l" + this.current_level);
      this.console.add_new_line("-");
      this.console.add_new_line("a second one, you are on fire !");
      this.console.add_new_line("-");
      this.console.add_new_line("add new_Layer to /Story_Line");
      this.console.add_new_line(" ");
      return this.run_time_out();
    };
    SoundSystem.prototype.play_music_no_col_3 = function() {
      console.log("play_music_no_col_3 : current_timer :" + this.current_timer + ":");
      this.loopSound("music_no_col_3_l" + this.current_level);
      this.console.add_new_line("You are a Revealer now Hero");
      this.console.add_new_line("Is the Third the trinity ? No this is just");
      this.console.add_new_line("the middle of something...");
      this.console.add_new_line("add new_Layer to /Story_Line");
      this.console.add_new_line(" ");
      return this.run_time_out();
    };
    SoundSystem.prototype.play_music_no_col_4 = function() {
      console.log("play_music_no_col_4 : current_timer :" + this.current_timer + ":");
      this.loopSound("music_no_col_4_l" + this.current_level);
      this.console.add_new_line("");
      this.console.add_new_line("Step by step, you're close");
      this.console.add_new_line("");
      this.console.add_new_line("add new_Layer to /Story_Line");
      this.console.add_new_line(" ");
      return this.run_time_out();
    };
    SoundSystem.prototype.play_music_no_col_5 = function() {
      console.log("play_music_no_col_5 : current_timer :" + this.current_timer + ":");
      this.loopSound("music_no_col_5_l" + this.current_level);
      this.console.add_new_line("Well played finally, something is released");
      this.console.add_new_line("You just have to reach the end...");
      this.console.add_new_line("add new_Layer to /Story_Line");
      this.console.add_new_line("Area Completed");
      return this.console.add_new_line(" ");
    };
    SoundSystem.prototype.touch_strum_type = function(strum_type) {
      switch (strum_type) {
        case 1:
          this.loopSound('music_col_1');
          return console.log("first touch for type " + strum_type + " os type " + this.os);
        case 2:
          return this.loopSound('music_col_2');
        case 3:
          return this.loopSound('music_col_3');
        case 4:
          return this.loopSound('music_col_4');
        case 5:
          return this.loopSound('music_col_5');
        case 6:
          return this.loopSound('music_col_6');
        case 7:
          return this.loopSound('music_col_7');
      }
    };
    SoundSystem.prototype.play_music_end_bad = function() {
      return soundManager.play("music_end_bad");
    };
    SoundSystem.prototype.play_music_end_good = function() {
      return soundManager.play("music_end_good");
    };
    SoundSystem.prototype.stop = function() {
      var sound_timeout, _i, _len, _ref, _results;
      soundManager.stopAll();
      _ref = this.time_outs;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        sound_timeout = _ref[_i];
        _results.push(clearTimeout(sound_timeout));
      }
      return _results;
    };
    SoundSystem.prototype.reboot = function() {
      this.stop();
      return this.init();
    };
    return SoundSystem;
  })();
}).call(this);
