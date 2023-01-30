function clock()
{
    const today=new Date();
    let h=today.getHours();
    let m=today.getMinutes();
    let s=today.getSeconds();
    let ampm="AM"
    
    if(h>12)
    {
        h=h-12;
        ampm="PM"
        document.getElementById("ampm").innerText=ampm;    
    }
    document.getElementById("hours").innerText=h;
    document.getElementById("mins").innerText=m;
    document.getElementById("secs").innerText=s;

    if(ampm=="AM")
    {
        //document.getElementById("ampm").style.backgroundImage=("/morning.jpg")
        document.querySelector("body").style.backgroundImage="url('/morning.jpg')"
        document.querySelector("h3").style.color="#4C0033"
        let sapns=document.querySelectorAll(".hours, .mins, .secs, .ampm");
        let textspns=document.querySelectorAll(".text")
        for(s of sapns){
            s.style.backgroundColor ="#CFE8A9"
            s.style.color="#C21010"
        }

        for(s of textspns){
            s.style.backgroundColor ="#E64848"
            s.style.color="#F0EABE"
            
        }

    }

}
setInterval(()=>{
clock();},1000)
 