function Alert(){
    alert("This isn't a real website. This is a demo. How did you even get on here?")
}

let gallery = ["images/gallery/galleryImage1.png","images/gallery/galleryImage2.png","images/gallery/galleryImage3.png"]
let current = 1
let image = document.getElementById("img")
image.src = gallery[current]
function previous() {
    current-=1
    if(current<0){
        current=gallery.length-1
    }
    image.src=gallery[current]
}
function next() {
    current+=1
    if(current>gallery.length-1){
        current=0
    }
    image.src=gallery[current]
}