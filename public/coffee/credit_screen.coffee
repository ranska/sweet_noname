class window.CreditScreen
  constructor: (@p5) ->
    @init()

  init: ->
    @finished = false
    @button = new Button @p5, 0, 0, '/images/ecran_credit'
    @p5.console.clear()
    @p5.console.add_new_boxed_line "Back to menu ? Press 'b'"
    @p5.keyPressed = @credits_key

  next: ->
    console.log "credit screen"
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

  credits_key: =>
    console.log "credit key #{@p5.key}"
    if String.fromCharCode(@p5.key) is 'b'
      @p5.fsm.back_f_who()
