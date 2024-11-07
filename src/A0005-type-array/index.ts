// Aarray<T> - T[]
function multiplicateArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

const result = multiplicateArgs(1, 2, 3);

function concatenaString(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

function upcase(...args: string[]): string[] {
  return args.map((value, index) => value.toUpperCase());
}
