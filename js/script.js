const input = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

checkBtn.addEventListener("click", () => {
  if (!input.value.trim()) return alert("Please input a value");
  const userText = input.value;
  const text = userText.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversedText = text.split("").reverse().join("");
  result.textContent =
    text === reversedText
      ? `${userText} is a palindrome.`
      : `${userText} is not a palindrome.`;
});
