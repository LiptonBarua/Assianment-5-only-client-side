const cardArray =[];

function display(cardProduct){

  const tableBody = document.getElementById('table-container')
  
  tableBody.innerHTML = ''
 
  for(i =0; i< cardProduct.length; i++){
    const name1 = cardArray[i];
  
 
    const tr1 = document.createElement("tr")
    tr1.innerHTML = `
    <td>${(i+1)}</td>
    <td>${name1}</td>
    `;
    tableBody.appendChild(tr1)
  }
  
}
function addValue(element){
  element.disabled = true;
  
  element.style.backgroundColor = 'gray'
    const playerName =element.parentNode.children[0].innerText;
    cardArray.push(playerName)
    if (cardArray.length > 5) {
      alert('Only Five members are to be elected')
      return;
  }

  cardLength = cardArray.length;
   display(cardArray)
 
}


// .........................................
function calculationInputField(inputField){
  const inputCalculationField = document.getElementById(inputField);
  const inputCalculationValueString = inputCalculationField.value;
  const inputCalculationValue = parseFloat(inputCalculationValueString)

  return inputCalculationValue;
}

function elementId(elementId) {
  const textElement = document.getElementById(elementId);
  const textElementValueString = textElement.innerText;
  const textElementValue = parseFloat(textElementValueString);
  return textElementValue;
}

function setElementById(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue;
}

document.getElementById("btn-calculation").addEventListener('click', function(){
  const calculationField = calculationInputField('calculate-Field');
  if(Number.isNaN(calculationField) ||calculationField < 0){
    alert('Here the Number should be given in the Input Field');
    return;
}
  const name123 = calculationField*cardLength
  setElementById('Player-Expenses', name123)
})


document.getElementById('calcculate-total').addEventListener('click', function(){
  const playerExpenses = elementId('Player-Expenses')
  const managerInput = calculationInputField('Manager-input');
  const coechInput = calculationInputField('Coach-input')
  if(Number.isNaN(managerInput) || managerInput < 0 || Number.isNaN(coechInput) || coechInput < 0){
    alert('Here the Number should be given in the Input Field');
    return;
}
  const totalValue =playerExpenses+ managerInput+coechInput
  setElementById('total', totalValue)
})







