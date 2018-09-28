window.addEventListener("scroll", function (){
    let heightWindow = window.innerHeight, scroll  = window.pageYOffset, position = heightWindow - scroll, value = 100/scroll ;
    let next = document.getElementById('next');
    if (value > 0.25) { 
        next.style.opacity = value/3;
    }
    
    let parallaxStart = document.querySelector('.parallax_1'), parallaxEnd = document.querySelector('.parallax_3'), pos = -1 * position, refPara = (window.pageYOffset) - (1*window.innerHeight), diviseur = 0;
    if (heightWindow < 1500){
        diviseur = 2.5;
    }
    if (heightWindow < 1450){
        diviseur = 2.55;
    }
    if (heightWindow < 1400){
        diviseur = 2.64;
    }
    if (heightWindow < 1350){
        diviseur = 2.67;
    }
    if (heightWindow < 1300){
        diviseur = 2.78;
    }
    if (heightWindow < 1250){
        diviseur = 2.84;
    }
    if (heightWindow < 1200){
        diviseur = 2.95;
    }
    if (heightWindow < 1150){
        diviseur = 3.02;
    }
    if (heightWindow < 1100){
        diviseur = 3.13;
    }
    if (heightWindow < 1050){
        diviseur = 3.35;
    }
    if (heightWindow < 1000){
        diviseur = 3.45;
    }
    if (heightWindow < 950){
        diviseur = 3.7;
    }
    if (heightWindow < 900){
        diviseur = 3.9;
    }
    if (heightWindow < 850){
        diviseur = 4.4;
    }
    if (heightWindow < 800){
        diviseur = 4.8;
    }
    if (heightWindow < 750){
        diviseur = 5.7;
    }
    if (heightWindow < 700){
        diviseur = 7.1;
    }
    if (heightWindow < 650){
        diviseur = 8.5;
    }
    if (heightWindow <= 600){
        diviseur = 9;
    }


    if (refPara > (heightWindow - (heightWindow)/diviseur)){
        if (window.innerHeight >= 600 ) {
            parallaxStart.style.backgroundAttachment = 'fixed';
        }
        else {
            parallaxStart.style.backgroundAttachment = 'unset';
        }
    }
    else {
        parallaxStart.style.backgroundAttachment = 'unset';
    }
    if (pos > 2100) {
        parallaxEnd.style.backgroundAttachment = 'unset';   
    }
    else {
        parallaxEnd.style.backgroundAttachment = 'fixed';
    }

    if (window.innerWidth <= 800 ) {
        parallaxStart.style.backgroundAttachment = 'unset';
    }
});

function progressBarScroll() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
        height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
        scrolled = (winScroll / height) * 100,
        refPara = ((window.pageYOffset) - (2*window.innerHeight))/30,       
        slideOne = document.querySelector(".slide_1"),
        slideTwo = document.querySelector(".slide_2"),
        slideThree = document.querySelector(".slide_3");
        
        if (0 < refPara) {
            slideOne.style.color = 'white';
            slideTwo.style.color = 'grey';
            slideThree.style.color = 'grey';
            console.log('Ok');
            if (15 < refPara) {
                slideOne.style.color = 'grey';
                slideTwo.style.color = 'white';
                slideThree.style.color = 'grey';
                if (30 < refPara) {
                    slideOne.style.color = 'grey';
                    slideTwo.style.color = 'grey';
                    slideThree.style.color = 'white';
                }
            }
        }
        if (window.innerWidth <= 800){
            slideOne.style.color = 'white';
            slideTwo.style.color = 'white';
            slideThree.style.color = 'white';
        }
        if (window.innerHeight <= 600){
            slideOne.style.color = 'white';
            slideTwo.style.color = 'white';
            slideThree.style.color = 'white';
        }
        
        console.log(window.innerHeight);
        
    document.getElementById("progressBar").style.height = refPara + "vh";
    
}
  
window.onscroll = function () {
    progressBarScroll();
};