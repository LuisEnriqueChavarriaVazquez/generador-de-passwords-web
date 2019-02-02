(function() {
    var app = document.getElementById('app');
    var numeroCaracteres = document.getElementById('numero-caracteres');

    var configuracion = {
        caracteres: parseInt(numeroCaracteres.value),
        simbolos: true,
        numeros: true,
        mayusculas: true,
        minusculas: true
    }

    var caracteres = {
        simbolos: "% $ & / = ! ° _ * + ~ < > : ; - # { } [ ] ( ) | ¬ ? ",
        numeros: "1 2 3 4 5 6 7 8 9",
        mayusculas: "A B C D E F G H I J K L M N O P Q R S T V X Y Z",
        minusculas: "a b c d e f g h i j k l m n o p q r s t v x y z"
    }

    // Hacer que el programa sume un numero al presiona el boton.
    //Declaracion de los botones
    let buttonMinus = document.getElementById('button-menos-uno');
    let buttonPlus = document.getElementById('button-menos-uno');

    let mas, menos;

    var sumarRestar = (): void => {
        if ( == true) {
            configuracion.caracteres == configuracion.caracteres++;
        } else if (button.Plus.addEventListener('click') == true) {
            configuracion.caracteres == configuracion.caracteres--;
        }
    }

}())