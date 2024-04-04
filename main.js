/*Obtiene el mapa y lo guarda en una variable*/
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d')
canvas.width = 960
canvas.height = 640
/*Comprueba si se conecto el js */
console.log(context);

context.fillRect(0, 0, canvas.width, canvas.height);
/*Carga la imagen elmapa*/
const image = new Image()
image.src = './src/image/AGame_zoom.png'
/*Carga el personaje*/
const playerImage = new Image()
playerImage.src = './src/character/Basic.png'

class Sprite { 
    constructor({position,velocity, image}) {
        this.position = position
        this.image = image
    }

    draw() {
        context.drawImage(this.image, this.position.x, this.position.y);
    }
}
/*Declara el fondo como variable, y tiene valores por defecto */
const background = new Sprite({
    position: {
        x: -500,
        y:-600
    },
    image: image
})

const keys = {
    w: {
        pressed: false 
    },
    a: {
        pressed: false 
    },
    s: {
        pressed: false 
    },
    d: {
        pressed: false 
    }
}
function animate() {
    window.requestAnimationFrame(animate)
    background.draw()
    context.drawImage(playerImage,
        /*coordenadas para cortar la imagen*/
        0,
        0,
        playerImage.width / 4,
        playerImage.height / 4,
        /*coordenadas para posicionar al personaje*/
        canvas.width / 2,
        canvas.height / 2,
        /*Tamaño de la image*/
        playerImage.width / 2,
        playerImage.height / 2)
    
    if (keys.w.pressed) 
        background.position.y += 5
    else if(keys.s.pressed) 
        background.position.y -= 5  
    else if(keys.a.pressed) 
        background.position.x += 5
    else if(keys.d.pressed) 
        background.position.x -= 5  
    
}
animate()


window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'w':
            keys.w.pressed = true
            break
        
        case 's':
            keys.s.pressed = true
            break
        
        case 'a':
            keys.a.pressed = true
            break
        
        case 'd':
            keys.d.pressed = true
            break
    }
})
window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'w':
            keys.w.pressed = false
            break
        
        case 's':
            keys.s.pressed = false
            break
        
        case 'a':
            keys.a.pressed = false
            break
        
        case 'd':
            keys.d.pressed = false
            break
    }
})
