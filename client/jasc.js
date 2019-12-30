//stretch func change css of hover and everything else 
//we want it to expand in direction opposite to its location on window

//getelement, onhover ch



var hidden = true;


window.onscroll = ()=>{
console.log(window.innerHeight)
console.log(window.pageYOffset)
console.log(window)

//innerHeight/pageYOffset<2
//aka half or less

    if((window.innerHeight/window.pageYOffset)<2)

    var target = document.querySelector(".landcnt")
    var rate=window.pageYOffset * -0.1

    if(window.pageYOffset>50&&hidden){
        document.getElementById("navbar").classList.remove("nav-hidden");
        hidden=!hidden;
    }
    if(window.pageYOffset<50&&hidden==false){
        document.getElementById("navbar").classList.add("nav-hidden");
        hidden=!hidden;
    }

    target.style.transform=`translate3d(0px,${rate}px, 0px)`
    
    if(rate>-25){
        target.style.opacity="1"
    }
    else if(rate<-50){
        target.style.opacity="0"
    }
    else{
        target.style.opacity=`${(rate+50)/25}`
    }
   console.log(rate);

}