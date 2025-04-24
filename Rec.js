class Personagem{
    constructor(vida, força, mana){
        this.vida = vida,
        this.força = força,
        this.mana - mana

    }
}

class Guerreiro extends Personagem{
    constructor(vida, força, ataque, espada){
        super(vida,força)
        this.ataque = ataque,
        this.espada = espada
    }
    get #ataque(){
        return this.força
    }
    set #espada(ataque){
        this.espada = ataque
    }
    get #vida(){
        return this.vida
    }
    set #vida(vida){
        this.vida = vida
    }
}

class Mago extends Personagem{
    constructor(vida, mana, dm, cajado){
        super(vida,mana)
        this.dm = dm,
        this.cajado = cajado
    }
    get #dm(){
        return this.mana
    }
    set #cajado(dm){
        this.cajado = dm
    }
    get #vida(){
        return this.vida
    }
    set #vida(vida){
        this.vida = vida
    }
}

class Arqueiro extends Personagem{
    constructor(vida, força, tiro, arco){
        super(vida,força)
        this.tiro = tiro,
        this.arco = arco
    }
    get #tiro(){
        return this.força
    }
    set #arco(tiro){
        this.arco = tiro
    }
    get #vida(){
        return this.vida
    }
    set #vida(vida){
        this.vida = vida
    }
}