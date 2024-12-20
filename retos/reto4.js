

function createXmasTree(height, ornament) {
    let tree;

    for (let i = 0; i < height; i++) {
        const board = "_".repeat(height - i - 1);
        const leaves = ornament.repeat(2 * i + 1);
        tree += board + leaves + board + "\n";
    }

    const treeTrunk = "_".repeat(height - 1) + "#" + "_".repeat(height - 1) + "\n";
    tree += treeTrunk + treeTrunk;

    return tree;
}

console.log(createXmasTree(5, "*"))
