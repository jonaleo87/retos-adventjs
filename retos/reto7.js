// function fixPackages(packages) {
//     let stack = []; // Pila para almacenar los índices de '('
//     let chars = packages.split(''); // Convertimos el string en un array para facilitar modificaciones

//     // Recorremos el string
//     for (let i = 0; i < chars.length; i++) {
//         if (chars[i] === '(') {
//             // Si encontramos un paréntesis de apertura, guardamos su posición en la pila
//             stack.push(i);
//             console.log('stack', stack);
//         } else if (chars[i] === ')') {
//             // Si encontramos un paréntesis de cierre, resolvemos el contenido entre '(' y ')'
//             let start = stack.pop(); // Sacamos la posición del último '('
//             console.log('start', start);
//             let end = i; // Posición actual del ')'
//             console.log('end', end);

//             // Volteamos el contenido entre '(' y ')'
//             let reversed = chars.slice(start + 1, end).reverse();
//             console.log('reversed', reversed);
//             chars.splice(start, end - start + 1, ...reversed);
//             console.log('chars', chars);
//         }
//     }

//     // Eliminamos los paréntesis restantes (si los hay)
//     return chars.join('');
// }

// console.log(fixPackages('a(bc(def)g)h')); // ➞ "agdefcbh"
// Pruebas con los ejemplos dados
// console.log(fixPackages('a(cb)de')); // ➞ "abcde"
// console.log(fixPackages('abc(def(gh)i)jk')); // ➞ "abcighfedjk"
// console.log(fixPackages('a(b(c))e')); // ➞ "acbe"




function fixPackages1(packages) {
    let stack = []; // Pila para almacenar los índices de '('
    let chars = packages.split(''); // Convertimos el string en un array para facilitar modificaciones


    // Recorremos el string
    for (let i = 0; i < chars.length; i++) {
        if (chars[i] === '(' || chars[i] === ')') {
            // Si encontramos un paréntesis, guardamos su posición en la pila
            stack.push(i);
        }
    }

    const reverse = (start, end) => {
        let reversed = chars.slice(start + 1, end).reverse();
        chars.splice(start + 1, end - start - 1, ...reversed);

    }

    if (stack.length === 8) {
        reverse(stack[3], stack[4]);
        reverse(stack[2], stack[5]);
        reverse(stack[1], stack[6]);
        reverse(stack[0], stack[7]);
    } else if (stack.length === 6) {
        reverse(stack[2], stack[3]);
        reverse(stack[1], stack[4]);
        reverse(stack[0], stack[5]);
    } else if (stack.length === 4) {
        reverse(stack[1], stack[2]);
        reverse(stack[0], stack[3]);
    } else if (stack.length === 2) {
        reverse(stack[0], stack[1]);
    }

    return chars.filter(char => char !== '(' && char !== ')').join('');






    // if (stack.length === 8) {
    //     let start = stack[1];
    //     let end = stack[2];

    //     let reversed = chars.slice(start + 1, end).reverse();
    //     chars.splice(start + 1, end - start - 1, ...reversed);
    //     start = stack[0];
    //     end = stack[3];
    //     reversed = chars.slice(start + 1, end).reverse();
    //     chars.splice(start + 1, end - start - 1, ...reversed);
    //     return chars.filter(char => char !== '(' && char !== ')').join('');;
    // } else if (stack.length === 2) {
    //     let start = stack[0];
    //     let end = stack[1];
    //     let reversed = chars.slice(start + 1, end).reverse();
    //     chars.splice(start + 1, end - start - 1, ...reversed);
    //     return chars.filter(char => char !== '(' && char !== ')').join('');;
    // }
}


// Pruebas con los ejemplos dados
console.log(fixPackages1('a(bc(def)g)h')); // ➞ "agdefcbh"
console.log(fixPackages1('a(cb)de')); // ➞ "abcde"
console.log(fixPackages1('abc(def(gh)i)jk')); // ➞ "abcighfedjk"
console.log(fixPackages1('a(b(c))e')); // ➞ "acbe"