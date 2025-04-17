function calcola(si_no){
    let m=parseInt(document.getElementById("materiale").value);
    let gs=parseInt(document.getElementById("giorni_uso").value);
    let gr=parseInt(document.getElementById("giorni_r").value);
    let s=parseInt(document.getElementById("scorta_s").value);
    if (si_no){              
        let consumo_medio_g=m/gs;
        let r=(consumo_medio_g*gr)+(consumo_medio_g*s);
        let risultato=document.getElementById("risultato").innerHTML="Risultato: "+r.toFixed(2);
    }
    else{
        materiale.value = "";
        giorni_uso.value = "";
        giorni_r.value = "";
        scorta_s.value = "";
        risultato.innerHTML="Risultato: "; 
    }    
}
function calcola2(si_no){
    let eg=parseInt(document.getElementById("e_g").value);
    let tg=parseInt(document.getElementById("tot_giorni").value);
    let ts=parseInt(document.getElementById("tot_scarichi").value);
    if (si_no){              
        consistenza_media=eg/tg;
        indice_rotazione=ts/consistenza_media;
        giacenza_media=tg/indice_rotazione;
        let risultato1=document.getElementById("risultato2").innerHTML="Consistenza media: "+consistenza_media.toFixed(2);
        let risultato2=document.getElementById("risultato3").innerHTML="Indice di rotazione: "+indice_rotazione.toFixed(2);
        let risultato3=document.getElementById("risultato4").innerHTML="Giacenza media: "+giacenza_media.toFixed(0);
    }
    else{
        e_g.value= "";
        tot_giorni.value = "";
        tot_scarichi.value = "";
        risultato2.innerHTML="Consistenza media: ";
        risultato3.innerHTML="Indice di rotazione: "; 
        risultato4.innerHTML="Giacenza media: "; 
    }    
}
function menuappare(appare, quale){
    let a=document.getElementById("calcolo1");
    let b=document.getElementById("calcolo2");
    if (quale)
    {
        if (appare)
        {
            a.style.display="flex";
            b.style.display="none";
        }    
         else
            a.style.display="none";
    }
     else
    {
        if (appare)
            {
            b.style.display="flex";
            a.style.display="none";
            }
         else
            b.style.display="none";
    }
}
function formappare(appare){
    let c=document.getElementById("sparisce");
    let b=document.getElementById("buttonone");
    if (appare)
    {
        c.style.display="flex";
        b.style.display="none";
    }   
     else
        c.style.display="none";
}
