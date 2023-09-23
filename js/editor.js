const textContentElement = document.getElementById('my-text');
textContentElement.addEventListener('keyup', function () {
    // change textarea's Font-weight, Italic & Underline
    document.getElementById('bold-btn').addEventListener('click', function () {
        textContentElement.style.fontWeight = 'bold';
    })
    
    document.getElementById('italic-btn').addEventListener('click', function () {
        textContentElement.style.fontStyle = 'italic';
    })

    document.getElementById('underline-btn').addEventListener('click', function () {
        textContentElement.style.textDecoration = 'underline';
    })

    // change alignment of texts
    document.getElementById('left-align').addEventListener('click', function () {
        textContentElement.style.textAlign = 'left';
    })

    document.getElementById('center-align').addEventListener('click', function () {
        textContentElement.style.textAlign = 'center';
    })

    document.getElementById('right-align').addEventListener('click', function () {
        textContentElement.style.textAlign = 'right';
    })

    document.getElementById('justify-align').addEventListener('click', function () {
        textContentElement.style.textAlign = 'justify';
    })

    // change font-size, transform & color
    const fontSizeElement = document.getElementById('font-size');
    
    fontSizeElement.addEventListener('click', function () {
        const fontSize = fontSizeElement.value + 'px';
        textContentElement.style.fontSize = fontSize;
    })

    document.getElementById('uppercase-btn').addEventListener('click', function () {
        textContentElement.style.textTransform = 'uppercase';
    })

    const colorElement = document.getElementById('color-input');
    
    colorElement.addEventListener('input', function () {
        const colorValue = colorElement.value;
        // console.log(colorValue);
        textContentElement.style.color = colorValue;
    })
})