class window.SceneEngin

  constructor: (@p5) ->
    # load pictures
    @init()

  init: ->
    @finished = false

  draw: ->
    # draw title and spot

  update: ->
    # push spot
    @finished = true

  reboot: ->
    @init()

