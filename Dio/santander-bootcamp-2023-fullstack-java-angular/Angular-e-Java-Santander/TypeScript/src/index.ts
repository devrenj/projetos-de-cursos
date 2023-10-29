/* 
Decorator
*/

import { error } from "console"

function exibirNome(target: any){
  console.log(target)
}

@exibirNome
class Funcionario {

}

@exibirNome
class Quincas {

}

/* 
Class Decorator
*/

function apiVersion(version: string) {
  return (target: any)=> {
    Object.assign(target.prototype, {__version: version, __name: 'Beto'})
  }
}
// @apiVersion("1.10")

// Attribute Decorator
function minLenght(length: number) {
  return (target: any, key: string) => {
    // console.log(target[key])
    let _value = target[key];
    // console.log(key)
    const getter = () => _value;
    const setter = (value: string) =>{
      if (value.length < length) {
        throw new Error (`Tamanho menor do que ${length}`)
      } else {
        _value = value;
      }
    }

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
    });
  }
}

class Api{
  @minLenght(10)
  name: string;

  constructor(name: string){
    this.name = name;
  }

}

const api = new Api('axbcdepogl');
console.log(api.name)


/* 
Attribute
Decorator
*/

