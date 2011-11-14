class window.Shape

  constructor: (@browser) ->
    @levels = [
      [[1..3]] 
    ]
    @level_name= [
      "m" 
    ]
  
  caching_images: (sketch) ->
    for shapes, l in @levels
      for images, s in shapes
        for image in images
          sketch.imageCache.add "/images/famillies/#{@browser}/#{@level_name[l]}/#{image}.png"
    # load commons
    # cahing exit
    more = ['common/1', 'common/12', 'exit/1']
    for url in more
      sketch.imageCache.add "/images/famillies/#{url}.png"
