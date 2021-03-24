const frase = "La mejor forma de predecir el futuro es creandolo"

//snake case//
console.log(frase.replace(/ /g, "_"))
//kebab case//
console.log(frase.replace(/ /g, "-"))
//vocales a mayuscula
console.log(frase.replace(/["a","e","i","o","u"]/g, function(frase) {return frase.toUpperCase()}))
//10 primeros caracteres
console.log(frase.substr(0,10))
//10 ultimos caracteres
console.log(frase.substr(-10))