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
    atacar(){
        if(ataque > vida){
            vida = -5
        }
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
    atacar(){
        if(dm > vida){
            vida = -5
        }
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
    atacar(){
        if(tiro > vida){
            vida = -5
        }
    }
}
dm = 25
let Guerreiro = new Personagem(20, 30, 0)
let Mago = new Personagem(15, dm, 40)
let Arqueiro = new Personagem(15, 35, 0)