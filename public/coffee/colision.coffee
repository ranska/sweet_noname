class window.Colision

  constructor: (@ps, @hero, @strums, @console) ->
    @init()

  init: ->
    @strum_hit = 0
    @end_level = false
    @explosions = []
    @touched_strum_types = [null,null,null,null,null,null,null,null,null]
    @text_end = "null"
    @time_since_last_col = 0
    @life_timer = 0

  update: () ->
    @life_timer += 1
    @incrase_timer() if @life_timer == 60
    @life_timer = 0 if @life_timer == 60
    i = 0
    touched = null
    for strum in @strums
      # the strum can be fix
      strum_coords = strum.get_coords()
      strum_x = strum_coords[0]
      strum_y = strum_coords[1]
      strum_x -= @hero.size * 3
      strum_y -= @hero.size * 3
      x_square = (@hero.x + @hero.size - (strum_x + strum.size)) * (@hero.x + @hero.size - (strum_x + strum.size))
      y_square = (@hero.y + @hero.size - (strum_y + strum.size)) * (@hero.y + @hero.size - (strum_y + strum.size))
      distance = (@hero.size + strum.size) * (@hero.size + strum.size)
      if (y_square + x_square) < distance
        touched = i
        @strum_hit += 1
        @ps.sound_system.touch_strum()
        @colision_message()
        @explosions.push new Explosion @ps, strum_x + strum.size/2, strum_y + strum.size/2
        @check_first_colision_type strum
        @time_since_last_col = 0
        if strum.name is "exit"
          console.log "@strum_hit à la fin = #{@strum_hit}"
          @end_level = true
          if @strum_hit == 1
            @text_end = "no_one_explode"
            @ps.sound_system.stop()
            @ps.sound_system.play_music_end_good()
          if @strum_hit >= 2
            @text_end = "one_explode"
            @ps.sound_system.stop()
            @ps.sound_system.play_music_end_bad()
          if @strum_hit == 27
            @text_end = "all_explodeF"
          if @strum_hit == 94
            @text_end = "all_explodeM"
          if @strum_hit == 79
            @text_end = "all_explodeL"
        else
          @hero.choc_with new @ps.PVector(strum.x, strum.y)
      i += 1
    if touched != null
      @strums.splice(touched,1)
 
    i = 0
    end_explode = null
    for explosion in @explosions
      explosion.update()
      if explosion.finished
        end_explode = i
      i += 1
    if end_explode != null
      @explosions.splice(end_explode,1)

  timer_colision: =>
    @ps.noStroke()
    @ps.fill window.color
    @ps.text "no colision since : #{@time_since_last_col} sec", 530, 590
  
  incrase_timer: =>
    @time_since_last_col += 1

  draw: ->
    for explosion in @explosions
      explosion.draw()
    @timer_colision()

  reboot: ->
    @init()


  check_first_colision_type: (strum) -> 
    if @touched_strum_types[strum.type] == null 
      @touched_strum_types[strum.type] = 1
      @ps.sound_system.touch_strum_type strum.type

  colision_message: ->
    @console.add_new_line "Contact no #{@strum_hit} not allowed"
    @console.add_new_line "no, no, no..."
    @console.add_new_line "Erasing Unknow_object..."
    @console.add_new_line "Add new_Layer to /Story_line"
    @console.add_new_line " "
