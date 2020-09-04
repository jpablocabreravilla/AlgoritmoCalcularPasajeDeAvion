$(document).ready(function () {

    var DistanciaKm, DiasEstancia, VlrDescuento = 0;
    PrecioPorKm = 35.00, PorcentDescuento = 0.30;

    function validar() {
        if ($("#input_distancia").val() == 0 || ($("#dias_estancia").val()) == 0) {
            alert(" TODOS LOS CAMPOS SON NECESARIOS PARA DETERMINAR EL VALOR DEL PASAjE EN AVION. ACEPTA E INGRESALOS PORFAVOR! ");
        } else {
            Logica();
        }
    }

    function Logica() {
        DistanciaKm = Number($("#input_distancia").val());
        DiasEstancia = Number($("#dias_estancia").val());
        var PrecioNeto = DistanciaKm * PrecioPorKm;

        if (DistanciaKm > 1000 && DiasEstancia > 7) {
            VlrDescuento = (PrecioNeto * PorcentDescuento);
            var PrecioFinal = PrecioNeto - VlrDescuento;
        }
        else { PrecioFinal = PrecioNeto; }

        PrecioFinal = parseFloat(Math.round(PrecioFinal * 100) / 100).toFixed(2);

        $('#resultado').text("Precio Total : " + PrecioFinal + " $");
        $('#vlr-descuento').text("Descuento : " + VlrDescuento + " $");

    }
    $('#btn').on('click', function () { validar() });

});