export function consoleWithStyle(label, response) {
    console.log(`%c ${label}`, 'color: green; font-size: 20px', response ?? '');
}