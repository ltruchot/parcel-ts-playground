class Item {
  is: string[];
  constructor(public word: string) {
    this.is = [];
  }
}
const wordEntitites: { [s: string]: Item } = {
  is: new Item("is")
};
const words = new Proxy(wordEntitites, {
  set(o, p, v) {
    // console.log("set", p, o, v);
    o[p] = v;
    return true;
  },
  get(o, p) {
    // console.log("get", p, o);
    return o[p] && o[p].word;
  }
});

const iptText: HTMLInputElement = document.getElementById(
  "iptText"
) as HTMLInputElement;
const btnValidate: HTMLButtonElement = document.getElementById(
  "btnValidate"
) as HTMLButtonElement;
btnValidate.addEventListener("click", () => {
  const items = iptText.value.split(" ");
  items.forEach((item: string) => {
    if (!words[item]) {
      words[item] = new Item(item);
    }
  });
  console.log(words["sky"], wordEntitites["sky"].is);
});
