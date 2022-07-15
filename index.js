
//draw on canvas
const canvas1 = document.getElementById("canvas1")
const ctx1 = canvas1.getContext("2d")
//draw an image
const img = new Image()
img.src = "./2.jpg"
img.onload = () => {
  ctx1.drawImage(img, 0, 0, canvas1.width, canvas1.height)
}

const canvas2 = document.getElementById("canvas2")
const ctx2 = canvas2.getContext("2d")
//draw an image
const img2 = new Image()
img2.src = "./1.png"
img2.onload = () => {
    //layer 1 bg
    ctx2.drawImage(canvas1, 0, 0)
    //layer2 head
    ctx2.drawImage(img2, 50, 50, 100, 100)

var imgFInal = new Image()
imgFInal.onload = function () {
  document.getElementById("results").src = imgFInal.src
}
    imgFInal.src = canvas2.toDataURL()
    imgFInal.className="result"
}



