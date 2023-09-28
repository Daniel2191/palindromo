
function Palindromo(palindromo){
    let array = cadena.split("");
    let reverse= array.reverse();

    return cadena == reverse.join("") ? "SI" : "NO"
}