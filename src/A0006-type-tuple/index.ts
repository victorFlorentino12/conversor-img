const dadosCliente1: [number, string] = [1, 'victor'];
const dadosCliente2: readonly [number, string, ...string[]] = [1, 'victor'];
dadosCliente1[0] = 100; // you just can change the value if be same type
