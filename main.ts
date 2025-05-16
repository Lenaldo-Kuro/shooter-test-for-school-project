controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(P1, 150, 150)
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(2)
    sprites.destroy(mySprite2)
    music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(5)
    sprites.destroy(mySprite3)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    controller.moveSprite(P1, 100, 100)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
    pause(5000)
})
info.onLifeZero(function () {
    sprites.destroy(P1, effects.fire, 100)
    game.gameOver(false)
    music.stopAllSounds()
})
info.onScore(200, function () {
    game.gameOver(true)
})
let Comon_enemy: Sprite = null
let mySprite: Sprite = null
let SEnemy: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let P1: Sprite = null
P1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 1 1 . . . . . . 
    . . . . . . . 1 c a 1 . . . . . 
    . . 1 1 1 . . 1 c a 1 . . . . . 
    . . 1 c c 1 . 1 c a 1 . . . . . 
    . . . 1 c c 1 c a a a . . . . . 
    . . . . 1 c c a a a a 1 1 1 . . 
    . . . . . 1 a a a a a a a a 1 . 
    . . . . . 1 a a a a a a a a 1 . 
    . . . . 1 c c a a a a 1 1 1 . . 
    . . . 1 c c 1 c a a a . . . . . 
    . . 1 c c 1 . 1 c a 1 . . . . . 
    . . 1 1 1 . . 1 c a 1 . . . . . 
    . . . . . . . 1 c a 1 . . . . . 
    . . . . . . . . 1 1 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
P1.setStayInScreen(true)
P1.setPosition(25, 60)
music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.UntilDone)
P1.sayText("Start!", 1500, false)
info.setLife(5)
controller.moveSprite(P1)
music.play(music.stringPlayable("E F E F G F G F ", 150), music.PlaybackMode.LoopingInBackground)
game.onUpdateInterval(1000, function () {
    info.changeScoreBy(1)
})
forever(function () {
    SEnemy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 . . . . 1 . . . . . 
        . . . . . 1 1 . . 1 1 . . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    SEnemy.setPosition(randint(5, 155), -10)
    SEnemy.setVelocity(0, 100)
    pause(1000)
})
forever(function () {
    pause(5000)
    P1.sayText("Watch out!", 1000, false)
    mySprite = sprites.create(img`
        . . . . . 1 5 4 4 5 1 . . . . . 
        . . . . . 1 5 4 4 5 1 . . . . . 
        . . . . . 1 5 4 4 5 1 . . . . . 
        . . . . . 1 5 4 4 5 1 . . . . . 
        . . . . . 1 5 4 4 5 1 . . . . . 
        . . . . . 1 5 4 4 5 1 . . . . . 
        . . . . . 1 5 4 4 5 1 . . . . . 
        . . . . . 1 5 4 4 5 1 . . . . . 
        . . . . . 1 5 4 4 5 1 . . . . . 
        . . . . . 1 5 4 4 5 1 . . . . . 
        . . . . . 1 5 4 4 5 1 . . . . . 
        . . . . . 1 5 4 4 5 1 . . . . . 
        . . . . . 1 5 4 4 5 1 . . . . . 
        . . . . . 1 5 4 4 5 1 . . . . . 
        . . . . . 1 5 4 4 5 1 . . . . . 
        . . . . . 1 5 4 4 5 1 . . . . . 
        `, SpriteKind.Enemy)
    mySprite.setPosition(randint(10, 150), 220)
    mySprite.setVelocity(0, -250)
    mySprite.setScale(4, ScaleAnchor.Middle)
    music.play(music.melodyPlayable(music.sonar), music.PlaybackMode.UntilDone)
})
forever(function () {
    SEnemy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . . 1 1 . . 1 1 . . . . . 
        . . . . . 1 . . . . 1 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    SEnemy.setPosition(randint(5, 155), 130)
    SEnemy.setVelocity(0, -100)
    pause(1000)
})
forever(function () {
    SEnemy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . . 1 1 . . 1 1 . . . . . 
        . . . . . 1 . . . . 1 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    SEnemy.setPosition(randint(5, 155), 130)
    SEnemy.setVelocity(0, -100)
    pause(1000)
})
forever(function () {
    sprites.destroy(mySprite3)
    mySprite3 = sprites.create(img`
        . . . . . . . . . . . . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . 
        . . . 2 . . . . . . . 2 . . . 
        . . 2 . 2 2 2 2 2 2 2 . 2 . . 
        . 2 . 2 . . . . . . . 2 . 2 . 
        . 2 . 2 . 2 2 2 2 2 . 2 . 2 . 
        . 2 . 2 . 2 . . . 2 . 2 . 2 . 
        . 2 . 2 . 2 . 2 . 2 . 2 . 2 . 
        . 2 . 2 . 2 . . . 2 . 2 . 2 . 
        . 2 . 2 . 2 2 2 2 2 . 2 . 2 . 
        . 2 . 2 . . . . . . . 2 . 2 . 
        . . 2 . 2 2 2 2 2 2 2 . 2 . . 
        . . . 2 . . . . . . . 2 . . . 
        . . . . 2 2 2 2 2 2 2 . . . . 
        . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    mySprite3.setPosition(randint(5, 155), randint(5, 115))
    pause(5000)
})
forever(function () {
    pause(5000)
    P1.sayText("Watch out!", 1000, false)
    mySprite = sprites.create(img`
        . . . . . 1 5 4 4 5 1 . . . . . 
        . . . . . 1 5 4 4 5 1 . . . . . 
        . . . . . 1 5 4 4 5 1 . . . . . 
        . . . . . 1 5 4 4 5 1 . . . . . 
        . . . . . 1 5 4 4 5 1 . . . . . 
        . . . . . 1 5 4 4 5 1 . . . . . 
        . . . . . 1 5 4 4 5 1 . . . . . 
        . . . . . 1 5 4 4 5 1 . . . . . 
        . . . . . 1 5 4 4 5 1 . . . . . 
        . . . . . 1 5 4 4 5 1 . . . . . 
        . . . . . 1 5 4 4 5 1 . . . . . 
        . . . . . 1 5 4 4 5 1 . . . . . 
        . . . . . 1 5 4 4 5 1 . . . . . 
        . . . . . 1 5 4 4 5 1 . . . . . 
        . . . . . 1 5 4 4 5 1 . . . . . 
        . . . . . 1 5 4 4 5 1 . . . . . 
        `, SpriteKind.Enemy)
    mySprite.setPosition(randint(10, 150), -100)
    mySprite.setVelocity(0, 250)
    mySprite.setScale(4, ScaleAnchor.Middle)
    music.play(music.melodyPlayable(music.sonar), music.PlaybackMode.UntilDone)
})
forever(function () {
    Comon_enemy = sprites.create(img`
        . . . . . . . . . . . . . . 
        . . 1 1 1 1 1 1 1 1 1 1 . . 
        . 1 5 5 5 5 5 5 4 4 4 4 1 . 
        . 1 5 5 5 5 5 5 5 4 4 4 1 . 
        . 1 5 5 5 5 5 5 5 4 4 4 1 . 
        . 1 5 5 5 5 5 5 5 4 4 4 1 . 
        . 1 5 5 5 5 5 5 4 4 4 4 1 . 
        . . 1 1 1 1 1 1 1 1 1 1 . . 
        . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    Comon_enemy.setPosition(165, randint(15, 115))
    Comon_enemy.setVelocity(-100, 0)
    pause(1000)
})
forever(function () {
    Comon_enemy = sprites.create(img`
        . . . . . . . . . . . . . . 
        . . 1 1 1 1 1 1 1 1 1 1 . . 
        . 1 5 5 5 5 5 5 4 4 4 4 1 . 
        . 1 5 5 5 5 5 5 5 4 4 4 1 . 
        . 1 5 5 5 5 5 5 5 4 4 4 1 . 
        . 1 5 5 5 5 5 5 5 4 4 4 1 . 
        . 1 5 5 5 5 5 5 4 4 4 4 1 . 
        . . 1 1 1 1 1 1 1 1 1 1 . . 
        . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    Comon_enemy.setPosition(165, randint(15, 115))
    Comon_enemy.setVelocity(-100, 0)
    pause(1000)
})
forever(function () {
    mySprite2 = sprites.create(img`
        . . . 7 7 . . . 
        . . . 7 7 . . . 
        . . . 7 7 . . . 
        7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 
        . . . 7 7 . . . 
        . . . 7 7 . . . 
        . . . 7 7 . . . 
        `, SpriteKind.Food)
    mySprite2.setPosition(randint(5, 155), randint(5, 115))
    pause(5000)
    sprites.destroy(mySprite2)
})
