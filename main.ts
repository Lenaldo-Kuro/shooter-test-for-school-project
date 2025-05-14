controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Eshoot = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . . . 1 1 1 1 1 . . . . . 
        . . . . . . . 1 1 1 1 1 . . . . 
        . . . . . . . 1 1 1 1 1 . . . . 
        . . . . . . 1 1 1 1 1 . . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, P1, 200, 0)
    Eshoot.startEffect(effects.fire)
    music.play(music.createSoundEffect(WaveShape.Square, 2428, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(5000)
})
info.onLifeZero(function () {
    sprites.destroy(P1, effects.fire, 100)
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(Eshoot, effects.disintegrate, 100)
    sprites.destroy(Comon_enemy, effects.fire, 200)
})
let mySprite: Sprite = null
let SEnemy: Sprite = null
let Comon_enemy: Sprite = null
let Eshoot: Sprite = null
let P1: Sprite = null
P1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 1 1 . . . . . . 
    . . . . . . . 1 6 9 1 . . . . . 
    . . 1 1 1 . . 1 6 9 1 . . . . . 
    . . 1 6 6 1 . 1 6 9 1 . . . . . 
    . . . 1 6 6 1 6 9 9 9 . . . . . 
    . . . . 1 6 6 9 9 9 9 1 1 1 . . 
    . . . . . 1 9 9 9 9 9 9 9 9 1 . 
    . . . . . 1 9 9 9 9 9 9 9 9 1 . 
    . . . . 1 6 6 9 9 9 9 1 1 1 . . 
    . . . 1 6 6 1 6 9 9 9 . . . . . 
    . . 1 6 6 1 . 1 6 9 1 . . . . . 
    . . 1 1 1 . . 1 6 9 1 . . . . . 
    . . . . . . . 1 6 9 1 . . . . . 
    . . . . . . . . 1 1 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(P1)
P1.setStayInScreen(true)
P1.setPosition(25, 60)
music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.UntilDone)
P1.sayText("Start!", 1500, false)
info.setLife(5)
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
    SEnemy.startEffect(effects.fire)
    pause(1500)
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
    mySprite.setVelocity(0, -200)
    mySprite.setScale(4, ScaleAnchor.Middle)
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
    SEnemy.startEffect(effects.fire)
    pause(1500)
})
forever(function () {
    Comon_enemy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 5 5 5 5 5 5 4 4 4 4 1 . . 
        . . 1 5 5 5 5 5 5 5 4 4 4 1 . . 
        . . 1 5 5 5 5 5 5 5 4 4 4 1 . . 
        . . 1 5 5 5 5 5 5 5 4 4 4 1 . . 
        . . 1 5 5 5 5 5 5 4 4 4 4 1 . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    Comon_enemy.setPosition(165, randint(15, 115))
    Comon_enemy.setVelocity(-100, 0)
    pause(1500)
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
    mySprite.setVelocity(0, 200)
    mySprite.setScale(4, ScaleAnchor.Middle)
})
