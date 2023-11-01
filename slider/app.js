const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');


//setting for each banner's position
//0%,100%,200%,300%,400%
slides.forEach(function(slide, index){
    slide.style.left = `${index*100} % `;
});

//counter equal to the index of the slide
//set the btn onclick to counter++ , following up to their index
let counter = 0;

prevBtn.addEventListener('click', () => {
    counter--;
    carousel();
});
nextBtn.addEventListener('click', () => {
    counter++;
    carousel();
});



function carousel(){
//can use two ways, another way is working on the slide.
//this way is working on the btn
//when arrived to the last index of the slide
//then the [nextBtn] disappear , so without functionality you cannot go on next slide
//and also controll the [prevBtn], when is on the first slide, also mean index[0], the btn won't show up.
    if(counter < slides.length - 1 ){
        nextBtn.style.display = "inline-block";
    }else{
        nextBtn.style.display = "none";
    };
    if(counter > 0){
        prevBtn.style.display = "inline-block";
    }else{
        prevBtn.style.display = "none";
    };
//concatenate with previous counter to calculate the translateX position,through controll their position to achieve the slider effect.
    slides.forEach(function(slide){
        slide.style.transform = `translateX(-${counter * 100}%)`;
    })
};