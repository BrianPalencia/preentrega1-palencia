const MARCA = "Toyota"
const MODELO = "Yaris"
const PRECIO = 60000
const TASA = {
    DOCE: "doce",
    QUINCE: "quince",
}
const MESES = 24
const MES_ACTUAL = 4

class ComprarVehiculo{
    constructor(marca, modelo, precio, tasa, meses, actual){
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.tasa = tasa;
        this.meses = meses;
        this.actual = actual
    }
    obtenerLinea(){
        return this.marca + " " + this.modelo + " - Q. " + this.precio;
    }
    calcularTasa(){
        if (this.tasa == TASA.DOCE) {
            return 0.12 * this.precio;
        } else {
            return 0.15 * this.precio
        }
    }
    calcularTotal(){
        return this.calcularTasa() + this.precio;
    }
    calcularCuotas(){
        return this.precio / this.meses;
    }
    calcularRestante(){
        let restante = 0;
        for (let i = this.actual; i <= this.meses; i++) {
            restante += this.calcularCuotas()
        }

        return restante
    }
}

const vehiculo = new ComprarVehiculo(MARCA, MODELO, PRECIO, TASA.QUINCE, MESES, MES_ACTUAL);
const linea = vehiculo.obtenerLinea();
const total = vehiculo.calcularTotal();
const cuotas = vehiculo.calcularCuotas();
const restante = vehiculo.calcularRestante();
console.log("Vehiculo: " + linea + "\nTotal a pagar: Q. " + total + "\nCuotas de: Q. " + cuotas + " por " + MESES + " meses.")
console.log("Despues de " + MES_ACTUAL + " meses usted debe un total de: Q. " + restante)