class window.LevelF extends window.Level

  constructor: (@p5, @hero, @console, @sound_system) ->
    @images = []
    @browser = window.shape.browser
    @level_name = "f"
    @url_shapes = [
      "#{@browser}/#{@level_name}/1",
      "#{@browser}/#{@level_name}/3",
      "#{@browser}/#{@level_name}/5",
      'common/5', 'common/16', 'exit/1'
    ]
    @load_images()
    super(@p5, @hero, @console, @sound_system)

  next: ->
    console.log "level_1 .next"

  next_end: ->
    @p5.console.clear()
    console.log "text_end = #{@colision.text_end}"
    if @colision.text_end == "all_explodeF"
      @all_explode()
    if @colision.text_end == "one_explode"
      @one_explode()
    if @colision.text_end == "no_one_explode"
      @no_one_explode()
    console.log "____________ next_end f"
    @p5.console.add_new_boxed_line "Next Level ? Press 'n'"
    @p5.console.add_new_boxed_line "Menu ? Press 'm'"
    @p5.console.add_new_boxed_line "Restart Level ? Press 'r'"
    @p5.console.add_new_boxed_line " "
    @p5.keyPressed = @keyPressed

  all_explode: ->
    @p5.console.add_new_boxed_line "Hero_connected"
    @p5.console.add_new_boxed_line "you're alone ?... Come home boy..."
    @p5.console.add_new_boxed_line "Add new_Layer to /Story_line"
    @p5.console.add_new_boxed_line " "

  one_explode: ->
    @p5.console.add_new_boxed_line "Hero_connected"
    @p5.console.add_new_boxed_line "Welcome home ! An eventful journey isn't it ?"
    @p5.console.add_new_boxed_line "Add new_Layer to /Story_line"
    @p5.console.add_new_boxed_line " "

  no_one_explode: ->
    @p5.console.add_new_boxed_line "Hero_connected"
    @p5.console.add_new_boxed_line "Home sweet home ! You made it ! "
    @p5.console.add_new_boxed_line "Add new_Layer to /Story_line"
    @p5.console.add_new_boxed_line " "


  keyPressed: =>
    console.log "Menu1 key #{@p5.key}"
    if String.fromCharCode(@p5.key) is 'n'
      @p5.console.clear()
      @console.boxed = false
      @p5.fsm.go_level_2()
      @finished = true
    if String.fromCharCode(@p5.key) is 'm'
      @p5.console.clear()
      @console.boxed = false
      @p5.fsm.back_f_1()
      @finished = true
    if String.fromCharCode(@p5.key) is 'r'
      @p5.console.clear()
      @console.boxed = false
      @p5.fsm.loop_1()
      @finished = true

  init: ->
    super()
    @hero.init(790, 10)
    @sound_system.current_level = 1
    #rotations = [X, Y, radius, rotation's speed, degres] 

    @create_strum( #horizontal hight
      x: 250
      y: 32
      img: @images[0]
      name: "name"
      type: 0
      translated: true
      rally_point: [[250,568],[250,-168]]
      speed: 1.25
    )
    @create_strum( 
      x: 550
      y: 32
      img: @images[0]
      name: "name"
      type: 0
      translated: true
      rally_point: [[550,568],[550,-168]]
      speed: 1.25
    )
    @create_strum( #horizontal middle
      x: 32
      y: 200
      img: @images[0]
      name: "name"
      type: 0
      translated: true
      rally_point: [[868,200],[-68,200]]
      speed: 1.25
    )
    @create_strum( 
      x: 768
      y: 200
      img: @images[0]
      name: "name"
      type: 0
      translated: true
      rally_point: [[-68,200],[868,200]]
      speed: 1.25
    )
    @create_strum( #horizontaux low
      x: 250
      y: 368
      img: @images[0]
      name: "name"
      type: 0
      translated: true
      rally_point: [[250,-168],[250,568]]
      speed: 1.25
    ) 
    @create_strum( 
      x: 550
      y: 368
      img: @images[0]
      name: "name"
      type: 0
      translated: true
      rally_point: [[550,-168],[550,568]]
      speed: 1.25
    ) 
    @create_strum( # 4 left and hight
      x: 175
      y: 32
      img: @images[1]
      name: "name"
      type: 1
      translated: true
      rally_point: [[175,306],[175,-96]]
      speed: 0.75
    ) 
    @create_strum( 
      x: 175
      y: 96
      img: @images[1]
      name: "name"
      type: 1
      translated: true
      rally_point: [[175,370],[175,-32]]
      speed: 0.75
    ) 
    @create_strum( 
      x: 175
      y: 160
      img: @images[1]
      name: "name"
      type: 1
      translated: true
      rally_point: [[175,434],[175,32]]
      speed: 0.75
    ) 
    @create_strum( 
      x: 175
      y: 224
      img: @images[1]
      name: "name"
      type: 1
      translated: true
      rally_point: [[175,498],[175,96]]
      speed: 0.75
    ) 

    @create_strum( # 4 right and low
      x: 625
      y: 178
      img: @images[1]
      name: "name"
      type: 1
      translated: true
      rally_point: [[625,-96],[625,306]]
      speed: 0.75
    ) 
    @create_strum( 
      x: 625
      y: 240
      img: @images[1]
      name: "name"
      type: 1
      translated: true
      rally_point: [[625,-32],[625,370]]
      speed: 0.75
    ) 
    @create_strum( 
      x: 625
      y: 304
      img: @images[1]
      name: "name"
      type: 1
      translated: true
      rally_point: [[625,32],[625,434]]
      speed: 0.75
    ) 
    @create_strum( 
      x: 625
      y: 368
      img: @images[1]
      name: "name"
      type: 1
      translated: true
      rally_point: [[625,96],[625,498]]
      speed: 0.75
    ) 

    rotations = [[32, 368, 100.0, -0.7, 90], [32, 368, 100.0, -0.7, 270]]
    @create_rotated_strums @images[2], rotations, "name", 2, 1.75

    rotations = [[400, 200, 127.5, 0.7, 135], [400, 200, 98.0, 0.7, 107], [400, 200, 97.5, 0.7, 71], [400, 200, 130.0, 0.7, 44] # 4 left to right
      [400, 200, 95.0, 0.7, 162], [400, 200, 90.0, 0.7, 202] # 2 low to hight
      [400, 200, 85.0, 0.7, 245], [400, 200, 120.0, 0.7, 275]] # 2 diagonal low to hight
    @create_rotated_strums @images[3], rotations, "name", 3, 0.5

    @create_static_strums @images[4], [[0, 0],[800,400]], "name"

    # home
    @create_static_strums @images[5], [[32, 368]], "exit"
