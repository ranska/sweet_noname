class window.Console

  constructor: (@p5) ->
    @lines = []
    @lines.push new ConsoleLine @p5, 15, 430, 'Console Sweet_Name'
    @lines.push new ConsoleLine @p5, 15, 490, 'Sound_system on'
    @lines.push new ConsoleLine @p5, 15, 530, 'Hero_detected'
    @lines.push new ConsoleLine @p5, 15, 560, 'lost in my dark world...', 'normal'
    @boxed = false

  update: ->
    for line in @lines
      line.update()
    if @lines.length > 8
      @reduce_lines()

  reduce_lines: ->
    @lines.shift()
    for line in @lines
      line.y -= 20

  draw: ->
    @p5.noStroke()
    @p5.fill 0, 150 
    @p5.rect 0, 400, 800, 200
    for line in @lines
      line.draw()


  add_new_boxed_line: (text, style = 'italic') ->
    @boxed = true
    @add_line(text, style)


  add_new_line: (text, style = 'italic') ->
    unless @boxed
      @add_line(text, style)

  add_line: (text, style = 'italic') ->
    @update()
    if @lines.length != 0
      last = @lines.length - 1
      new_y = @lines[last].y + 20
    else
      new_y = 430
    @lines.push new ConsoleLine @p5, 15, new_y, text
  #
  reboot: ->
    @init()



  clear: ->
    @lines = []
