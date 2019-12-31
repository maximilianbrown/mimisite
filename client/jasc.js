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

var winHeight=window.innerHeight;
var scroll=window.pageYOffset;

//navbar opacity
    if((winHeight/scroll)<2&&winHeight/scroll>1){
        document.querySelector(".navbar").style.opacity=`${(winHeight/scroll*-5/18)+(0.75+2*(5/18))}`;

        //1.25-(0.25*winHeight/scroll)

       // 2   .75
        //1.1 1
        //0= .75+2(5/18)   aka about 1.3

  //      winHeight/scroll*-5/18+(0.75+2(5/18)) 

    //    rate*-5/18+(0.75+2(5/18)) 
    }else if(winHeight/scroll<1){
        document.querySelector(".navbar").style.opacity="1"
    }else{
        document.querySelector(".navbar").style.opacity="0.75";
    }


    //navbar visibility
    if(window.pageYOffset>50&&hidden){
        document.getElementById("navbar").classList.remove("nav-hidden");
        hidden=!hidden;
    }
    if(window.pageYOffset<50&&hidden==false){
        document.getElementById("navbar").classList.add("nav-hidden");
        hidden=!hidden;
    }

    //title parallax
    var target = document.querySelector(".landcnt")
    var rate=window.pageYOffset * -0.1
    target.style.transform=`translate3d(0px,${rate}px, 0px)`
    

    //title opacity
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