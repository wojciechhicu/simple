//===toggle left nav menu after click===
let togglemenu = () =>
{
    //===declaring variables===
    //left nav object witchout btn
    let leftNav = document.querySelector('#left-nav');
    
    //icon on toggle btn
    let toggleIcon = document.querySelector('#toggler-icon');
    
    //button, when clicked toggle hide/show left menu
    let toggleBtn = document.querySelector('.toggle-btn');
    
    //after click on btn toggle hide/show
    leftNav.classList.toggle('active');
    
    //after btn click rotate and change font color of icon
    toggleIcon.classList.toggle('active-icon');
    
    //if left nav has class active, toggle title on toggle button
    if(leftNav.classList == 'active')
        toggleBtn.title='Rozwiń menu';
    else
        toggleBtn.title='Zwiń menu';
}

//=== show/hide search input field
let toggleInput = () =>
{
    //toggle class acite-search-field which show input field; Display: flex;
    document.querySelector('.searchInput').classList.toggle('active-search-field');
}




//add event listeners
document.querySelector('.toggle-btn').addEventListener('click', togglemenu);
document.querySelector('.searchLoop').addEventListener('click', toggleInput);