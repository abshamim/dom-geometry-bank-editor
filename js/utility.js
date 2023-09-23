// get input values and convert it to number & after submission clear the values
function getInputValue(inputId) {
    const inputValueElement = document.getElementById(inputId);
    const stringInputValue = inputValueElement.value;
    const inputValue = parseFloat(stringInputValue);
    inputValueElement.value = '';

    return inputValue;
}
// get title name for using creating document
function getTitleName(titleId) {
    const interactiveTitleElement = document.getElementById(titleId);
    const interactiveTitle = interactiveTitleElement.innerText;

    return interactiveTitle;
}
// calculate centemeter to meter and set the value to new document
function convertCentemeterToMeter(centemeterValue, cmValueId, cmTextId) {
    const convertCentemetertoMeter = (centemeterValue / 100).toFixed(2);
    const convertValueElement = document.getElementById(cmValueId);
    const convertTextElement = document.getElementById(cmTextId);
    convertValueElement.innerText = convertCentemetertoMeter;
    convertTextElement.innerText = 'm';
}

// disable the calculate button
function disableBtn(btnId) {
    btnId.setAttribute('disabled', true);
    btnId.style.backgroundColor = '#108fd84d';
    btnId.style.cursor = 'not-allowed';
}

// a function for getting value from input
function getInputValueUsingId (inputId) {
    const inputField = document.getElementById(inputId);
    const inputValueString = inputField.value;
    const inputValue = parseFloat(inputValueString);
    inputField.value = '';

    return inputValue;
}
// a function for getting value from text
function getTextValueUsingId (textId) {
    const textAmountId = document.getElementById(textId);
    const textAmountString = textAmountId.innerText;
    const textAmount = parseFloat(textAmountString);
    return textAmount;
}
// set text value total using function
function setTextTotalBalance (elementId, newTotal) {
    const TextElementId = document.getElementById(elementId);
    TextElementId.innerText = newTotal;
}