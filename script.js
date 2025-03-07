function calculationIMC (){
    let weightValue = document.getElementById('weightInput').value;
    let heightValue = document.getElementById('heightInput').value/100;
    
    let calculator = weightValue / (heightValue * heightValue);

    if ( weightValue <= 0 || heightValue <= 0) {
        alert("Por favor, preencha ambos os campos com valores válidos!");
        return;
    }

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

   document.getElementById('weightTab').innerText= weightValue;
   document.getElementById('heightTab').innerText = heightValue;
   document.getElementById('resultTab').innerText = calculator.toFixed(2);
   document.getElementById('situationTab').innerText = situation;
}
