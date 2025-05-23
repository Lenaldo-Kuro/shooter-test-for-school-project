namespace SpriteKind {
    export const Penemy = SpriteKind.create()
    export const Pshoot = SpriteKind.create()
    export const PointEnemy = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.PointEnemy, function (sprite, otherSprite) {
    sprites.destroy(mySprite4, effects.fire, 200)
    info.changeScoreBy(3)
    sprites.destroy(Shoot, effects.disintegrate, 200)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(P1, 150, 150)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Shoot = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . . . 1 f f f 1 . . . . . 
        . . . . . . . 1 f f f 1 . . . . 
        . . . . . . . 1 f f f 1 . . . . 
        . . . . . . 1 f f f 1 . . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, P1, 50, 50)
    Shoot.setVelocity(200, 0)
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(2)
    sprites.destroy(mySprite2)
    music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Pshoot, function (sprite, otherSprite) {
    info.changeScoreBy(5)
    sprites.destroy(mySprite3)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
    pause(5000)
})
info.onLifeZero(function () {
    sprites.destroy(P1, effects.fire, 100)
    music.stopAllSounds()
    game.showLongText("You were captured! Try again!", DialogLayout.Bottom)
    game.gameOver(false)
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    controller.moveSprite(P1, 100, 100)
})
info.onScore(200, function () {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Penemy, function (sprite, otherSprite) {
    sprites.destroy(Comon_enemy, effects.fire, 200)
    info.changeScoreBy(1)
    sprites.destroy(Shoot, effects.disintegrate, 200)
})
let mySprite: Sprite = null
let SEnemy: Sprite = null
let Comon_enemy: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let Shoot: Sprite = null
let P1: Sprite = null
let mySprite4: Sprite = null
mySprite4 = sprites.create(img`
    ...1111....111...............................
    .11aaa1...1aaa1....111111....11111111.1111111
    1aa111a1..1a1aa1..1aaaaaa1..1aaaaaaa1.1aaaaa1
    1a1...1a1.1a111a1.1a1111a1..1a111111..1a11111
    1aa111.1..1a111a1.1a1..1a1..1a1.......1a11111
    .11aaa111.1aaaa1..1a1111a1..1a1.......1aaa...
    .1.111aa1.1a111...1aaaaaa1..1a1.......1a1....
    1a11111a1.1a1.....1a1111a1..1a1.......1a1...1
    .1aaaaa1..1a1.....1a1..1a1..1a111111..1a11111
    ..11111...1a1......1....1...1aaaaaaa111aaaaa1
    ......111..1................111111111..111111
    ......1a1.......11.11111111.1aaaaa1..........
    ......1a1.....11a1.1aaaaaa1.1a111a1..........
    ......1a1.111.1a11.1a1111a1.1a111a1..........
    ......1a111a111a1..1a1..1a1.1aaaaa1..........
    ......11a1aa11a11..1a1111a1.1aa111...........
    .......1a1a1aa11...1aaaaaa1.1a1aa11..........
    .......1aa11aa11...1a1111a1.1a111a1..........
    .......11a111a1....1a1..1a1.111.111..........
    ........111.111....111..111..................
    .............................................
    `, SpriteKind.Player)
mySprite4.setPosition(80, 30)
mySprite4.setScale(2, ScaleAnchor.Middle)
game.showLongText("Wellcome to space war! Press A(Z or Enter) to start!", DialogLayout.Bottom)
sprites.destroy(mySprite4)
P1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 1 1 . . . . . . 
    . . . . . . . 1 e 2 1 . . . . . 
    . . 1 1 1 . . 1 e 2 1 . . . . . 
    . . 1 e e 1 . 1 e 2 1 . . . . . 
    . . . 1 e e 1 e 2 2 2 . . . . . 
    . . . . 1 e e 2 2 2 2 1 1 1 . . 
    . . . . . 1 2 2 2 2 2 2 2 2 1 . 
    . . . . . 1 2 2 2 2 2 2 2 2 1 . 
    . . . . 1 e e 2 2 2 2 1 1 1 . . 
    . . . 1 e e 1 e 2 2 2 . . . . . 
    . . 1 e e 1 . 1 e 2 1 . . . . . 
    . . 1 1 1 . . 1 e 2 1 . . . . . 
    . . . . . . . 1 e 2 1 . . . . . 
    . . . . . . . . 1 1 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
P1.setStayInScreen(true)
P1.setPosition(25, 60)
music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.UntilDone)
game.showLongText("You are this little red ship, move it with the arrow keys or WASD", DialogLayout.Bottom)
game.showLongText("Press B(Space or X) to run", DialogLayout.Bottom)
game.showLongText("Your goal is to reach 200 points", DialogLayout.Bottom)
game.showLongText("You earn points every second, or by collecting the red target (5 points)", DialogLayout.Bottom)
game.showLongText("Avoid touching enemies (purple and white elements), they cause damage!", DialogLayout.Bottom)
game.showLongText("By eliminating purple enemies, you earn an extra point", DialogLayout.Bottom)
game.showLongText("destroy the blue ships and earn 3 points, they do not cause damage", DialogLayout.Bottom)
game.showLongText("Collect the box of supplements to get healing (2 HP)", DialogLayout.Bottom)
game.showLongText("But be careful, yellow lasers appear over time, stay alert!!", DialogLayout.Bottom)
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
        . 1 5 4 4 5 1 . 
        . 1 5 4 4 5 1 . 
        . 1 5 4 4 5 1 . 
        . 1 5 4 4 5 1 . 
        . 1 5 4 4 5 1 . 
        . 1 5 4 4 5 1 . 
        . 1 5 4 4 5 1 . 
        . 1 5 4 4 5 1 . 
        . 1 5 4 4 5 1 . 
        . 1 5 4 4 5 1 . 
        . 1 5 4 4 5 1 . 
        . 1 5 4 4 5 1 . 
        . 1 5 4 4 5 1 . 
        . 1 5 4 4 5 1 . 
        . 1 5 4 4 5 1 . 
        . 1 5 4 4 5 1 . 
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
    pause(2000)
    mySprite4 = sprites.create(img`
        . . 1 1 1 1 . . 
        . 1 6 6 6 6 1 . 
        . 1 9 9 6 6 1 . 
        . 1 9 9 6 6 1 . 
        . 1 9 9 6 6 1 . 
        . 1 9 9 6 6 1 . 
        . 1 6 6 6 6 1 . 
        . . 1 1 1 1 . . 
        `, SpriteKind.PointEnemy)
    mySprite4.setPosition(randint(120, 150), 130)
    mySprite4.setScale(1.5, ScaleAnchor.Middle)
    mySprite4.setVelocity(0, -100)
})
forever(function () {
    pause(5000)
    P1.sayText("Watch out!", 1000, false)
    mySprite = sprites.create(img`
        . 1 5 4 4 5 1 . 
        . 1 5 4 4 5 1 . 
        . 1 5 4 4 5 1 . 
        . 1 5 4 4 5 1 . 
        . 1 5 4 4 5 1 . 
        . 1 5 4 4 5 1 . 
        . 1 5 4 4 5 1 . 
        . 1 5 4 4 5 1 . 
        . 1 5 4 4 5 1 . 
        . 1 5 4 4 5 1 . 
        . 1 5 4 4 5 1 . 
        . 1 5 4 4 5 1 . 
        . 1 5 4 4 5 1 . 
        . 1 5 4 4 5 1 . 
        . 1 5 4 4 5 1 . 
        . 1 5 4 4 5 1 . 
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
        . 1 b b b b b b c c c c 1 . 
        . 1 b b b b b b b c c c 1 . 
        . 1 b b b b b b b c c c 1 . 
        . 1 b b b b b b b c c c 1 . 
        . 1 b b b b b b c c c c 1 . 
        . . 1 1 1 1 1 1 1 1 1 1 . . 
        . . . . . . . . . . . . . . 
        `, SpriteKind.Penemy)
    Comon_enemy.setPosition(165, randint(15, 115))
    Comon_enemy.setVelocity(-100, 0)
    pause(1500)
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
        `, SpriteKind.Pshoot)
    mySprite3.setPosition(randint(5, 155), randint(5, 115))
    pause(5000)
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
