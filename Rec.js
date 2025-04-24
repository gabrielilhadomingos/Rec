class Personagem{
    constructor(vida, força, mana){
        this.vida = vida,
        this.força = força,
        this.mana - mana

    }
}

class Guerreiro extends Personagem{
    constructor(vida, força, ataque, espada){
        this.ataque = ataque,
        this.espada = espada
    }
}

class Mago extends Personagem{
    constructor(vida, mana, dm, cajado){
        this.dm = dm,
        this.cajado = cajado
    }
}

class Arqueiro extends Personagem{
    constructor(vida, força, tiro, arco){
        this.tiro = tiro,
        this.arco = arco
    }
}