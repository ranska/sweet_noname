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
      this.easing = 0.05;
      ps.smooth();
      fontA = ps.loadFont("Courier New");
      ps.textFont(fontA, 16);
      ps.textAlign(ps.LEFT);
      return this.scene_engin = new SceneEngin(this);
    };
    ps.mouseClicked = function() {
      this.hero.targetX = ps.mouseX;
      this.hero.targetY = ps.mouseY;
      return this.scene_engin.current_level.mouse_clicked();
    };
    ps.keyPressed = function() {
      console.log("key " + ps.key);
      this.console.add_new_line("key - " + ps.key + " " + (String.fromCharCode(ps.key)));
      if (String.fromCharCode(ps.key) === 'a') {
        return alert("ah ha ah");
      }
    };
    ps.update = function() {
      this.hero.update();
      this.console.update();
      return this.scene_engin.update();
    };
    return ps.draw = function() {
      ps.update();
      ps.background(0);
      this.hero.draw();
      this.scene_engin.current_level.draw(this.angle);
      return this.console.draw();
    };
  };
  $(document).ready(function() {
    var canvas1, initializer, p, sketch;
    initializer = new Initializer;
    sketch = new Processing.Sketch(canvas1_proc);
    window.shape.caching_images(sketch);
    sketch.imageCache.add('/images/start.png');
    sketch.imageCache.add('/images/restart.png');
    sketch.imageCache.add('/images/sweet_logo.png');
    sketch.imageCache.add('/images/how_to_play.png');
    sketch.imageCache.add('/images/credits.png');
    canvas1 = document.getElementById('canvas1');
    return p = new Processing(canvas1, sketch);
  });
}).call(this);
