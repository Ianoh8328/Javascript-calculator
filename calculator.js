function addInput(number) {
    document.getElementById("answer").value+=number;
}

function calculateResult() {
    const result = eval(document.getElementById('answer').value);
    document.getElementById('answer').value = result;
}
