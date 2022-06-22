"use strict";
var EProfissao;
(function (EProfissao) {
    EProfissao[EProfissao["Atriz"] = 0] = "Atriz";
    EProfissao[EProfissao["Padeiro"] = 1] = "Padeiro";
})(EProfissao || (EProfissao = {}));
class Pessoa {
    constructor(nome, idade, profissao) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }
}
let pessoa1 = new Pessoa('maria', 29, EProfissao.Atriz);
let pessoa2 = new Pessoa('roberto', 19, EProfissao.Padeiro);
let pessoa3 = new Pessoa('laura', 32, EProfissao.Atriz);
let pessoa4 = new Pessoa('carlos', 19, EProfissao.Padeiro);
