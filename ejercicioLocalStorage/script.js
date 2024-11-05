const inputText = document.getElementById('inputText');
const saveButton = document.getElementById('saveText');

window.onload = function () {
    const savedText = localStorage.getItem('userText');
    if (savedText) {
        inputText.value = savedText;  
    }
}

saveButton.addEventListener('click', function () {
    const userText = inputText.value;
    localStorage.setItem('userText', userText);  
    alert('Texto guardado');
});