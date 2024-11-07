//don't use Object how type

//correct form
const object: {
  readonly keyA: string; //readonly ensure that value can't be edited
  readonly keyB: string;
  readonly keyC?: string;
} = {
  keyA: 'value A',
  keyB: 'value B',
};
console.log(object);
