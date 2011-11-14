(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.SceneEngin = (function() {
    function SceneEngin(p5) {
      var events;
      this.p5 = p5;
      this.init();
      events = [
        {
          name: "explain_me",
          from: "start_menu",
          to: "how_to_play"
        }, {
          name: 'back_f_how',
          from: 'how_to_play',
          to: 'start_menu'
        }, {
          name: 'who_make_this',
          from: 'start_menu',
          to: 'credit'
        }, {
          name: 'back_f_who',
          from: 'credit',
          to: 'start_menu'
        }, {
          name: 'go_level_1',
          from: 'start_menu',
          to: 'level_1'
        }, {
          name: 'loop_1',
          from: 'level_1',
          to: 'level_1'
        }, {
          name: 'back_f_1',
          from: 'level_1',
          to: 'start_menu'
        }, {
          name: 'go_level_2',
          from: 'level_1',
          to: 'level_2'
        }, {
          name: 'loop_2',
          from: 'level_2',
          to: 'level_2'
        }, {
          name: 'back_f_2',
          from: 'level_2',
          to: 'start_menu'
        }, {
          name: 'go_level_3',
          from: 'level_2',
          to: 'level_3'
        }, {
          name: 'loop_3',
          from: 'level_3',
          to: 'level_3'
        }, {
          name: 'back_f_3',
          from: 'level_3',
          to: 'start_menu'
        }, {
          name: 'go_end',
          from: 'level_3',
          to: 'end'
        }, {
          name: 'back_f_end',
          from: 'end',
          to: 'start_menu'
        }
      ];
      this.p5.fsm = StateMachine.create({
        initial: 'start_menu',
        events: events,
        callbacks: {
          onexplain_me: __bind(function(event, from, to) {
            console.log('onexplain_me');
            return this.p5.scene_engin.change_level(this.how_to_play);
          }, this),
          onback_f_how: __bind(function(event, from, to) {
            console.log('onback_f_how');
            return this.p5.scene_engin.change_level(this.menu_1);
          }, this),
          onwho_make_this: __bind(function(event, from, to) {
            console.log('onwho_make_this');
            return this.p5.scene_engin.change_level(this.credit_screen);
          }, this),
          onback_f_who: __bind(function(event, from, to) {
            console.log('onback_f_who');
            return this.p5.scene_engin.change_level(this.menu_1);
          }, this),
          ongo_level_1: __bind(function(event, from, to) {
            console.log('ongo_level_1');
            return this.p5.scene_engin.change_level(this.level_f);
          }, this),
          onloop_1: __bind(function(event, from, to) {
            console.log('onloop_1');
            return this.p5.scene_engin.change_level(this.level_f);
          }, this),
          onback_f_1: __bind(function(event, from, to) {
            console.log('onback_f_1');
            return this.p5.scene_engin.change_level(this.menu_1);
          }, this),
          ongo_level_2: __bind(function(event, from, to) {
            console.log('ongo_level_2');
            return this.p5.scene_engin.change_level(this.level_m);
          }, this),
          onloop_2: __bind(function(event, from, to) {
            console.log('onloop_2');
            return this.p5.scene_engin.change_level(this.level_m);
          }, this),
          onback_f_2: __bind(function(event, from, to) {
            console.log('onback_f_2');
            return this.p5.scene_engin.change_level(this.menu_1);
          }, this),
          ongo_level_3: __bind(function(event, from, to) {
            console.log('ongo_level_3');
            return this.p5.scene_engin.change_level(this.level_l);
          }, this),
          onloop_3: __bind(function(event, from, to) {
            console.log('onloop_3');
            return this.p5.scene_engin.change_level(this.level_l);
          }, this),
          onback_f_3: __bind(function(event, from, to) {
            console.log('onback_f_3');
            return this.p5.scene_engin.change_level(this.menu_1);
          }, this),
          ongo_end: __bind(function(event, from, to) {
            console.log('ongo_end');
            return this.p5.scene_engin.change_level(this.menu_2);
          }, this),
          onback_f_end: __bind(function(event, from, to) {
            console.log('onback_f_end');
            return this.p5.scene_engin.change_level(this.menu_1);
          }, this)
        }
      });
    }
    SceneEngin.prototype.init = function() {
      this.level_f = new LevelF(this.p5, this.p5.hero, this.p5.console, this.p5.sound_system);
      this.level_m = new LevelM(this.p5, this.p5.hero, this.p5.console, this.p5.sound_system);
      this.level_l = new LevelL(this.p5, this.p5.hero, this.p5.console, this.p5.sound_system);
      this.menu_2 = new Menu2(this.p5);
      this.credit_screen = new CreditScreen(this.p5);
      this.how_to_play = new HowToPlayScreen(this.p5);
      this.menu_1 = new Menu1(this.p5);
      return this.current_level = this.menu_1;
    };
    SceneEngin.prototype.change_level = function(level) {
      this.current_level.quit();
      this.current_level = level;
      return this.current_level.reboot();
    };
    SceneEngin.prototype.draw = function() {};
    SceneEngin.prototype.update = function() {
      this.current_level.update();
      if (this.current_level.finished) {
        this.current_level.reboot();
        console.log("update scene");
        console.log(this.current_level);
        return this.current_level.next();
      }
    };
    return SceneEngin;
  })();
}).call(this);
