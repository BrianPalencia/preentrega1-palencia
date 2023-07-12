class ComprarVehiculo{
    constructor(marca, modelo, precio, tasa, meses){
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.tasa = tasa;
        this.meses = meses;
    }
    obtenerLinea(){
        return this.marca + " " + this.modelo + " - Q. " + this.precio;
    }
    calcularTasa(){
        return (this.tasa / 100) * this.precio;
    }
    calcularTotal(){
        return this.calcularTasa() + this.precio;
    }
    calcularCuotas(){
        return this.precio / this.meses;
    }
}

const formulario= document.getElementById("formulario");

formulario.addEventListener("submit", function(e){
    e.preventDefault();
    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;
    const precio = document.getElementById("precio").value;
    const tasa = document.getElementById("tasa").value;
    const meses = document.getElementById("meses").value;
    const vehiculo = new ComprarVehiculo(marca, modelo, Number(precio), Number(tasa), Number(meses));
    const linea = vehiculo.obtenerLinea();
    const total = vehiculo.calcularTotal();
    const cuotas = vehiculo.calcularCuotas();
    document.getElementById("resultado").innerHTML = "Vehiculo: " + linea + "<br />Total a pagar: Q. " + total + "<br />Cuotas de: Q. " + cuotas + " por " + meses + " meses.";
});