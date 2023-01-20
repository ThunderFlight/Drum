document.addEventListener("keydown",(e)=>{
    if(e.key==="c"){
        e.preventDefault()
        soundClick()

        document.getElementById("ce").style.width="30px"
        document.getElementById("ce").style.height="30px"
        document.addEventListener("keyup",()=>{
            document.getElementById("ce").style.width="25px"
            document.getElementById("ce").style.height="25px"
        })
    }
    if(e.key==="r"){
        e.preventDefault()
        var audio = new Audio();
        audio.src = 'ritmichnyiy-zvuk-barabana-39655(1).mp3';
        audio.autoplay = true;
        document.getElementById("re").style.width="30px"
        document.getElementById("re").style.height="30px"
        document.addEventListener("keyup",()=>{
            document.getElementById("re").style.width="25px"
            document.getElementById("re").style.height="25px"
        })
    }
    if(e.key==="f"){
        e.preventDefault()
        var audio = new Audio();
        audio.src = 'Floor-Tom-Drum-Hit-Level-1B-www.fesliyanstudios.com.mp3';
        audio.autoplay = true;
        document.getElementById("fe").style.width="30px"
        document.getElementById("fe").style.height="30px"
        document.addEventListener("keyup",()=>{
            document.getElementById("fe").style.width="25px"
            document.getElementById("fe").style.height="25px"
        })
    }
    if(e.key==="m"){
        e.preventDefault()
        var audio = new Audio();
        audio.src = 'tom-2-85124.mp3';
        audio.autoplay = true;
        document.getElementById("me").style.width="30px"
        document.getElementById("me").style.height="30px"
        document.addEventListener("keyup",()=>{
            document.getElementById("me").style.width="25px"
            document.getElementById("me").style.height="25px"
        })
    }
    if(e.key==="h"){
        e.preventDefault()
        var audio = new Audio();
        audio.src = 'high-tom-of-god-wet-004-94254.mp3';
        audio.autoplay = true;
        document.getElementById("he").style.width="30px"
        document.getElementById("he").style.height="30px"
        document.addEventListener("keyup",()=>{
            document.getElementById("he").style.width="25px"
            document.getElementById("he").style.height="25px"
        })
    }
    if(e.key==="k"){
        e.preventDefault()
        var audio = new Audio();
        audio.src = 'house-kick-single-hit-a-key-640-lMU.mp3';
        audio.autoplay = true;
        document.getElementById("ke").style.width="30px"
        document.getElementById("ke").style.height="30px"
        document.addEventListener("keyup",()=>{
            document.getElementById("ke").style.width="25px"
            document.getElementById("ke").style.height="25px"
        })
    }
    if(e.key==="v"){
        e.preventDefault()
        var audio = new Audio();
        audio.src = 'clean-house-steel-kick-drum-sample-g-key-771-XeT.mp3';
        audio.autoplay = true;
        document.getElementById("ve").style.width="30px"
        document.getElementById("ve").style.height="30px"
        document.addEventListener("keyup",()=>{
            document.getElementById("ve").style.width="25px"
            document.getElementById("ve").style.height="25px"
        })
    }
    if(e.key==="s"){
        e.preventDefault()
        var audio = new Audio();
        audio.src = 'Snare-Drum-Hit-Level-2a-www.fesliyanstudios.com.mp3';
        audio.autoplay = true;
        document.getElementById("se").style.width="30px"
        document.getElementById("se").style.height="30px"
        document.addEventListener("keyup",()=>{
            document.getElementById("se").style.width="25px"
            document.getElementById("se").style.height="25px"
        })
    }
    if(e.key==="i"){
        e.preventDefault()
        var audio = new Audio();
        audio.src = 'Hi-Hat-Open-Hit-A2-www.fesliyanstudios.com.mp3';
        audio.autoplay = true;
        document.getElementById("ie").style.width="30px"
        document.getElementById("ie").style.height="30px"
        document.addEventListener("keyup",()=>{
            document.getElementById("ie").style.width="25px"
            document.getElementById("ie").style.height="25px"
        })
    }
    if(e.key==="a"){
        e.preventDefault()
        var audio = new Audio();
        audio.src = 'Hi-Hat-Closed-Hit-A1-www.fesliyanstudios.com.mp3';
        audio.autoplay = true;
        document.getElementById("ae").style.width="30px"
        document.getElementById("ae").style.height="30px"
        document.addEventListener("keyup",()=>{
            document.getElementById("ae").style.width="25px"
            document.getElementById("ae").style.height="25px"
        })
    }
})
function soundClick() {
    var audio = new Audio();
    audio.src = 'malyiy-baraban-odinochnyiy-v-prostranstve-klassicheskiy.mp3';
    audio.autoplay = true;
}
