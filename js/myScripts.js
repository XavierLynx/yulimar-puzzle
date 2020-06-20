pivote = "id34";

function mover(pieza) {
    z = parseInt(pieza.slice(2));
    t = parseInt(pivote.slice(2));
    d = Math.abs(z - t);

    _pieza = document.getElementById(pieza);
    _pivote = document.getElementById(pivote);
    _cln_pieza = _pieza.cloneNode(true);
    _cln_pivote = _pivote.cloneNode(true);

    if (d == 1 || d == 10) {

        _pivote.replaceWith(_cln_pieza);
        _pieza.replaceWith(_cln_pivote);

        _cln_pieza.id = _pivote.id;
        _cln_pivote.id = _pieza.id;

        _pieza = _cln_pieza;
        _pivote = _cln_pivote;

        pivote = pieza;
    }
}

function juegoNuevo() {
    piezas = ["id11","id12","id13","id14","id21","id22","id23","id24","id31","id32","id33","id34"];
    
    for (let i = 0; i < 1000; i++) {
        var x = Math.floor((Math.random() * 12) + 0);
        mover(piezas[x]);
    }
}