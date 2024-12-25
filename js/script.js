const input = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

checkBtn.addEventListener("click", () => {
    if (!input.value) {
        alert("Please input a value");
        return;
    }
    const text = input.value.toLowerCase();
    const reversedText = text
        .split("")
        .reverse()
        .join("");
    result.textContent = text === reversedText ? "Yes" : "No";
});
