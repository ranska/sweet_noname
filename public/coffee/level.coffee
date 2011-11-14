class window.Level

  constructor: (@p5, @hero, @console, @sound_system) ->
    @strums = []
    window.strums_type = []
    window.strums_touched = []
    @angle = 0
    @init()
    currentTime = new Date()
    hours = currentTime.getHours()
    @this_is_night = false
    if hours < 9 or hours >= 20
      @this_is_night = true
    @colision = new Colision @p5, @hero, @strums, @console
    @slow = @top_slow = 3
    @diameter = 64



  init: ->
    @finished = false
    @strums = []
    window.strums_type = []
    window.strums_touched = []
    @first_move = true
    @state_timer = 0
    @life = 80
    @state = "draw_begin"
    @anime = 0

  load_images:  ->
    for url in @url_shapes
      @images.push(@p5.loadImage "/images/famillies/#{url}", "png", => @p5.draw())


  mouse_clicked: () ->
    if @first_move
      @first_move = false
      @sound_system.play_firstMoveSound()
      @console.add_new_line "Hero_engaged"
      @console.add_new_line "what will you do?"
      @console.add_new_line "Add new_Layer to /Story_Line"
      @console.add_new_line " "

  draw: ->
    if @state == "draw_begin"
      @draw_begin()
    if @state == "draw_middle"
      @draw_middle()
    if @state == "draw_end"
      @draw_end()

  draw_begin: () ->
    @p5.stroke(@p5.color window.color)
    @p5.noFill()
    @p5.ellipse @hero.x, @hero.y, @diameter * @life, @diameter * @life
    if @life == 70
      @init_message()

  draw_middle: ->
    for strum in @strums
      strum.draw @angle
    @colision.draw()

  draw_end: ->
    @animation_end= [[28, 17],[25, 8],[18, 4],[10, 9],[4, 15],[5, 24],[9, 31],[16, 36],[25, 37],
      [33, 32],[40, 26],[42, 17],[40, 8],[36, -1],[30, -7],[22, -11],[14, -10],[6, -6]]
    for strum in @strums
      strum.draw @angle
    @p5.stroke(@p5.color window.color)
    @p5.fill(0,0,0)
  
    if @life <= 15
      @p5.ellipse @hero.x + 28, @hero.y + 17, 16, 16
    if @life <= 20
      @p5.ellipse @hero.x + 25, @hero.y + 8, 16, 16
    if @life <= 25
      @p5.ellipse @hero.x + 18, @hero.y + 4, 16, 16
    if @life <= 30
      @p5.ellipse @hero.x + 10, @hero.y + 9, 16, 16
    if @life <= 35
      @p5.ellipse @hero.x + 4, @hero.y + 15, 16, 16
    if @life <= 40
      @p5.ellipse @hero.x + 5, @hero.y + 24, 16, 16
    if @life <= 45
      @p5.ellipse @hero.x + 9, @hero.y + 31, 16, 16
    if @life <= 50
      @p5.ellipse @hero.x + 16, @hero.y + 36, 16, 16
    if @life <= 55
      @p5.ellipse @hero.x + 25, @hero.y + 37, 16, 16
    if @life <= 60
      @p5.ellipse @hero.x + 33, @hero.y + 32, 16, 16
    if @life <= 65
      @p5.ellipse @hero.x + 40, @hero.y + 26, 16, 16
    if @life <= 70
      @p5.ellipse @hero.x + 42, @hero.y + 17, 16, 16
    if @life <= 75
      @p5.ellipse @hero.x + 40, @hero.y + 8, 16, 16
    if @life <= 80
      @p5.ellipse @hero.x + 36, @hero.y - 1, 16, 16
    if @life <= 85
      @p5.ellipse @hero.x + 30, @hero.y - 7, 16, 16
    if @life <= 90
      @p5.ellipse @hero.x + 22, @hero.y - 11, 16, 16
    if @life <= 95
      @p5.ellipse @hero.x + 14, @hero.y - 10, 16, 16
    if @life <= 100
      @p5.ellipse @hero.x + 6, @hero.y - 6, 16, 16
    @p5.ellipse @hero.x, @hero.y, 16, 16


  update: ->
    @state_timer += 1 if @state_timer <= 80
    @state = "draw_middle" if @state_timer == 80
    if @state == "draw_begin"
      @update_begin()
    if @state == "draw_middle"
      @update_middle()
    if @state == "draw_end"
      @update_end()

  update_begin: () ->
    @life -= 1 if @life >= 0

  update_middle: () ->
    @angle += 1
    @angle = 0 if @angle == 360
    @colision.update()
    @slow -= 1
    if @slow == 0
      for strum in @strums
        strum.update()
      @slow = @top_slow
    if @colision.end_level
      @state = "draw_end"
      @life = 100
      @next_end()

  update_end: () ->
    @life -= 1 if @life >= 0
    @anime += 1 


  reboot: ->
    @init()
    @sound_system.reboot()
    @colision.reboot()
    @colision.strums = @strums

  quit: ->
    @sound_system.stop()

  #
  create_rotated_strums: (image, rotations, name, type = null, angle_speed = 1 ) ->
    for rotation in rotations
      unless @this_is_night
        x = rotation[0]
      else
        x = 800 - rotation[0]
      @strums.push( new Strum @p5,
        x: x
        y: rotation[1]
        img: image
        center_x: x
        center_y: rotation[1]
        radius: rotation[2]
        current_angle: rotation[4]
        rotated: true
        name: name
        type: type
        angle_speed: angle_speed
      )

  create_static_strums: (image, positions, name, type = null, translated = false, speed = 1) ->
    for position in positions
      unless @this_is_night
        x = position[0]
      else
        x = 800 - position[0]
      @strums.push( new Strum @p5,
        x: x
        y: position[1]
        img: image
        rotated: false
        name: name
        type: type
        translated: translated
        speed: speed
      )

  create_strum: (options) ->
    unless @this_is_night
      x = options.x
      rally_point = options.rally_point
    else
      x = 800 - options.x
      rally_point = []
      for point in options.rally_point
        night_point = [800 - point[0],point[1]]
        rally_point.push night_point

    @strums.push( new Strum @p5,
      x: x
      y: options.y
      img: options.img
      rotated: options.rotated
      name: options.name
      type: options.type
      translated: options.translated
      center_x: x
      center_y: options.y
      radius: options.radius
      current_angle: options.current_angle
      rally_point: rally_point
      angle_speed: options.angle_speed
      speed: options.speed
    )

  init_message: ->
    @console.add_new_line " "
    @console.add_new_line " "
    @console.add_new_line " "
    @console.add_new_line " "
    @console.add_new_line " "
    @console.add_new_line "Hero_detected"
    @console.add_new_line "lost in my dark world..."
    @console.add_new_line " "
