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
mp.onScore(50, function (player2) {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(P1, effects.fire, 100)
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(Eshoot, effects.disintegrate, 100)
    sprites.destroy(Comon_enemy, effects.fire, 200)
})
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
