class window.SoundSystem

  draw: ->

  update: ->
    @finished = true

  reboot: ->
    @init()

  constructor: (@console) ->
    @activated = true
    @time_outs = [ 
      [ @play_base          , 300 ]
      [ @play_music_no_col_1, 10000 ]
      [ @play_music_no_col_2, 20000 ]
      [ @play_music_no_col_3, 35000 ]
      [ @play_music_no_col_4, 70000 ]
      [ @play_music_no_col_5, 90000 ]
    ]
    @os = "linux" 
    @os = "linux" if $.client.os == "Linux"
    @os = "macos" if $.client.os == "Mac"
    @os = "windows" if $.client.os == "Windows"
    @level = "level2"
    @current_level = "2"
    if @activated
      soundManager.onready () =>
        if soundManager.supported()
	  # colision
          colision1 = soundManager.createSound
            id: 'colision1'
            url: '/sounds/collision/mp3/collision1.mp3'
            multiShot: true
          colision2 = soundManager.createSound
            id: 'colision2'
            url: '/sounds/collision/mp3/collision2.mp3'
            multiShot: true
          colision3 = soundManager.createSound
            id: 'colision3'
            url: '/sounds/collision/mp3/collision3.mp3'
            multiShot: true
	  #
          for level in [1, 2, 3]
            base1 = soundManager.createSound
              id: "base_l#{level}"
              url: "/sounds/level#{level}/base/mp3/base0.mp3"
            firstMoveSound = soundManager.createSound
              id: "firstMoveSound_l#{level}"
              url: "/sounds/level#{level}/base/mp3/base1.mp3"
	    #
            # musics without colision
            music_no_col_1 = soundManager.createSound
              id: "music_no_col_1_l#{level}"
              url: "/sounds/level#{level}/story/mp3/sto#{level}_1.mp3"
            music_no_col_2 = soundManager.createSound
              id: "music_no_col_2_l#{level}"
              url: "/sounds/level#{level}/story/mp3/sto#{level}_2.mp3"
            music_no_col_3 = soundManager.createSound
              id: "music_no_col_3_l#{level}"
              url: "/sounds/level#{level}/story/mp3/sto#{level}_3.mp3"
            music_no_col_4 = soundManager.createSound
              id: "music_no_col_4_l#{level}"
              url: "/sounds/level#{level}/story/mp3/sto#{level}_4.mp3"
            music_no_col_5 = soundManager.createSound
              id: "music_no_col_5_l#{level}"
              url: "/sounds/level#{level}/story/mp3/sto#{level}_5.mp3"
	    # 
            # musics with colision
            music_col_1 = soundManager.createSound
              id: "music_col_1_l#{level}"
              url: "/sounds/level#{level}/#{@os}/mp3/1.mp3"
            music_col_2 = soundManager.createSound
              id: "music_col_2_l#{level}"
              url: "/sounds/level#{level}/#{@os}/mp3/2.mp3"
            music_col_3 = soundManager.createSound
              id: "music_col_3_l#{level}"
              url: "/sounds/level#{level}/#{@os}/mp3/3.mp3"
            music_col_4 = soundManager.createSound
              id: "music_col_4_l#{level}"
              url: "/sounds/level#{level}/#{@os}/mp3/4.mp3"
            music_col_5 = soundManager.createSound
              id: "music_col_5_l#{level}"
              url: "/sounds/level#{level}/#{@os}/mp3/5.mp3"
            music_col_6 = soundManager.createSound
              id: "music_col_6_l#{level}"
              url: "/sounds/level#{level}/#{@os}/mp3/6.mp3"
            music_col_7 = soundManager.createSound
              id: "music_col_7_l#{level}"
              url: "/sounds/level#{level}/#{@os}/mp3/7.mp3"

            music_end_bad = soundManager.createSound
              id: "music_end_bad"
              url: "/sounds/ending/mp3/bad.mp3"

            music_end_good = soundManager.createSound
              id: "music_end_good"
              url: "/sounds/ending/mp3/good.mp3"

  init: ->

    @current_timer = 0
    @lauched_timeout = [null,null, null, null, null, null]
    @lauched_timeout[0] = setTimeout(@play_base,300)

    
  loopSound: (soundID) =>
    window.setTimeout(() => soundManager.play soundID,{onfinish: () => @loopSound(soundID)},1)

  touch_strum: ->
    random_number = Math.floor(Math.random()*3)
    soundManager.play "colision#{random_number+1}"
    if @current_timer < 4
      @change_timer()
      console.log "after change_timer : current_timer :#{@current_timer}:"

  change_timer: ->
    clearTimeout @lauched_timeout[@current_timer]
    #lanch the follower
    @run_time_out()

  run_time_out: ->
    @current_timer += 1
    @lauched_timeout[@current_timer] = setTimeout(@time_outs[@current_timer][0], @time_outs[@current_timer][1])

  play_base: =>
    @loopSound("base_l#{@current_level}")
    @run_time_out()

  play_firstMoveSound: () =>
    @loopSound("firstMoveSound_l#{@current_level}")
    console.log "firstMoveSound_l#{@current_level}"

  play_music_no_col_1: =>
    console.log "play_music_no_col_1 #{@current_level}: current_timer :#{@current_timer}:"
    @loopSound("music_no_col_1_l#{@current_level}")
    @console.add_new_line "-"
    @console.add_new_line "you chose the hard way, interesting..."
    @console.add_new_line "-"
    @console.add_new_line "add new_Layer to /Story_Line"
    @console.add_new_line " "
    @run_time_out()

  play_music_no_col_2: =>
    console.log "play_music_no_col_2 : current_timer :#{@current_timer}:"
    @loopSound("music_no_col_2_l#{@current_level}")
    @console.add_new_line "-"
    @console.add_new_line "a second one, you are on fire !"
    @console.add_new_line "-"
    @console.add_new_line "add new_Layer to /Story_Line"
    @console.add_new_line " "
    @run_time_out()

  play_music_no_col_3: =>
    console.log "play_music_no_col_3 : current_timer :#{@current_timer}:"
    @loopSound("music_no_col_3_l#{@current_level}")
    @console.add_new_line "You are a Revealer now Hero"
    @console.add_new_line "Is the Third the trinity ? No this is just"
    @console.add_new_line "the middle of something..."
    @console.add_new_line "add new_Layer to /Story_Line"
    @console.add_new_line " "
    @run_time_out()

  play_music_no_col_4: =>
    console.log "play_music_no_col_4 : current_timer :#{@current_timer}:"
    @loopSound("music_no_col_4_l#{@current_level}")
    @console.add_new_line ""
    @console.add_new_line "Step by step, you're close"
    @console.add_new_line ""
    @console.add_new_line "add new_Layer to /Story_Line"
    @console.add_new_line " "
    @run_time_out()

  play_music_no_col_5: =>
    console.log "play_music_no_col_5 : current_timer :#{@current_timer}:"
    @loopSound("music_no_col_5_l#{@current_level}")
    @console.add_new_line "Well played finally, something is released"
    @console.add_new_line "You just have to reach the end..."
    @console.add_new_line "add new_Layer to /Story_Line"
    @console.add_new_line "Area Completed"
    @console.add_new_line " "

  touch_strum_type: (strum_type) ->
    switch strum_type
      when 1
        @loopSound 'music_col_1'
        console.log "first touch for type #{strum_type} os type #{@os}"
      when 2 then @loopSound 'music_col_2'
      when 3 then @loopSound 'music_col_3'
      when 4 then @loopSound 'music_col_4'
      when 5 then @loopSound 'music_col_5'
      when 6 then @loopSound 'music_col_6'
      when 7 then @loopSound 'music_col_7'

  play_music_end_bad: ->
    soundManager.play "music_end_bad"

  play_music_end_good: ->
    soundManager.play "music_end_good"

  stop: ->
    soundManager.stopAll()
    for sound_timeout in @time_outs
      clearTimeout sound_timeout

  reboot: ->
    @stop()
    @init()
