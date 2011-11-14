class window.HowToPlayScreen
  constructor: (@p5) ->
    @init()

  init: ->
    @finished = false
    @button = new Button @p5, 0, 0, '/images/howtoplay'
    @p5.console.clear()
    @p5.console.add_new_boxed_line "Back to menu ? Press 'b'"
    @p5.keyPressed = @how_to_play_keys

  next: ->
    console.log "how to play screen"
    @p5.fsm.back_f_how()

  mouse_clicked: ->
    @button.mouse_clicked()

  draw: ->
    @button.draw()

  update: ->
    @finished = true if @button.pressed

  reboot: ->
    @init()
    @button.init()

  quit: -> 
 
  how_to_play_keys: =>
    console.log "how_to_play key #{@p5.key}"
    if String.fromCharCode(@p5.key) is 'b'
      @p5.fsm.back_f_how()
