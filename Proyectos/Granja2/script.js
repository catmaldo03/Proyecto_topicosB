//MOMENTANEO
$(document).on("click", "#resetAll", function () {
  localStorage.clear();
  console.log("All LocalStorage Items Clear");
});
//MOMENTANEO

//Declaracion de variables.
var num_parcela = 0;
var monedas = 500;
var costo_parcela = 100;
//POSIBLE var num_habitat = 0;
var costo_semilla = 50;
var tiempo_semilla = 100;
var beneficio_semilla = 60;

var beneficio_cerdo = 150;

var interfazSeleccionCultivo = $("#interfazSeleccionCultivo");
var opcionesSeleccionCultivo = $("#inferfazSeleccionCultivo > .debajo > .opcion-tipo-cultivo");
var interfazParcela = $("#interfazParcela");
var parcela = $(".espacioParcela");
var EspacioMoneda = $("#espacioMoneda");
var EspacioMonedaMensaje = $("#EspacioMonedaMensaje");
var MensajeAbajoUI = $("#InterfazMensajeUI");
var InterfazConfirmacion = $("#InterfazConfirmacion");
var OpcionesInterfazConfirmacion = $("#InterfazConfirmacion > .botones > .boton")
var seleccionSemilla = $(".seleccion-semilla");


var opcionComprarMercado = $("#OpcionComprarMercado");
var opcionesCompraMercado = $("#InterfazCompraMercado > .botones > .boton");
var InterfazCompraMercado = $("#InterfazCompraMercado");
var HabitatCerdos = $("#HabitatCerdos");

var spawn_Parcela = $(".espacioParcelaGuardado").html();
$(".espacioParcelaGuardado").remove();
var spawn_NuevaParcela = $("<div />")
  .append($(".espacioParcela").clone())
  .html();
//Se tiene que cambiar por la variable localStorage que serian los datos traidos de la base de datos
//indica la cantidad de parcelas gurdadas en los datos del navegador, y se ancarga que coincidan
var parcela_Almacenadas = localStorage.getItem("num_parcela");
if (parcela_Almacenadas == null || parcela_Almacenadas == "NaN") {
    num_parcela = num_parcela;
} else {
  num_parcela = parseInt(parcela_Almacenadas);
}
//Indicar la cantidad de monedas en los datos del navegador y los compara
var monedas_Almacenadas = localStorage.getItem("num_monedas");
if (monedas_Almacenadas == null || monedas_Almacenadas == "NaN") {
  monedas = monedas;
} else {
  monedas = parseInt(monedas_Almacenadas);
}

$("#espacioMoneda").html(monedas); 

var HabitatCerdo_Guardado = localStorage.getItem("Habitat_comprados");
if (HabitatCerdo_Guardado == null || HabitatCerdo_Guardado == "NaN") {
  num_habitat = num_habitat;
} else {
  num_habitat = HabitatCerdo_Guardado
  mostrarHabitat();
  ejecutarHabitat();
  desactivarCompraHabitat();
}
$("#espacioMoneda").html(monedas); 

interfazSeleccionCultivo
  .find(".maiz")
  .find(".costo")
  .html("Costo: $" + costo_semilla);
interfazSeleccionCultivo
  .find(".maiz")
  .find(".tiempo")
  .html("Tiempo: " + tiempo_semilla + "s");
interfazSeleccionCultivo
  .find(".maiz")
  .find(".beneficio")
  .html("Beneficio: $" + beneficio_semilla);


function mostrarSeleccioSemillaMenu() {
  interfazSeleccionCultivo.addClass("mostrar");
  interfazSeleccionCultivo.find(".opcion-tipo-cultivo").addClass("esconder");
  if (monedas >= costo_semilla) {
    interfazSeleccionCultivo.find(".maiz").removeClass("esconder")
  }
}
function ocultarSeleccionSemillaMenu() {
  interfazSeleccionCultivo.removeClass("mostrar");
  
}
function mostrarMenuConfirmacion(){
  InterfazConfirmacion.addClass("mostrar");
}  
function ocultarMenuConfirmacion(){
  InterfazConfirmacion.removeClass("mostrar");
}

//FUNCIONES DE GUARDADO
function GuardarParcelas() {
  num_parcela = num_parcela+1;
  localStorage.setItem("num_parcela", num_parcela);
}
function GuardarMonedas(cantidadMonedas){
  localStorage.setItem("num_monedas", cantidadMonedas);
}
//TODO LO DE LOS ESTABLOS
//MOSTRAR
function MenuMostrarHabitat(){
  InterfazCompraMercado.addClass("mostrar");
}
//ESCONDER
function ocultarMenuHabitat() {
  InterfazCompraMercado.removeClass("mostrar");
}
//Gatilla la compra de establos
opcionComprarMercado.click(function() {
    MenuMostrarHabitat();
});
//compra el establo
opcionesCompraMercado.click(function() {
    if ($(this).hasClass("si")) {
      comprarHabitat();
      ocultarMenuHabitat();
    } else if ($(this).hasClass("no")) {
      ocultarMenuHabitat();
    } else {
    }
});

function comprarHabitat() {
    if (monedas >= 10000) {
        mostrarHabitat();
        ejecutarHabitat(); 
        monedas = monedas - 10000;
        GuardarMonedas(monedas);
        EspacioMoneda.html(monedas);
        EspacioMonedaMensaje.html("- $" + 10000);
        animacionMonedas();
        localStorage.setItem("Habitat_comprados", true);
        desactivarCompraHabitat();
      } else {
        MensajeAbajoUI.html("No hay suficientes monedas");
        animarBotonUI();
      }    
}
function ejecutarHabitat() {
  setInterval(function () {
    monedas = monedas + beneficio_cerdo;
    EspacioMoneda.html(monedas);
    EspacioMonedaMensaje.html("+ $" + beneficio_cerdo);
    animacionMonedas();
  },60*1000)

}
function mostrarHabitat() {
    HabitatCerdos.addClass("show");
}
  
function desactivarCompraHabitat() {
  opcionComprarMercado.hide();
}