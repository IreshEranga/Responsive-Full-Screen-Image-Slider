/*-------------------------Variables--------------------*/
var slides = document.querySelectorAll('.slide');
var rbtn = document.querySelectorAll('.rad-btn');
var leftArrow = document.querySelector('.left');
var rightArrow = document.querySelector('.right');
var slideInt; //to store ongoing slide time (slide interval) 
var intTime = 5000; //interval time in ms(mili second) every 5 seconds the slide will change

//iterate all radio navigation buttons------
rbtn.forEach(function(item,index){
    //click event or button
    item.addEventListener('click', function(){
        manButtonNav(index);
    });
});


//----------------click events or arrows---------

//right arrow
rightArrow.addEventListener('click', function(e){
    e.preventDefault();
    nextSlide();
    clrInterval();
});

//left arrow
leftArrow.addEventListener('click', function(e){
    e.preventDefault();
    prevSlide();
    clrInterval();
})

//function for radio navigation
function manButtonNav(index){
    for(var i=0; i< slides.length; i++)
    {
        //set slide and radio navigation
        if(i !== index)
        {
            slides[i].classList.remove('curr');
            rbtn[i].classList.remove('active');
        }
        else{
            slides[index].classList.add('curr');
            rbtn[index].classList.add('active');
        }
    }
    clrInterval();
}

//----------------------Function for next slide------
function nextSlide(){
    var curr = document.querySelector('.curr');
    var active = document.querySelector('.active');

    //unset current slide and radio button
    curr.classList.remove('curr');
    active.classList.remove('active');

    //set next slide and radio button
    if(curr.nextElementSibling){
        //nextelementsibling ---> if curr has next slide
        curr.nextElementSibling.classList.add('curr');
        active.nextElementSibling.classList.add("active");
    }
    else{
        slides[0].classList.add('curr');
        rbtn[0].classList.add('active');
    }
}

//---------------------Function for previous slide------
function prevSlide(){
    var curr = document.querySelector('.curr');
    var active = document.querySelector('.active');

    //unset current slide and radio button
    curr.classList.remove('curr');
    active.classList.remove('active');

    //set previous slide and radio button
    if(curr.previousElementSibling){
        //nextelementsibling ---> if curr has next slide
        curr.previousElementSibling.classList.add('curr');
        active.previousElementSibling.classList.add("active");
    }
    else{
        slides[slides.length-1].classList.add('curr');
        rbtn[rbtn.length - 1].classList.add('active');
    }
}

//function for clear interval
function clrInterval(){
    clearInterval(slideInt);
    slideInt = setInterval(nextSlide, intTime); //set new time again
}

//-------------------------Automatic slide navigator--------------------

slideInt = setInterval(nextSlide, intTime);