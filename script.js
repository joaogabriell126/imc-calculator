function IMC (){
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value/100;
    
    let calculator = weight / (height * height);
    
   document.getElementById('result').value = calculator.toFixed(2);

    let situation =''

    if (calculator < 18.5) {
        situation = "Magreza";
    } else if (calculator >= 18.5 && calculator < 24.9) {
        situation = "Peso Normal";
    } else if (calculator >= 25 && calculator < 29.9) {
        situation = "Sobrepeso";
    } else if (calculator >= 30 && calculator < 39.9) {
        situation = "Obesidade";
    } else {
        situation = "Obesidade Grave";
    }

    document.getElementById("situation").innerText = `Situação: ${situation}`;
}
