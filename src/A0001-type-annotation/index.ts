/* eslint-disable */
const nome: string = 'oi';
const idade: number = 3
const adult: boolean = true
const simbolo: symbol = Symbol('valor')


//array
let arrayNumber: Array<number> = [1,2,3]
let arrayString: Array<string> = ['1','2','3']
let arrayNumber2: number[] = [1,2,3]

//objects
let pessoa: {nome: string, idade:number, adulto?: boolean} = {
  nome: "oi",
  idade: 12,
  adulto: false
}
//function
function sun(x: number, y:number):number {
  return x + y
}
const soma2: (x:number, y:number) => number = (x, y) => x + y
