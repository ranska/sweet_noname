class window.LevelM extends window.Level

  constructor: (@p5, @hero, @console, @sound_system) ->
    @images = []
    @browser = window.shape.browser
    @level_name = "m"
    @url_shapes = [
      "#{@browser}/#{@level_name}/1", 
      "#{@browser}/#{@level_name}/2", 
      "#{@browser}/#{@level_name}/3",
      "#{@browser}/#{@level_name}/4",
      "#{@browser}/#{@level_name}/5", 
      'common/1', 'common/12', 'exit/1'
    ]
    @load_images()
    super(@p5, @hero, @console, @sound_system)
 
  next: ->
    console.log "level_2 .next"

  next_end: ->
    @p5.console.clear()
    console.log "text_end = #{@colision.text_end}"
    if @colision.text_end == "all_explodeM"
      @all_explode()
    if @colision.text_end == "one_explode"
      @one_explode()
    if @colision.text_end == "no_one_explode"
      @no_one_explode()
    console.log "____________ next_end f"
    @p5.console.add_new_boxed_line "Next Level ? Press 'n'"
    @p5.console.add_new_boxed_line "Menu ? Press 'm'"
    @p5.console.add_new_boxed_line "Restart Level ? Press 'r'"
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
      @p5.fsm.go_level_3()
      @finished = true
    if String.fromCharCode(@p5.key) is 'm'
      @p5.console.clear()
      @console.boxed = false
      @p5.fsm.back_f_2()
      @finished = true
    if String.fromCharCode(@p5.key) is 'r'
      @p5.console.clear()
      @console.boxed = false
      @p5.fsm.loop_2()
      @finished = true

  init: ->
    super()
    @hero.init(10, 10)
    @sound_system.current_level = 2
    
    @create_strum( #3 hight
      x: 430
      y: 128
      img: @images[3]
      name: "name"
      type: 3
      translated: true
      rally_point: [[430,128],[430,-20]]
      speed: 0.75
    )
    @create_strum(
      x: 430
      y: 54
      img: @images[3]
      name: "name"
      type: 3
      translated: true
      rally_point: [[430,54],[430,-94]]
      speed: 0.75
    )
    @create_strum(
      x: 430
      y: -20
      img: @images[3]
      name: "name"
      type: 3
      translated: true
      rally_point: [[430,-20],[430,-168]]
      speed: 0.75
    )
    @create_strum( #3 low
      x: 430
      y: 430
      img: @images[3]
      name: "name"
      type: 3
      translated: true
      rally_point: [[430,430],[430,578]]
      speed: 0.75
    )
    @create_strum(
      x: 430
      y: 494
      img: @images[3]
      name: "name"
      type: 3
      translated: true
      rally_point: [[430,494],[430,642]]
      speed: 0.75
    )
    @create_strum(
      x: 430
      y: 568
      img: @images[3]
      name: "name"
      type: 3
      translated: true
      rally_point: [[430,568],[430,716]]
      speed: 0.75
    )
    @create_strum( #3 left
      x: 280
      y: 274
      img: @images[4]
      name: "name"
      type: 3
      translated: true
      rally_point: [[280,274],[132,274]]
      speed: 0.75
    )
    @create_strum( 
      x: 206
      y: 274
      img: @images[4]
      name: "name"
      type: 3
      translated: true
      rally_point: [[206,274],[58,274]]
      speed: 0.75
    )
    @create_strum( 
      x: 132
      y: 274
      img: @images[4]
      name: "name"
      type: 3
      translated: true
      rally_point: [[132,274],[-16,274]]
      speed: 0.75
    )
    @create_strum(  #3 right
      x: 590
      y: 274
      img: @images[4]
      name: "name"
      type: 3
      translated: true
      rally_point: [[590,274],[738,274]]
      speed: 0.75
    )
    @create_strum(
      x: 664
      y: 274
      img: @images[4]
      name: "name"
      type: 3
      translated: true
      rally_point: [[664,274],[812,274]]
      speed: 0.75
    )
    @create_strum(
      x: 738
      y: 274
      img: @images[4]
      name: "name"
      type: 3
      translated: true
      rally_point: [[738,274],[886,274]]
      speed: 0.75
    )

    #rotations = [X, Y, radius, rotation's speed, degres] 
    rotations = [[435, 274, 155.0, 1.5, 21], [435, 274, 145.0, 1.5, 46], [435, 274, 155.0, 1.5, 70]# 3 low and right 
      [435, 274, 155.0, 1.5, 112], [435, 274, 145.0, 1.5, 136], [435, 274, 155.0, 1.5, 160]# 3 low and left
      [435, 274, 155.0, 1.5, 202], [435, 274, 145.0, 1.5, 226], [435, 274, 155.0, 1.5, 250]# 3 hight and left 
      [435, 274, 155.0, 1.5, 292], [435, 274, 145.0, 1.5, 316], [435, 274, 155.0, 1.5, 340]]# 3 hight and right 

    @create_rotated_strums @images[0], rotations, "name", 0, 1.5 # middles

    rotations = [[435, 274, 371.0, -1, 335], [435, 274, 393.0, -1, 344], [435, 274, 420.0, -1, 352]# 3 hight and right 
      [435, 274, 405.0, -1, 9], [435, 274, 393.0, -1, 16], [435, 274, 371.0, -1, 25]# 3 low and right
      [435, 274, 420.0, -1, 172], [435, 274, 393.0, -1, 164], [435, 274, 371.0, -1, 155] # 3 low and left 
      [435, 274, 371.0, -1, 205], [435, 274, 393.0, -1, 196], [435, 274, 420.0, -1, 189]] # 3 hight and left

    @create_rotated_strums @images[1], rotations, "name", 1, -1 # edge

    rotations = [[435, 274, 300.0, -1.75, 90], [435, 274, 300.0, -1.75, 270]]
    @create_rotated_strums @images[2], rotations, "sp 8", 2, 1.75

    #shape made with 64
    rotations = [[455, 274, 208.0, 1, 33.5]
      [455, 274, 225.0, 1, 46]
      [455, 274, 228.0, 1, 57.5]
      [455, 274, 220.0, 1, 69.5]
      [455, 274, 275.0, 1, 59]
      [455, 274, 268.5, 1, 69]
      [455, 274, 222.0, 1, 82]
      [455, 274, 231.0, 1, 93]
      [455, 274, 220.0, 1, 105]
      [455, 274, 225.0, 1, 117.5]
      [455, 274, 259.0, 1, 125.5]
      [455, 274, 190.0, 1, 127.5]
      [455, 274, 231.0, 1, 135]
      [455, 274, 189.0, 1, 141.5]
      [455, 274, 195.0, 1, 155]
      [455, 274, 195.0, 1, 168.5]
      [455, 274, 177.0, 1, 182.5]
      [455, 274, 200.0, 1, 195]
      [455, 274, 225.0, 1, 184]
      [455, 274, 180.0, 1, 210]
      [455, 274, 190.0, 1, 225]
      [455, 274, 195.0, 1, 239]
      [455, 274, 210.0, 1, 252]
      [455, 274, 187.0, 1, 263.5]
      [455, 274, 198.0, 1, 277]
      [455, 274, 235.0, 1, 268]
      [455, 274, 220.0, 1, 288.5]
      [455, 274, 220.0, 1, 300.5]
      [455, 274, 225.0, 1, 313]
      [455, 274, 222.0, 1, 325]]
    @create_rotated_strums @images[5], rotations, "name", 5, 0.75

    #shape made with 128
    rotations = [[400, 300, 445, -0.25, 238]# part 1
      [400, 300, 450.0, -0.25, 252.5]
      [400, 300, 390, -0.25, 280]
      [400, 300, 395.0, -0.25, 295]
      [400, 300, 485.0, -0.25, 298]
      [400, 300, 390.0, -0.25, 312.5]
      [400, 300, 490.0, -0.25, 312.5]
      [400, 300, 420.0, -0.25, 325]
      [400, 300, 420.0, -0.25, 342.5]
      [400, 300, 400.0, -0.25, 360]
      [400, 300, 500.0, -0.25, 15]
      [400, 300, 405.0, -0.25, 17.5]

      #part 2
      [400, 300, 445, -0.25, 57]
      [400, 300, 450.0, -0.25, 72.5]
      [400, 300, 410.0, -0.25, 88]
      [400, 300, 402.5, -0.25, 106]
      [400, 300, 395.0, -0.25, 124]
      [400, 300, 490.0, -0.25, 124]
      [400, 300, 520.0, -0.25, 142.5]
      [400, 300, 420.0, -0.25, 142.5]
      [400, 300, 420.0, -0.25, 160]
      [400, 300, 400.0, -0.25, 178]
      [400, 300, 500.0, -0.25, 195]
      [400, 300, 405.0, -0.25, 197.5]]
    @create_rotated_strums @images[6], rotations, "velocy", 6, 0.25

    # home
    @create_static_strums @images[7], [[430, 274]], "exit", 0
