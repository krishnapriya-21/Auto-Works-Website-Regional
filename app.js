/* Slider Control Function */


window.onload=function(){

const track= document.querySelector('.slider-track');
const slider= document.querySelector('.slider-container');
const slides= document.querySelectorAll('.slide');
const prevButton=document.querySelector('.slider-button.prev');
const nextButton=document.querySelector('.slider-button.next');

let currentIndex=0;
let autoSlideInterval= setInterval(autoSlide,3000);// Change slide every 3 seconds

// Function to move the next or previous slide
function updateSlider(){

    track.style.transform=`translatex(-${currentIndex *100}%)`;

}

//Function to Automatically change slides every 3 seconds

function autoSlide(){
    currentIndex= (currentIndex+1)%slides.length;
    updateSlider();
}

// Adding Event Listener to Sliders to Track Mouse Enter and Mouse Leave for Pause and Resume Auto Slide

slider.addEventListener('mouseenter',()=>{
    clearInterval(autoSlideInterval);
});

slider.addEventListener('mouseleave',()=>{
    autoSlideInterval= setInterval(autoSlide,3000);//Change slide every 3 seconds
});
  


// Event listeners for the buttons
// Using addEventListener instead of onclick for better Practices
prevButton.addEventListener('click',()=>{
    if(currentIndex>0){
        currentIndex--;
        updateSlider();
    }
});

nextButton.addEventListener('click',()=>{
    if(currentIndex<slides.length-1){
        currentIndex++;
        updateSlider();
    }
});

};