// common variables of id elements
const triangleBtnElement= document.getElementById('triangle-btn');
const rectangleBtnElement= document.getElementById('rectangle-btn');
const parallelogramBtnElement= document.getElementById('parallelogram-btn');
const rhombusBtnElement= document.getElementById('rhombus-btn');
const pentagonBtnElement= document.getElementById('pentagon-btn');
const ellipseBtnElement= document.getElementById('ellipse-btn');
const addCalculation = document.getElementById('add-calculation');

// calculation of triangle
triangleBtnElement.addEventListener('click', function() {
    const triangleValueOfB = getInputValue('triangle-b-input');
    const triangleValueOfH = getInputValue('triangle-h-input');
    // validation check
    if(isNaN(triangleValueOfB) || isNaN(triangleValueOfH)) {
        alert('Invalid Input. Please type numbers!')
    }
    else {
        const calculationOfTriangleArea = (0.5 * triangleValueOfB * triangleValueOfH).toFixed(2);
        const newDiv = document.createElement('div');
        const methodsTitle = getTitleName('triangle-title');
        // create new element
        newDiv.innerHTML = 
        `
            <div class="grid grid-flow-col grid-cols-6 text-left items-center justify-between mt-5">
                <p class="col-span-2 font-bold">${methodsTitle}</p>
                <p class="col-span-2"><span id="triangle-convert-value">${calculationOfTriangleArea}</span><span id="triangle-convert-text">cm</span><sup>2</sup></p>
                <button id="triangle-convert-btn" class="col-span-2 bg-[#1090D8] px-3 py-2 text-white font-bold rounded-md text-base">Covert to m<sup>2</sup></button>
            </div>
        `
        // append this element to new div when calculate like push
        addCalculation.appendChild(newDiv);
        // convert centemeter to meter value using button & disable button
        document.getElementById('triangle-convert-btn').addEventListener('click', function() {
            convertCentemeterToMeter(calculationOfTriangleArea, 'triangle-convert-value', 'triangle-convert-text');
            const convertBtn = document.getElementById('triangle-convert-btn');
            // disable the convert button
            disableBtn(convertBtn);
        })
        // disable the calculate button
        disableBtn(triangleBtnElement);
    }
})
// calculation of rectangle
rectangleBtnElement.addEventListener('click', function() {
    const rectangleValueOfW = getInputValue('rectangle-w-input');
    const rectangleleValueOfI = getInputValue('rectangle-i-input');
    // validation check
    if(isNaN(rectangleValueOfW) || isNaN(rectangleleValueOfI)) {
        alert('Invalid Input. Please type numbers!')
    }
    else {
        const calculationOfRectangleArea = (rectangleValueOfW * rectangleleValueOfI).toFixed(2);
        const newDiv = document.createElement('div');
        const methodsTitle = getTitleName('rectangle-title');
        // create new element
        newDiv.innerHTML = 
        `
            <div class="grid grid-flow-col grid-cols-6 text-left items-center justify-between mt-5">
                <p class="col-span-2 font-bold">${methodsTitle}</p>
                <p class="col-span-2"><span id="rectangle-convert-value">${calculationOfRectangleArea}</span><span id="rectangle-convert-text">cm</span><sup>2</sup></p>
                <button id="rectangle-convert-btn" class="col-span-2 bg-[#1090D8] px-3 py-2 text-white font-bold rounded-md text-base">Covert to m<sup>2</sup></button>
            </div>
        `
        // append this element to new div when calculate like push
        addCalculation.appendChild(newDiv);
        // convert centemeter to meter value using button & disable button
        document.getElementById('rectangle-convert-btn').addEventListener('click', function() {
            convertCentemeterToMeter(calculationOfRectangleArea, 'rectangle-convert-value', 'rectangle-convert-text');
            const convertBtn = document.getElementById('rectangle-convert-btn');
            // disable the convert button
            disableBtn(convertBtn);
        })
        // disable the calculate button
        disableBtn(rectangleBtnElement);
    }
})
// calculation of parallelogram
parallelogramBtnElement.addEventListener('click', function() {
    const parallelogramValueOfB = getInputValue('parallelogram-b-input');
    const parallelogramValueOfH = getInputValue('parallelogram-h-input');
    // validation check
    if(isNaN(parallelogramValueOfB) || isNaN(parallelogramValueOfH)) {
        alert('Invalid Input. Please type numbers!')
    }
    else {
        const calculationOfParallelogramleArea = (parallelogramValueOfB * parallelogramValueOfH).toFixed(2);
        const newDiv = document.createElement('div');
        const methodsTitle = getTitleName('parallelogram-title');
        // create new element
        newDiv.innerHTML = 
        `
            <div class="grid grid-flow-col grid-cols-6 text-left items-center justify-between mt-5">
                <p class="col-span-2 font-bold">${methodsTitle}</p>
                <p class="col-span-2"><span id="parallelogram-convert-value">${calculationOfParallelogramleArea}</span><span id="parallelogram-convert-text">cm</span><sup>2</sup></p>
                <button id="parallelogram-convert-btn" class="col-span-2 bg-[#1090D8] px-3 py-2 text-white font-bold rounded-md text-base">Covert to m<sup>2</sup></button>
            </div>
        `
        // append this element to new div when calculate like push
        addCalculation.appendChild(newDiv);
        // convert centemeter to meter value using button & disable button
        document.getElementById('parallelogram-convert-btn').addEventListener('click', function() {
            convertCentemeterToMeter(calculationOfParallelogramleArea, 'parallelogram-convert-value', 'parallelogram-convert-text');
            const convertBtn = document.getElementById('parallelogram-convert-btn');
            // disable the convert button
            disableBtn(convertBtn);
        })
        // disable the calculate button
        disableBtn(parallelogramBtnElement);
    }
})
// calculation of rhombus
rhombusBtnElement.addEventListener('click', function() {
    const rhombusValueOfD1 = getInputValue('rhombus-d1-input');
    const rhombusValueOfD2 = getInputValue('rhombus-d2-input');
    // validation check
    if(isNaN(rhombusValueOfD1) || isNaN(rhombusValueOfD2)) {
        alert('Invalid Input. Please type numbers!')
    }
    else {
        const calculationOfRhombusArea = (0.5 * rhombusValueOfD1 * rhombusValueOfD2).toFixed(2);
        const newDiv = document.createElement('div');
        const methodsTitle = getTitleName('rhombus-title');
        // create new element
        newDiv.innerHTML = 
        `
            <div class="grid grid-flow-col grid-cols-6 text-left items-center justify-between mt-5">
                <p class="col-span-2 font-bold">${methodsTitle}</p>
                <p class="col-span-2"><span id="rhombus-convert-value">${calculationOfRhombusArea}</span><span id="rhombus-convert-text">cm</span><sup>2</sup></p>
                <button id="rhombus-convert-btn" class="col-span-2 bg-[#1090D8] px-3 py-2 text-white font-bold rounded-md text-base">Covert to m<sup>2</sup></button>
            </div>
        `
        // append this element to new div when calculate like push
        addCalculation.appendChild(newDiv);
        // convert centemeter to meter value using button & disable button
        document.getElementById('rhombus-convert-btn').addEventListener('click', function() {
            convertCentemeterToMeter(calculationOfRhombusArea, 'rhombus-convert-value', 'rhombus-convert-text');
            const convertBtn = document.getElementById('rhombus-convert-btn');
            // disable the convert button
            disableBtn(convertBtn);
        })
        // disable the calculate button
        disableBtn(rhombusBtnElement);
    }
})
// calculation of pentagon
pentagonBtnElement.addEventListener('click', function() {
    const pentagonValueOfP = getInputValue('pentagon-p-input');
    const pentagonValueOfB = getInputValue('pentagon-b-input');
    // validation check
    if(isNaN(pentagonValueOfP) || isNaN(pentagonValueOfB)) {
        alert('Invalid Input. Please type numbers!')
    }
    else {
        const calculationOfPentagonArea = (0.5 * pentagonValueOfP * pentagonValueOfB).toFixed(2);
        const newDiv = document.createElement('div');
        const methodsTitle = getTitleName('pentagon-title');
        // create new element
        newDiv.innerHTML = 
        `
            <div class="grid grid-flow-col grid-cols-6 text-left items-center justify-between mt-5">
                <p class="col-span-2 font-bold">${methodsTitle}</p>
                <p class="col-span-2"><span id="pentagon-convert-value">${calculationOfPentagonArea}</span><span id="pentagon-convert-text">cm</span><sup>2</sup></p>
                <button id="pentagon-convert-btn" class="col-span-2 bg-[#1090D8] px-3 py-2 text-white font-bold rounded-md text-base">Covert to m<sup>2</sup></button>
            </div>
        `
        // append this element to new div when calculate like push
        addCalculation.appendChild(newDiv);
        // convert centemeter to meter value using button & disable button
        document.getElementById('pentagon-convert-btn').addEventListener('click', function() {
            convertCentemeterToMeter(calculationOfPentagonArea, 'pentagon-convert-value', 'pentagon-convert-text');
            const convertBtn = document.getElementById('pentagon-convert-btn');
            // disable the convert button
            disableBtn(convertBtn);
        })
        // disable the calculate button
        disableBtn(pentagonBtnElement);
    }
})
// calculation of ellipse
ellipseBtnElement.addEventListener('click', function() {
    const ellipseValueOfA = getInputValue('ellipse-a-input');
    const ellipseValueOfB = getInputValue('ellipse-b-input');
    // validation check
    if(isNaN(ellipseValueOfA) || isNaN(ellipseValueOfB)) {
        alert('Invalid Input. Please type numbers!')
    }
    else {
        const calculationOfEllipseArea = (3.14 * ellipseValueOfA * ellipseValueOfB).toFixed(2);
        const newDiv = document.createElement('div');
        const methodsTitle = getTitleName('ellipse-title');
        // create new element
        newDiv.innerHTML = 
        `
            <div class="grid grid-flow-col grid-cols-6 text-left items-center justify-between mt-5">
                <p class="col-span-2 font-bold">${methodsTitle}</p>
                <p class="col-span-2"><span id="ellipse-convert-value">${calculationOfEllipseArea}</span><span id="ellipse-convert-text">cm</span><sup>2</sup></p>
                <button id="ellipse-convert-btn" class="col-span-2 bg-[#1090D8] px-3 py-2 text-white font-bold rounded-md text-base">Covert to m<sup>2</sup></button>
            </div>
        `
        // append this element to new div when calculate like push
        addCalculation.appendChild(newDiv);
        // convert centemeter to meter value using button & disable button
        document.getElementById('ellipse-convert-btn').addEventListener('click', function() {
            convertCentemeterToMeter(calculationOfEllipseArea, 'ellipse-convert-value', 'ellipse-convert-text');
            const convertBtn = document.getElementById('ellipse-convert-btn');
            // disable the convert button
            disableBtn(convertBtn);
        })
        // disable the calculate button
        disableBtn(ellipseBtnElement);
    }
})