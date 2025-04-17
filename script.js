let saturate = document.getElementById('saturate');
let contrast = document.getElementById('contrast');
let brightness = document.getElementById('brightness');
let sepia = document.getElementById('sepia');
let grayscale = document.getElementById('grayscale');
let blurs = document.getElementById('blur');
let HueRotate = document.getElementById('hue-rotate');



let download = document.getElementById('download');
let reset = document.getElementById('reset');
let upload = document.getElementById('upload');
let img = document.getElementById('img');
let imgContain = document.querySelector('.img-contain');






function resetValue(){
    img.style.filter = 'none';
    saturate.value = '100';
    contrast.value = '100';
    brightness.value = '100';
    sepia.value = '0';
    grayscale.value = '0';
    blurs.value = '0';
    HueRotate.value = '0';

}



upload.onchange = function(){
    resetValue();
    download.style.display = 'block';
    reset.style.display = 'block';
    imgContain.style.display = 'block';
    let file = new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload = function(){
        img.src = file.result;
    }
}

let filters = document.querySelectorAll('ul li input');

filters.forEach(filter => {
    filter.addEventListener('input', function(){
        img.style.filter = `
        
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayscale(${grayscale.value})
        blur(${blurs.value}px)
        hue-rotate(${HueRotate.value}deg)
        `

    })
})


download.onclick = function(){
    download.href = img.src;
};