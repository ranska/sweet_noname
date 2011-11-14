class window.ConsoleLine

  constructor: (@p5, @x ,@y, @text) ->
    @init()

  init: ->

  draw: ->
    @p5.noStroke()
    @p5.fill window.color
    @p5.text @text, @x, @y

  update: ->

  reboot: ->
    @init()

