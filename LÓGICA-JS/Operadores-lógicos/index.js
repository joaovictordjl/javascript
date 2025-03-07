/**
 && AND (E)
 || OR (OU)
  ! NOT (NÃO)
 */

  let numero1 = 10;
  let numero2 = 20;
  let total = 10;
  console.log((numero1 && numero2) === total);
  console.log((numero1 || numero2) === total);

  // VALORES QUE RETORNAM EM FALSO
  // SHORT-CIRCUIT

  /**
   * 0
   * Null
   * Nan
   * false
   * falsy
   */

  const a = 0;
  const b = null;
  const c = 'false'
  const d = false;
  const e = NaN;

  console.log(a || b || c || d || e);  //IRÁ RETORNAR O PRIMEIRO VALOR QUE FOR VERDADEIRO, EM SEQUÊNCIA

  

