class Personagem {
    #vida;
    #força;
    #mana;

    constructor(nome, vida, força, mana) {
        this.nome = nome;
        this.#vida = vida;
        this.#força = força;
        this.#mana = mana;
    }

    get vida() {
        return this.#vida;
    }

    get força() {
        return this.#força;
    }

    get mana() {
        return this.#mana;
    }


    set vida(novaVida) {
        if (novaVida >= 0) {
            this.#vida = novaVida;
        } else {
            console.error("Vida não pode ser negativa!");
        }
    }

    set força(novaForça) {
        if (novaForça > 0) {
            this.#força = novaForça;
        } else {
            console.error("Força deve ser positiva!");
        }
    }

    set mana(novaMana) {
        if (novaMana >= 0) {
            this.#mana = novaMana;
        } else {
            console.error("Mana não pode ser negativa!");
        }
    }

    atacar() {
        return `${this.nome} ataca sem habilidade especial.`;
    }
}

class Guerreiro extends Personagem {
    constructor(nome, vida, força, mana, espada) {
        super(nome, vida, força, mana);
        this.espada = espada;
    }

    atacar() {
        return `${this.nome} golpeia com ${this.espada}, causando ${this.força} de dano!`;
    }
}

class Mago extends Personagem {
    constructor(nome, vida, força, mana, cajado) {
        super(nome, vida, força, mana);
        this.cajado = cajado;
    }

    atacar() {
        return `${this.nome} lança um feitiço com ${this.cajado}, causando ${this.mana} de dano!`;
    }
}

class Arqueiro extends Personagem {
    constructor(nome, vida, força, mana, arco) {
        super(nome, vida, força, mana);
        this.arco = arco;
    }

    atacar() {
        return `${this.nome} dispara uma flecha com ${this.arco}, causando ${this.força} de dano!`;
    }
}

// Criando personagens
const guerreiro = new Guerreiro("Arthur", 100, 20, 10, "Espada Flamejante");
const mago = new Mago("Merlin", 80, 10, 30, "Cajado Mágico");
const arqueiro = new Arqueiro("Robin", 90, 25, 5, "Arco da Lua");

console.log(guerreiro.atacar());
console.log(mago.atacar());
console.log(arqueiro.atacar());


guerreiro.vida = 50;
console.log(`Nova vida do Guerreiro: ${guerreiro.vida}`);
