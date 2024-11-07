//never return nothing
export function createError(): never {
  throw new Error('qualquer error');
}
createError();
