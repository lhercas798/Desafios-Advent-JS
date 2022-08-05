function contarOvejas(ovejas) {
const resultado = ovejas.filter( oveja =>oveja.name.toLowerCase().includes('n') &&
oveja.name.toLowerCase().includes('a') && oveja.color === 'rojo');
return resultado
}
