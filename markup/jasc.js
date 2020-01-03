//stretch func change css of hover and everything else 
//we want it to expand in direction opposite to its location on window

//getelement, onhover ch

sample = (e)=>{
    const image=e.src;
    //add to screen
    //overlay appears with list of images in collection
    //can scroll thru collection with arrow buttons.
}

var hidden = true;


window.onscroll = ()=>{
//console.log(window.innerHeight)
//console.log(window.pageYOffset)
//console.log(window)

var winHeight=window.innerHeight;
var scroll=window.pageYOffset;

//navbar opacity
    if((winHeight/scroll)<2&&winHeight/scroll>1){
        document.querySelector(".navbar").style.opacity=`${(winHeight/scroll*-5/18)+(0.75+2*(5/18))}`;

    }else if(winHeight/scroll<1){
        document.querySelector(".navbar").style.opacity="1"
    }else{
        document.querySelector(".navbar").style.opacity="0.75";
    }

    console.log(document.getElementById("thingy").getBoundingClientRect().top);

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
   //console.log(rate);

}