const iptText: HTMLInputElement = document.getElementById(
  "iptText"
) as HTMLInputElement;
const btnValidate: HTMLButtonElement = document.getElementById(
  "btnValidate"
) as HTMLButtonElement;
btnValidate.addEventListener("click", () => {
  const words = iptText.value.split(" ");
  words.forEach((word: string) => {
    console.log(word);
  });
});
