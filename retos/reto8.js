function drawRace(indices, length) {
    let pista = ''; // Donde construiremos la representación completa.

    for (let i = 0; i < indices.length; i++) {
        let carril = Array(length).fill('~'); // Creamos un carril lleno de nieve.

        let renoPos;
        if (indices[i] > 0) {
            renoPos = indices[i] - 1; // Convertimos la posición 1-based a 0-based.
        } else if (indices[i] < 0) {
            renoPos = length + indices[i]; // Posición desde el final.
        }

        if (indices[i] !== 0) {
            carril[renoPos] = 'r'; // Colocamos al reno en la posición adecuada.
        }

        // Representamos el carril con el desplazamiento isométrico.
        pista += ' '.repeat(indices.length - i - 1) + carril.join('') + ` /${i + 1}\n`;
    }

    return pista.trim(); // Retornamos la pista final.
}

// Prueba el código con los ejemplos dados.
console.log(drawRace([0, 5, -3], 10));
console.log(drawRace([2, -1, 0, 5], 8));
console.log(drawRace([3, 7, -2], 12));