class window.Menu

  constructor: (@p5) ->
    @img_logo = @p5.loadImage '/images/sweet_logo', 'png', -> @p5.draw()
    @init()

  next: ->
    console.log "start_menu"

  init: ->
    @finished = false
    @p5.console.clear()
    @p5.sound_system.stop()

  mouse_clicked: ->

  draw: ->
    @p5.image @img_logo, 50, 100 

  update: ->

  reboot: ->
    @init()

  quit: -> 

class window.Menu1 extends window.Menu

  init: ->
    @os = "linux" 
    @os = "linux" if $.client.os == "Linux"
    @os = "macos" if $.client.os == "Mac"
    @os = "windows" if $.client.os == "Windows"
    @browser = window.my_browser

    super()
    console.log "init menu 1"
    @p5.console.add_new_boxed_line "Welcome Player this is the Sweet_Noname console"
    @p5.console.add_new_boxed_line "Your World : #{@os}"
    @p5.console.add_new_boxed_line "Your Playground : #{@browser}"
    @p5.console.add_new_boxed_line "Sound_system is On"
    @p5.console.add_new_boxed_line " "
    @p5.console.add_new_boxed_line "How to Play ? Press 'h'"
    @p5.console.add_new_boxed_line "Credits ? Press 'c'"
    @p5.console.add_new_boxed_line "Start Game ? Press 's'"
    @p5.keyPressed = @keyPressed
  
  next: ->
    console.log "menu1 .next"
    @p5.fsm.go_level_1()

  keyPressed: =>
    console.log "Menu1 key #{@p5.key}"
    if String.fromCharCode(@p5.key) is 'c'
      @p5.console.clear()
      @p5.console.boxed = false
      @p5.fsm.who_make_this()
    if String.fromCharCode(@p5.key) is 'h'
      @p5.console.clear()
      @p5.console.boxed = false
      @p5.fsm.explain_me()
    if String.fromCharCode(@p5.key) is 's'
      @p5.console.clear()
      @p5.console.boxed = false
      @p5.fsm.go_level_1()
      

class window.Menu2 extends window.Menu

  init: ->
    super()

  next: ->
    console.log "menu2 .next"
    @p5.fsm.back_f_end()

class window.Button  

  constructor: (@p5, @x, @y, url) ->
    @img = @p5.loadImage url, 'png', -> @p5.draw()
    @width = @img.width
    @height = @img.height
    @init()

  init: ->
    @pressed = false

  draw: ->
    @p5.image @img, @x, @y

  update: ->

  over_rect: ->
    @p5.mouseX >= @x and @p5.mouseX <= @x + @width and @p5.mouseY >= @y and @p5.mouseY <= @y + @height  

  mouse_clicked: ->
    @pressed = true if @over_rect()
