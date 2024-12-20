function createFrame(names) {
    const maxLength = Math.max(...names.map(name => name.length));
    const border = '*'.repeat(maxLength + 4);
    const lines = names.map(name => `* ${name.padEnd(maxLength)} *`);
    const frame = [border, ...lines, border];
    return frame.join('\n');
}

console.log(createFrame(['midu', 'madeval', 'educalvolpz']));