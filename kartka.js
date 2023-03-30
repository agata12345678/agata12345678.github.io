// import kaboom lib
import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

// zaladowac

loadSprite("kartka","kartka.png")
loadSprite("choinka","choinka.png")

loadSound("muzyka","Chichanoc2.mp3")

add([
    sprite("kartka"),
    pos(0,0)
])

const choinka = add([
    sprite("choinka"),
    pos(450,150)
])

onMouseRelease(()=>play("muzyka"))

let wprawo=true 

choinka.onUpdate(()=> {
    if(wprawo && choinka.pos.x < 600)
    choinka.pos.x +=1
    else if (!wprawo && choinka.pos.x > 50)
    choinka.pos.x -=1 
    else wprawo ^=true
})
 