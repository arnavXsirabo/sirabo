const textarea = document.querySelector("textarea");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const text = textarea.value.trim();

  if (text === "") {
    alert("Nothing to release.");
    return;
  }

  button.innerText = "Released ✓";

  setTimeout(() => {
    textarea.value = "";
    button.innerText = "Release";
  }, 1000);

  setTimeout(() => {
    textarea.value = "";
  }, 5000);
});
