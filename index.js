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
    if(ampm="AM")
    {
        document.getElementById("ampm").style.backgroundImage=("/morning.jpg")
        let sapns=document.querySelectorAll(".hours, .mins, .secs, .ampm");
        let textspns=document.querySelectorAll(".text")
        for(s of spans){
            s.style.backgroundcolor="#C75643"
            s.style.color="#D08752"
        }

        for(s of textspns){
            s.style.backgroundcolor="#D08752"
            s.style.color="#FFD4B2"
        }

    }

}
setInterval(()=>{
clock();},1000)
 