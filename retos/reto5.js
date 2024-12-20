const shoes3 = [
    { type: 'I', size: 38 },
    { type: 'R', size: 36 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 43 }
]

const shoes2 = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'I', size: 38 },
    { type: 'I', size: 38 },
    { type: 'R', size: 38 }
]

const shoes = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 }
]


function organizeShoes(shoes) {
    const pairs = {}; // Objeto para almacenar conteo de botas por tipo y tamaño.

    // Contar botas por tipo y tamaño.
    for (const shoe of shoes) {
        const { type, size } = shoe;
        if (!pairs[size]) pairs[size] = { I: 0, R: 0 }; // Inicializar conteo para un tamaño.
        pairs[size][type]++; // Inicializar conteo para un tamaño.
    }

    console.log(pairs)

    const result = [];

    // Verificar cuántos pares se pueden formar por tamaño.
    for (const size in pairs) {
        const { I, R } = pairs[size];
        const pairsAvailable = Math.min(I, R); // Máximo número de pares disponibles.
        result.push(...Array(pairsAvailable).fill(Number(size))); // Agregar pares al resultado.
    }

    return result;
}

console.log(organizeShoes(shoes))


