function battleHorde(zombies, humans) {
    // Code here
    let addZombie = 0;
    let addHuman = 0;

    for(let i = 0; i < zombies.length;i++){
        
        let puntajeZombie = Number(zombies[i])+addZombie ;
        let puntajeHuman = Number(humans[i])+addHuman;
        
        if (puntajeZombie < puntajeHuman){  
            addHuman = puntajeHuman - puntajeZombie;
            addZombie = 0;
            console.log(addZombie,addHuman);
        } else if (puntajeZombie > puntajeHuman){
            addZombie = puntajeZombie - puntajeHuman;
            addHuman = 0;
            console.log(addZombie,addHuman);
        } else {
            addZombie = 0;
            addHuman = 0; 
            console.log(addZombie,addHuman);
        }
    }

    if(addZombie < addHuman) {
        return (addHuman.toString() + 'h');
    } else if (addHuman < addZombie){
        return (addZombie.toString() + 'z');
    } else {
        return 'x';
    }
  }

console.log(battleHorde('444','282'));