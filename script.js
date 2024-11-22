function convertToBinary() {
    const text = document.getElementById("inputText").value;
    const binary = text
        .split('')
        .map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))
        .join(' ');
    document.getElementById("outputText").value = binary;
}

function convertToText() {
    const binary = document.getElementById("outputText").value;

    if (!binary.trim()) {
        document.getElementById("inputText").value = "";
        return;
    }

    try {
        const text = binary
            .split(' ')
            .map(bin => String.fromCharCode(parseInt(bin, 2)))
            .join('');
        document.getElementById("inputText").value = text;
    } catch (error) {
        document.getElementById("inputText").value = "Invalid binary input!";
    }
}
