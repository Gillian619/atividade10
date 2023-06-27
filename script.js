class Forma {
    altura
    constructor(altura) {
        this.altura = altura
    }
    CalcularArea() {
        console.log("função CalcularArea")
    }
    CalcularVolume() {
        console.log("função CalcularVolume")
    }
}
class FormaPlana extends Forma {
    #tipo
    #base
    #comprimento
    constructor(altura, tipo, base, comprimento) {
        super(altura)
        this.#tipo = tipo
        this.#base = base
        this.#comprimento = comprimento
    }
    getTipo() {
        return str.toLowerCase(this.#tipo)
    }
    setTipo() {
        this.#tipo = str.toLowerCase(newtipo)
    }
    getBase() {
        return this.#base
    }
    setBase() {
        this.#base = newbase
    }
    getComprimento() {
        return this.#comprimento
    }
    setComprimento() {
        this.#comprimento = newcomprimento
    }
    CalcularArea() {
        let area
        if (this.#tipo === "retangular") {
            area = this.#base * this.#comprimento
            return area
        }
        else if (this.#tipo === "triangular") {
            area = (this.#base * this.#comprimento) / 2
            return area
        }
        else {
            console.log("o tipo não é retangular ou triangular")
        }
    }
    CalcularVolume() {
        let volume
        let areaBase = this.CalcularArea()
        volume = (areaBase * this.altura) / 3
        return volume
    }
}
class FormaCircular extends Forma {
    #pi = 3.14
    #raio
    constructor(altura, raio) {
        super(altura)
        this.#raio = raio
    }
    getRaio() {
        return this.#raio
    }
    setRaio() {
        this.#raio = newRaio
    }
    CalcularArea() {
        let areaBase
        areaBase = this.#pi * Math.pow(this.#raio, 2)
        return areaBase
    }
    CalcularVolumeCilindro() {
        let volume
        let areaBase = this.CalcularArea()
        volume = areaBase * this.altura
        return volume.toFixed(2)
    }
    CalcularVolumeCone() {
        let volume
        let areaBase = this.CalcularArea()
        volume = (areaBase * this.altura) / 3
        return volume.toFixed(2)
    }
    CalcularVolumeEsfera() {
        let volume
        let areaBase = this.CalcularArea()
        volume = areaBase * this.#raio * 4 / 3
        return volume.toFixed(2)
    }
}

let retangulo1 = new FormaPlana(2, "retangular", 2, 2)
let triangulo1 = new FormaPlana(2, "triangular", 2, 2)
let circulo = new FormaCircular(2, 5)
let cilindro = new FormaCircular(4, 5)
let cone = new FormaCircular(2, 5)
let esfera = new FormaCircular(2, 5)
console.log(retangulo1.CalcularArea())
console.log(triangulo1.CalcularArea())
console.log(triangulo1.CalcularVolume())
console.log(circulo.CalcularArea())
console.log(cilindro.CalcularVolumeCilindro())
console.log(cone.CalcularVolumeCone())
console.log(esfera.CalcularVolumeEsfera())
