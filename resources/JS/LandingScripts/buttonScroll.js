window.addEventListener('click',function buttonUp() { 

    var buttonScroll = document.querySelector('#upperScroll');

    buttonScroll.addEventListener("click",()=>{
        window.scrollTo({
            top:0,
            left:0,
            behavior:"smooth",
        });
    });
});

window.addEventListener('load',()=>{
    var scrollTop = window.pageYOffset ;
    var buttonScroll = document.querySelector('#upperScroll');


    if(scrollTop>=1000){
    buttonScroll.className=("scroll");
    }else if(scrollTop<1000){
    buttonScroll.className=("d-none");
    }

});

//Responsive Listener
window.addEventListener('scroll',function scrollMovent(){
    var scrollTop = window.pageYOffset ;
    var buttonScroll = document.querySelector('#upperScroll');


    if(scrollTop>=1000){
    buttonScroll.className=("scroll");
    }else if(scrollTop<1000){
    buttonScroll.className=("d-none");
    }
    
});