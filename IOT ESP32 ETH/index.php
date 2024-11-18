<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practica ASR</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="contenedor">
        <div class="titulo">
            <h1>ENVIO Y RECEPCIÓN DE DATOS</h1>
        </div>
        <div class="subtitulo">
            <h4><i>ASR</i></h4>
        </div>
        <hr>

        <div class="rectangulo">

            <div class="grid-item">
                <h1>Descripción</h1>
                <ul>
                    <li>Implementación de seguridad de redes</li>
                    <li>Uso de servidor de páginas</li>
                </ul>
            </div>

            <div class="grid-item">
                <h4>Seleccione la opción y haga clic en enviar:</h4>
                <label for="variables">Variables: </label>
                <select name="color" id="color">
                    <option value="r" >rojo</option>
                    <option value="a">rojo</option>
                </select>
                <br><br>
                <label for="mensaje">Mensaje: </label>
                <textarea name="area_text" id="area_text" cols="20" rows="5" placeholder="Texto..."></textarea><br><br>
                <input type="submit" value="Enviar" class="enviar">
            </div>

            <div class="grid-item">
                <div class="borders">
                    <label for="resul">Resultado: </label>
                    <input type="text" name="resul" id="resul">
                    <label for="k1">K1(****):</label>
                    <input type="text" name="k1" id="k1">
                    <br>
                    <br>
                    <input type="submit" value="Salir" class="salir">
                </div>
            </div>
        </div>
    </div>
</body>

</html>
