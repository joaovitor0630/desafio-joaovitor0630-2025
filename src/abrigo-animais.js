
let brinquedos = ['BOLA', 'LASER', 'CAIXA', 'NOVELO', 'SKATE'];

let animais = ['REX', 'MIMI', 'FOFO', 'ZERO', 'BOLA', 'BEBE', 'LOCO'];

let animal = {
  'REX': 'CÃO', 'BRINQUEDOSREX': ['RATO', 'BOLA'],
  'MIMI': 'GATO', 'BRINQUEDOSMIMI': ['BOLA', 'LASER'],
  'FOFO': 'GATO',  'BRINQUEDOSFOFO': ['BOLA','RATO', 'LASER'],
  'ZERO': 'GATO', 'BRINQUEDOSZERO': ['RATO', 'BOLA'],
  'BOLA': 'CÃO', 'BRINQUEDOSBOLA': ['CAIXA', 'NOVELO'],
  'BEBE': 'CÃO', 'BRINQUEDOSBEBE': [ 'LASER', 'RATO', 'BOLA'],
  'LOCO': 'JABUTI', 'BRINQUEDOSJABUTI': ['SKATE', 'RATO']
}
 let invalido = false

class validarAnimais{
  constructor(dadosinseridos, dadosvalidos){
    dadosinseridos.forEach(function(dado){
      if (dadosvalidos.includes(dadosinseridos) == false){
        return invalido = true
        console.log('invalido');
      }
    });
  }
}


  class adocao {
    constructor (brinq, ani){
      let resul = brinq.filter(function(item){
        return ani.includes(item)
      })
      console.log(resul);
    }
  }




class AbrigoAnimais {

  

  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    new validarAnimais(brinquedosPessoa1.concat(brinquedosPessoa2), brinquedos);
    new validarAnimais(ordemAnimais, animais);
    new adocao(brinquedosPessoa1, ordemAnimais);
    new adocao(brinquedosPessoa2, ordemAnimais);

  };
}
 

new AbrigoAnimais().encontraPessoas(['BOLA', 'LASER'], ['CAIXA'], ['REX', 'MIMI', 'FOFO', 'ZERO', 'BOLA', 'BEBE']);

export { AbrigoAnimais as AbrigoAnimais };














