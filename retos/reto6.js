function inBox(box) {
    // Iterar sobre las filas del array para localizar el `*`
    for (let i = 0; i < box.length; i++) {
        let row = box[i]; // Fila actual
        let indexOfStar = row.indexOf('*'); // Buscar si hay un `*` en la fila actual


        // Si encontramos el `*`
        if (indexOfStar !== -1) {
            // Verificar si está en los bordes:
            // Está en la primera o última fila
            if (i === 0 || i === box.length - 1) return false;
            // Está en la primera o última columna
            if (indexOfStar === 0 || indexOfStar === row.length - 1) return false;

            // Si está en una posición válida
            return true;
        }
    }
    // Si no encontramos un `*`, devolver false
    return false;
}



inBox([
    "###",
    "#*#",
    "###"
]) // ➞ true

inBox([
    "####",
    "#* #",
    "#  #",
    "####"
]) // ➞ true

inBox([
    "#####",
    "#   #",
    "#  #*",
    "#####"
]) // ➞ false

inBox([
    "#####",
    "#   #",
    "#   #",
    "#   #",
    "#####"
]) // ➞ false