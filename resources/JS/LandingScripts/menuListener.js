  
   
//Setup Menu initial
window.addEventListener('load',function onliadTypeMenu()  {
  
    var menu1 = document.querySelector('#menu_1');
    var menu2 = document.querySelector('#menu_2');
   

    setTimeout(() => {
        var size= document.documentElement.clientWidth;
        
        if(size < 1500){
            
            menu2.className=("menu-2");
            menu1.className=("d-none");
        }else if(size>=1500){
            
            menu2.className=("d-none");
            menu1.className=("menu-1");
       
        };
    },800);  

 
},true);
//Setup menu on resize
window.addEventListener('resize',function modelMenu() { 

    var menu1 = document.querySelector('#menu_1');
    var menu2 = document.querySelector('#menu_2');
    var size= document.documentElement.clientWidth;
   
    
    if(size < 1500){
        menu2.className=("menu-2");
        menu1.className=("d-none");
        
    }else if(size>=1500){
        
        menu2.className=("d-none");
        menu1.className=("menu-1");
   
    };
    
});

