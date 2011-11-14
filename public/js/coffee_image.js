(function() {
  var canvas1_proc;
  canvas1_proc = function(ps) {
    ps.setup = function() {
      var fontA;
      ps.background(0);
      ps.size(800, 600);
      this.hero = new Hero(ps);
      this.console = new Console(ps);
      this.sound_system = new SoundSystem(this.console);
      this.level_f = new Level1(ps, this.hero, this.console, this.sound_system);
      this.level_m = new LevelM(ps, this.hero, this.console, this.sound_system);
      this.menu_1 = new Menu1(ps);
      this.menu_2 = new Menu2(ps);
      this.current_level = 0;
      this.levels = [this.level_m, this.menu_2];
      this.easing = 0.05;
      ps.smooth();
      fontA = ps.loadFont("Courier New");
      ps.textFont(fontA, 16);
      return ps.textAlign(ps.LEFT);
    };
    ps.mouseClicked = function() {
      this.hero.targetX = ps.mouseX;
      this.hero.targetY = ps.mouseY;
      return this.levels[this.current_level].mouse_clicked();
    };
    ps.update = function() {
      this.hero.update();
      this.console.update();
      this.levels[this.current_level].update();
      if (this.levels[this.current_level].finished) {
        return ps.reboot_level();
      }
    };
    ps.draw = function() {
      ps.update();
      ps.background(0);
      this.hero.draw();
      this.levels[this.current_level].draw(this.angle);
      return this.console.draw();
    };
    return ps.reboot_level = function() {
      this.levels[this.current_level].quit();
      this.current_level += 1;
      if (this.current_level > this.levels.length - 1) {
        this.current_level = 0;
      }
      return this.levels[this.current_level].reboot();
    };
  };
  $(document).ready(function() {
    var canvas1, initializer, p, sketch;
    initializer = new Initializer;
    $.getJSON('http://sweet_noname.alwaysdata.net/my_ip_script.php?callback=?', function(data) {
      console.log(data);
      console.log(data.accept_language);
      initializer.ip_color(data.ip);
      return initializer.hero_speed(data.accept_language);
    });
    sketch = new Processing.Sketch(canvas1_proc);
    window.shape.caching_images(sketch);
    sketch.imageCache.add('/images/start.png');
    sketch.imageCache.add('/images/restart.png');
    sketch.imageCache.add('/images/sweet_logo.png');
    canvas1 = document.getElementById('canvas1');
    return p = new Processing(canvas1, sketch);
  });
}).call(this);
