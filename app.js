PSD['iphone'].style.webkitPerspective = '1000px'

PSD['separators'].opacity = 0
PSD['separators'].x = 200 
PSD['separators'].y += 200 

PSD['menu options'].opacity = 0
PSD['menu options'].x = -100 
PSD['menu options'].y += 200 

showMenu = function() {
  PSD['menu options'].animate({
    properties: {
      opacity: 1,
      x: 20
    },
    curve: 'spring(200,30,400)',
  })

  PSD['separators'].animate({
    properties: {
      opacity: 1,
      x: 20
    },
    time: 600,
    curve: 'ease-out',
  })

  PSD['content'].animate({
    properties: {
      x: 100,
      rotationY: -30,
      scale: 0.7
    },
    origin: '100% 50%',
    curve: 'spring(200,30,400)',
  })
}

hideMenu = function() {
  PSD['menu options'].animate({
    properties: {
      opacity: 0,
      x: -100
    },
    curve: 'spring(200,30,400)',
  })

  PSD['separators'].animate({
    properties: {
      opacity: 0,
      x: 200
    },
    time: 600,
    curve: 'ease-out',
  })

  PSD['content'].animate({
    properties: {
      x: 0,
      rotationY: 0,
      scale: 1
    },
    origin: '100% 50%',
    curve: 'spring(200,30,400)',
  })
}

PSD['nav bar'].on(Events.TouchStart, function() {
  showMenu()
})

PSD['menu options'].on(Events.TouchStart, function() {
  hideMenu()
})

