namespace SpriteKind {
    export const Tool = SpriteKind.create()
    export const Hand = SpriteKind.create()
    export const HeldTool = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
. . . . . . . . . . . . . . . . 
. e e . . . . b b b . . e . . . 
. b e e e e e e e e e e e e e . 
. b e e e e e e e e e e e e e . 
. b e e e e e e e e e e e e e . 
. e e e e e e e e e e e e e . . 
. e e e e e e e e e e e e e . . 
. . b e e e e e e e e e e e e . 
e . b e e e e e e e e e e e b . 
. . b e e e e e e e e e e e b . 
. . e e e e e e e e e e e e b . 
. e e e e e e e e e e e e e b . 
. b e e e e e e e e e e e e b . 
. e e e e e e e e b b e e e e . 
. b e . . . e e . . . . . e e . 
. . . . e . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
. . . . . . . . . . . . . . . . 
. e e . . . . b b b . . e . . . 
. b e e e e e e e e c c e e e . 
. b e e c e e c c e c e c c e . 
. b e e c e e c c c c c c e e . 
. e e e c c c c c c c c c e . . 
. e e e e c c c 8 7 7 c c e . . 
. . b e e c c c 7 8 7 c c e e . 
e . b e e c c c c 8 c c c e b . 
. . b e e c 8 c c c c c c e b . 
. . e e e c c c c c c c c e b . 
. e e e c c e e c e c c c e b . 
. b e e e e e e e e e e e e b . 
. e e e e e e e e b b e e e e . 
. b e . . . e e . . . . . e e . 
. . . . e . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
. . . . . . . . . . . . . . . . 
. e e . . . . b b b . . e . . . 
. b e e e e e e e e e e e e e . 
. b e e e e e e e e e e e e e . 
. b e e e e e e e e e e e e e . 
. e e e e d e e b e e d e e . . 
. e e e e e e e e 7 e e e e . . 
. . b e e e e 7 7 e e e e e e . 
e . b e e e e e 7 e e e e e b . 
. . b e e b e c c e e e e e b . 
. . e e e e e e e e e d e e b . 
. e e e d e e e e e e e e e b . 
. b e e e e e e e e e e e e b . 
. e e e e e e e e b b e e e e . 
. b e . . . e e . . . . . e e . 
. . . . e . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile4 = img`
. . . . . . . . . . . . . . . . 
. e e . . . . b b b . . e . . . 
. b e e e e e e e e e e e e e . 
. b e e e e e e e e e e e e e . 
. b e e e e e e e e e e e e e . 
. e e e e d 7 e b 7 7 d e e . . 
. e e e e e e 7 7 7 e e e e . . 
. . b e e e e 7 7 7 e e e e e . 
e . b e e e e e 7 e e e e e b . 
. . b e e b e c c e e e e e b . 
. . e e e e e e e e e d e e b . 
. e e e d e e e e e e e e e b . 
. b e e e e e e e e e e e e b . 
. e e e e e e e e b b e e e e . 
. b e . . . e e . . . . . e e . 
. . . . e . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile5 = img`
. . . . . . . . . . . . . . . . 
. e e . . . . b b b . . e . . . 
. b e e e e e e e e e e e e e . 
. b e e e c c c c c c c e e e . 
. b e e c c c e c c c c c e e . 
. e e e e d 7 c b 7 7 d c e . . 
. e e e e c 8 7 8 7 e e c c . . 
. . b e e c c 7 7 7 c c c c e . 
e . b e e e c 8 7 e c e c e b . 
. . b e c b c c c c c c e e b . 
. . e e c c c c c c e c e e b . 
. e e e d c c c c c c c e e b . 
. b e e e e c c e e e e e e b . 
. e e e e e e e e b b e e e e . 
. b e . . . e e . . . . . e e . 
. . . . e . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile6 = img`
. . . . . . . . . . . . . . . . 
. e e . . . . b b b . . e . . . 
. b e e e e e e e e e e e e e . 
. b e e e e e e e e e e e e e . 
. b e e e 7 e e 7 7 7 7 e e e . 
. e e e e 7 7 7 7 7 7 d e e . . 
. e e e e e 6 7 7 7 e e e e . . 
. . b e e e 7 7 7 6 e e e e e . 
e . b e e e e 6 7 7 e e e e b . 
. . b e e b e c 7 6 e e e e b . 
. . e e e e e e 6 e e d e e b . 
. e e e d e e e e e e e e e b . 
. b e e e e e e e e e e e e b . 
. e e e e e e e e b b e e e e . 
. b e . . . e e . . . . . e e . 
. . . . e . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile7 = img`
. . . . . . . . . . . . . . . . 
. e e . . . . b b b . . e . . . 
. b e e e e e e e e e e e e e . 
. b e e c c c c c c c c e e e . 
. b e e c 7 e c 7 7 7 7 e e e . 
. e e e c 7 7 7 7 7 7 d e e . . 
. e e e c c 6 7 7 7 8 c c e . . 
. . b e c c 7 7 7 6 8 c e e e . 
e . b e c c 8 6 7 7 8 c e e b . 
. . b e c b c c 7 6 c c e e b . 
. . e e c c c c c c c d e e b . 
. e e e d c c c c c c c e e b . 
. b e e e c c c e e e c e e b . 
. e e e e e e e e b b e e e e . 
. b e . . . e e . . . . . e e . 
. . . . e . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile8 = img`
. . . . . . . . . . . . . . . . 
. e e . . . . b b b . . e . . . 
. b e e e e e e e e e e e e e . 
. b e e e e 7 7 7 7 7 7 e e e . 
. b e e e 7 6 6 6 6 6 7 e e e . 
. e e e 6 6 7 7 7 7 6 6 7 e . . 
. e e 7 7 7 6 6 6 6 7 6 7 e . . 
. . b 6 7 7 6 7 7 6 7 6 7 e e . 
e . b 6 7 6 7 7 6 6 7 6 7 e b . 
. . b 6 7 6 7 6 6 7 6 6 7 e b . 
. . e 7 7 6 6 7 7 7 6 7 7 e b . 
. e e e 7 7 6 6 6 6 6 7 e e b . 
. b e e e e 7 7 7 7 7 7 e e b . 
. e e e e e e 7 7 7 7 7 e e e . 
. b e . . . e e . . . . . e e . 
. . . . e . . . . . . . . . . . 
`
}
/**
 * Stages for growing:
 * 
 *   Tilling
 * 
 *   Planting seeds
 * 
 *   Watering (on repeat)
 * 
 *   Waiting (on repeat)
 * 
 *   Harvest
 * 
 * Left: 4,8
 * 
 * Right: 13,6
 */
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    currentTool = sprites.readDataSprite(Gregs_Left_Hand, "tool")
    if (currentTool) {
        useTool(currentTool)
    }
})
sprites.onOverlap(SpriteKind.Tool, SpriteKind.Hand, function (sprite, otherSprite) {
    currentTool = sprites.readDataSprite(otherSprite, "tool")
    if (currentTool && currentTool != sprite) {
        currentTool.follow(null, 0)
        currentTool.x = sprites.readDataNumber(currentTool, "x")
        currentTool.y = sprites.readDataNumber(currentTool, "y")
        currentTool.vx = 0
        currentTool.vy = 0
        currentTool.setKind(SpriteKind.Tool)
    }
    sprite.follow(otherSprite, 100)
    sprites.setDataSprite(otherSprite, "tool", sprite)
    sprite.setKind(SpriteKind.HeldTool)
})
function useTool (tool: Sprite) {
    if (tool == watering_can) {
        if (Greg.tileKindAt(TileDirection.Center, myTiles.tile3)) {
            tiles.setTileAt(tilemap.locationOfSprite(Greg), myTiles.tile2)
        } else if (Greg.tileKindAt(TileDirection.Center, myTiles.tile4)) {
            tiles.setTileAt(tilemap.locationOfSprite(Greg), myTiles.tile5)
        } else if (Greg.tileKindAt(TileDirection.Center, myTiles.tile6)) {
            tiles.setTileAt(tilemap.locationOfSprite(Greg), myTiles.tile7)
        }
    } else if (tool == hoe) {
        if (Greg.tileKindAt(TileDirection.Center, myTiles.tile0)) {
            tiles.setTileAt(tilemap.locationOfSprite(Greg), myTiles.tile1)
        }
    } else if (tool == seed_bag) {
        if (Greg.tileKindAt(TileDirection.Center, myTiles.tile1)) {
            tiles.setTileAt(tilemap.locationOfSprite(Greg), myTiles.tile3)
        }
    } else if (tool == harvester) {
        if (Greg.tileKindAt(TileDirection.Center, myTiles.tile8)) {
            tiles.setTileAt(tilemap.locationOfSprite(Greg), myTiles.tile1)
            info.changeScoreBy(1000)
        }
    } else {
    	
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    currentTool = sprites.readDataSprite(Gregs_Right_Hand, "tool")
    if (currentTool) {
        useTool(currentTool)
    }
})
info.onCountdownEnd(function () {
    timer.background(function () {
        controller.moveSprite(Greg, 0, 0)
        color.startFade(color.originalPalette, color.Black, 2000)
        color.pauseUntilFadeDone()
        Greg.setImage(img`
. . . . . . . . . . . . . . . . 
. f f f . . . . . . . . . . . . 
. . . f . . . . . . . . . . . . 
. . f . . . . . . . . . . . . . 
. f . . . . f f f . . . . . . . 
. f f f . . . . f . . . . . . . 
. . . . . . . f . . . . . . . . 
. . . . . . f . . . . . . . . . 
. . . . . . f f f . . . . . . . 
. 1 . . . . 1 1 1 1 1 1 1 1 1 . 
. 1 . . . . 1 1 1 1 f 1 1 3 1 1 
. 1 . . . . 1 1 1 1 1 1 1 1 3 1 
. 1 1 1 1 1 1 1 1 1 1 1 1 3 1 . 
. . . . . . . . . . . . . . 3 1 
. . . . . . . . . . . . . . . 1 
. . . . . . . . . . . . . . . . 
`)
        tilemap.replaceAllTiles(myTiles.tile2, myTiles.tile4)
        tilemap.replaceAllTiles(myTiles.tile5, myTiles.tile6)
        tilemap.replaceAllTiles(myTiles.tile7, myTiles.tile8)
        color.startFade(color.Black, color.originalPalette, 2000)
        color.pauseUntilFadeDone()
        controller.moveSprite(Greg)
        Greg.setImage(img`
. . . . . . . 1 1 . . 1 1 . . . 
. . . . . . 1 1 3 . 1 1 3 . . . 
. . . . . . 1 3 . 1 1 3 . . . . 
. . . . . . 1 . . 1 . . . . . . 
. . . . . . 1 1 1 1 1 . . . . . 
. . . . . . 1 f 1 f 1 . . . . . 
. . . . . . 1 1 1 1 1 . . 1 . . 
. . . . 1 1 1 1 1 1 1 1 1 1 . . 
. . . . 1 . 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 . . . . . 
. . . . . . . 1 . . 1 . . . . . 
. . . . . . . 1 . . 1 . . . . . 
. . . . . . . 1 . . 1 . . . . . 
. . . . . . 1 1 . 1 1 . . . . . 
. . . . . . . . . . . . . . . . 
`)
        info.startCountdown(10)
    })
})
let currentTool: Sprite = null
let seed_bag: Sprite = null
let harvester: Sprite = null
let hoe: Sprite = null
let watering_can: Sprite = null
let Gregs_Right_Hand: Sprite = null
let Gregs_Left_Hand: Sprite = null
let Greg: Sprite = null
scene.setBackgroundColor(13)
tiles.setTilemap(tiles.createTilemap(
            hex`1000100000000000000000000000000000000000000000000000000000000000000000000000010100000000000000000000000000000101000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`,
            img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8],
            TileScale.Sixteen
        ))
Greg = sprites.create(img`
. . . . . . . 1 1 . . 1 1 . . . 
. . . . . . 1 1 3 . 1 1 3 . . . 
. . . . . . 1 3 . 1 1 3 . . . . 
. . . . . . 1 . . 1 . . . . . . 
. . . . . . 1 1 1 1 1 . . . . . 
. . . . . . 1 f 1 f 1 . . . . . 
. . . . . . 1 1 1 1 1 . . 1 . . 
. . . . 1 1 1 1 1 1 1 1 1 1 . . 
. . . . 1 . 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 . . . . . 
. . . . . . . 1 . . 1 . . . . . 
. . . . . . . 1 . . 1 . . . . . 
. . . . . . . 1 . . 1 . . . . . 
. . . . . . 1 1 . 1 1 . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
Gregs_Left_Hand = sprites.create(img`
3 3 
3 3 
`, SpriteKind.Hand)
Gregs_Right_Hand = sprites.create(img`
3 3 
3 3 
`, SpriteKind.Hand)
Gregs_Left_Hand.setFlag(SpriteFlag.Invisible, true)
Gregs_Right_Hand.setFlag(SpriteFlag.Invisible, true)
watering_can = sprites.create(img`
. . . 6 . 
. . 6 9 6 
. 6 6 6 6 
6 . 6 6 6 
. . 6 6 6 
`, SpriteKind.Tool)
watering_can.setPosition(115, 10)
hoe = sprites.create(img`
. . e . . 
. . e e . 
. . e . e 
. . e . . 
. . e . . 
. . e . . 
. . e . . 
. . e . . 
`, SpriteKind.Tool)
hoe.setPosition(138, 26)
harvester = sprites.create(img`
. . b . . 
. b b b . 
. c b b . 
. c b b . 
. . c . . 
. . c . . 
. . b . . 
. . . . . 
`, SpriteKind.Tool)
harvester.setPosition(133, 75)
seed_bag = sprites.create(img`
. . 7 . . . . . 
. . . 7 7 . . . 
. . b b b b . . 
. . 1 1 1 . . . 
. b b b b . . . 
. b b b b b b . 
. c b b b b c . 
. . c c c c . . 
`, SpriteKind.Tool)
seed_bag.setPosition(137, 44)
for (let value of sprites.allOfKind(SpriteKind.Tool)) {
    sprites.setDataNumber(value, "x", value.x)
    sprites.setDataNumber(value, "y", value.y)
}
controller.moveSprite(Greg)
scene.cameraFollowSprite(Greg)
info.startCountdown(10)
game.onUpdate(function () {
    Gregs_Left_Hand.x = Greg.left + 4
    Gregs_Left_Hand.y = Greg.top + 8
    Gregs_Right_Hand.x = Greg.left + 13
    Gregs_Right_Hand.y = Greg.top + 6
})
