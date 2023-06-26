class Alunos {
    nome
    cpf
    datanas
    rendapercapta
    constructor(nome, cpf, datanas, rendapercapta) {
        this.nome = nome
        this.#cpf = cpf
        this.#datanas = datanas
        this.#rendapercapta = rendapercapta
    }
}
class Professor {
    nome
    titulação
    cpf
    salario
    constructor(nome, titulação, cpf, salario) {
        this.nome = nome
        this.titulação = titulação
        this.#cpf = cpf
        this.#salario = salario
    }
}
class Curso {
    descricao
    eixo
    modalidade
    constructor(descricao, eixo, modalidade) {
        this.descricao = descricao
        this.eixo = eixo
        this.modalidade = modalidade
    }
}
class Turma {
    codigo
    Curso
    listaalunos
    constructor(codigo, curso, listaalunos) {
        this.codigo = codigo
        this.curso = curso
        this.listaalunos = listaalunos
    }
}