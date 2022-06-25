function contarcolores(frase){
    frase = frase.replace(/^\s+|\s+$/, '');
     frase = frase.replace(/[ ]{2,}/gi, ' ');
      frase = frase.replace(/\n /,'\n');

}

let texto = '    rojo             verde      '
console.log(texto);
console.log(texto.length);

console.log();
