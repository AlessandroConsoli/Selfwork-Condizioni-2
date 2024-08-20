let temp = prompt(`Inserire la temperatura della stanza`);

if (temp < -10) {
    alert(`copriti…ancora ti raffreddi`);
}else if (temp >= -10 && temp < 0) {
    alert(`non e’ tanto il freddo quanto l’umidità`);
}else if (temp >= 0 && temp < 20) {
    alert(`non ci sono piu’ le mezze stagioni`);
}else if (temp >= 20 && temp < 30) {
    alert(`mi dia una peroni sudata`);
}else if (temp >= 30) {
    alert(`lu mare, lu sole, lu ientu`);
}else {
    alert(`valore non valido`);
}


// Utilizzando Switch

let secondaTemp = prompt(`Inserire la temperatura esterna`);

switch (true) {
    case secondaTemp < -10:
        alert(`copriti…ancora ti raffreddi`);
        break;

    case secondaTemp >= -10 && secondaTemp < 0:
        alert(`non e’ tanto il freddo quanto l’umidità`);
        break;
    
    case secondaTemp >= 0 && secondaTemp < 20:
        alert(`non ci sono piu’ le mezze stagioni`);
        break;    

    case secondaTemp >= 20 && secondaTemp < 30:
        alert(`mi dia una peroni sudata`);
        break;

    case secondaTemp >= 30:
        alert(`lu mare, lu sole, lu ientu`);
        break;
        
    default:
        alert(`valore non valido`);
        break;
}