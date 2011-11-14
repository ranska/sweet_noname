canvas1_proc = (ps) ->

  ps.setup = () ->
    ps.background(0)
    ps.size 800, 600
    @hero = new Hero ps
    @console = new Console ps
    @sound_system = new SoundSystem @console # false, "linux"

    @easing = 0.05
    ps.smooth()
    fontA = ps.loadFont "Courier New"
    ps.textFont fontA, 16
    ps.textAlign ps.LEFT
    @scene_engin = new SceneEngin this

  ps.mouseClicked = () ->
    @hero.targetX = ps.mouseX  
    @hero.targetY = ps.mouseY
    @scene_engin.current_level.mouse_clicked()

  ps.keyPressed = () ->
    console.log "key #{ps.key}"
    @console.add_new_line "key - #{ps.key} #{ String.fromCharCode ps.key }"
    if String.fromCharCode(ps.key) is 'a'
      alert "ah ha ah"

  ps.update = () ->
    @hero.update()
    @console.update()
    @scene_engin.update()

  ps.draw = () ->
    ps.update()
    ps.background 0
    @hero.draw()
    @scene_engin.current_level.draw(@angle)
    @console.draw()


$(document).ready () ->
  initializer = new Initializer 

  sketch = new Processing.Sketch canvas1_proc
  window.shape.caching_images sketch
  sketch.imageCache.add '/images/start.png'
  sketch.imageCache.add '/images/restart.png'
  sketch.imageCache.add '/images/sweet_logo.png'
  sketch.imageCache.add '/images/how_to_play.png'
  sketch.imageCache.add '/images/credits.png'
  canvas1 = document.getElementById 'canvas1'
  p = new Processing canvas1, sketch
