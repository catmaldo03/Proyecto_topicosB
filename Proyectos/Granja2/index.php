<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">
        <link rel="stylesheet" href="style.css">
        <title>Granja Clicker</title>
    </head>

    <body>
        <div class="fondoJuego">
            <div id="OpcionComprarMercado" class="comprar-mercado"></div>
            <div id="HabitatCerdos" class="habitat-cerdos"></div>
            <div id="InterfazCompraMercado" class="confirmar-compra-mercado">
                <div id="CerrarCompraMercado" class="cerrar">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                        <polygon style="" points="512,90.326 346.326,256 512,421.674 490.15,443.534 209.899,256 490.15,68.476 " />
                        <polygon style="" points="490.15,68.476 302.616,256 490.15,443.534 421.674,512 256,346.326 90.326,512 0,421.674   165.674,256 0,90.326 90.326,0 256,165.674 421.674,0 " />
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                    </svg>
                </div>
                <div class="texto">
                    ¿Quieres comprar un hábitat de cerdo por $4.000? (Genera un total de $100 por minuto).
                </div>
                <div class="botones">
                    <div class="boton no">
                        No Comprar
                    </div>
                    <div class="boton si">
                        Comprar
                    </div>
                </div>
            </div>

            <div id="InterfazConfirmacion" class="confirmar-compra-mercado">
                <div id="confirmarCierre" class="cerrar">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                        <polygon style="" points="512,90.326 346.326,256 512,421.674 490.15,443.534 209.899,256 490.15,68.476 " />
                        <polygon style="" points="490.15,68.476 302.616,256 490.15,443.534 421.674,512 256,346.326 90.326,512 0,421.674   165.674,256 0,90.326 90.326,0 256,165.674 421.674,0 " />
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                    </svg>
                </div>
                <div class="texto">
                    ¿Estás seguro de querer comprar una parcela por $100?.
                </div>
                <div class="botones">
                    <div class="boton no">
                        No Comprar
                    </div>
                    <div class="boton si">
                        Comprar
                    </div>
                </div>
            </div>

            <div id="interfazSeleccionCultivo" class="cultivo-seleccion">
                <div id="cerrarSeleccion" class="cerrar">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                        <polygon style="" points="512,90.326 346.326,256 512,421.674 490.15,443.534 209.899,256 490.15,68.476 " />
                        <polygon style="" points="490.15,68.476 302.616,256 490.15,443.534 421.674,512 256,346.326 90.326,512 0,421.674   165.674,256 0,90.326 90.326,0 256,165.674 421.674,0 " />
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                    </svg>
                </div>
                <div class="arriba">
                    Selecciona un Cultivo
                </div>
                <div class="debajo">
                    <div class="opcion-tipo-cultivo maiz">
                        <div class="descripciones-tipo-cultivo">
                            <div class="nombre">Maíz</div>
                            <div class="costo">Costo: $50</div>
                            <div class="tiempo">Tiempo: 1.4 minutos</div>
                            <div class="beneficio">Beneficio: $60</div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="interfazParcela" class="interfazParcela">
                <div class="esconder espacioParcelaGuardado">
                    <div title="Listo para Plantar" class="espacioParcela parcela lista"></div>
                </div>
            </div>

            <div class="UIInterfaz">
                <div class="monedas">
                    <div class="emblema"></div>
                    <div class="texto">
                        <span>$</span><span id="espacioMoneda"></span>
                    </div>
                    <div id="EspacioMonedaMensaje" class="mensaje"></div>
                </div>
            </div>

            <div class="InterfazMensajeUI">
                <div id="InterfazMensajeUI" class="mensaje"></div>
            </div>
        </div>
        <script src="script.js"></script>
    </body>
</html>