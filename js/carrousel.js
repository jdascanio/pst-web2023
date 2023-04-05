function myslides() {

    let slideIndex = 0;

    let slides = document.getElementsByClassName('slide')

    function valor() {
        slideIndex++
        if (slideIndex == slides.length){
            slideIndex = 0
        }     
    }
    setInterval(function () {
        valor()
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.add('hidden')
        }
        slides[slideIndex].classList.remove('hidden')
    }, 6000); 
}
myslides()