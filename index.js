// date for footer
document.getElementById("year").innerHTML = new Date().getFullYear() + " ";

// Navigate to home page after click a logo
document.getElementById('headerLogo').addEventListener('click', function() {
    slideStatus = 1;
    removeClasses();
    document.getElementById('aboutMe').classList.add('liActive');
    slide1();
})

// Slide 1
document.getElementById('aboutMe').addEventListener('click', function() {
    slideStatus = 1;
    removeClasses();
    document.getElementById('aboutMe').classList.add('liActive');
    slide1();
})

// Slide 2
document.getElementById('hardware').addEventListener('click', function() {
    slideStatus = 2;
    removeClasses();
    document.getElementById('hardware').classList.add('liActive');
    slide2();
})

// Slide 3
document.getElementById('networks').addEventListener('click', function() {
    slideStatus = 3;
    removeClasses();
    document.getElementById('networks').classList.add('liActive');
    slide3();
})

// Slide 4
document.getElementById('services').addEventListener('click', function() {
    slideStatus = 4;
    removeClasses();
    document.getElementById('services').classList.add('liActive');
    slide4();
})

// Slide 5
document.getElementById('contact').addEventListener('click', function() {
    slideStatus = 5; 
    removeClasses();
    document.getElementById('contact').classList.add('liActive');
    slide5();
})


// Remove slides / classes
function removeClasses() {
    document.getElementById('aboutMe').classList.remove('liActive');
    document.getElementById('hardware').classList.remove('liActive');
    document.getElementById('networks').classList.remove('liActive');
    document.getElementById('services').classList.remove('liActive');
    document.getElementById('contact').classList.remove('liActive');
}

function slide1() {
    hideSlides();
    document.getElementById('sliderBackground1').classList.add('sliderBackground1');
}

function slide2() {
    hideSlides();
    document.getElementById('sliderBackground2').classList.add('sliderBackground2');
}

function slide3() {
    hideSlides();
    document.getElementById('sliderBackground3').classList.add('sliderBackground3');
}

function slide4() {
    hideSlides();
    document.getElementById('sliderBackground4').classList.add('sliderBackground4');
}

function slide5() {
    hideSlides();
    document.getElementById('sliderBackground5').classList.add('sliderBackground5');
}


function hideSlides() {
    document.getElementById('sliderBackground1').classList.remove('sliderBackground1');
    document.getElementById('sliderBackground1').classList.add('hideItem');
    document.getElementById('sliderBackground2').classList.remove('sliderBackground2');
    document.getElementById('sliderBackground2').classList.add('hideItem');
    document.getElementById('sliderBackground3').classList.remove('sliderBackground3');
    document.getElementById('sliderBackground3').classList.add('hideItem');
    document.getElementById('sliderBackground4').classList.remove('sliderBackground4');
    document.getElementById('sliderBackground4').classList.add('hideItem');
    document.getElementById('sliderBackground5').classList.remove('sliderBackground5');
    document.getElementById('sliderBackground5').classList.add('hideItem');
}