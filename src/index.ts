import "./styles.css";

// not configurable and return actual value
const anObject = {};
Object.defineProperty(anObject, "aProperty", {
  value: "test"
});
const proxy = new Proxy(anObject, {
  get(_, p) {
    return Reflect.get(anObject, p);
  }
});

// not configurable but not return actual value
const anotherObject = {};
Object.defineProperty(anotherObject, "aProperty", {
  value: "test"
});
const proxy2 = new Proxy(anObject, {
  get(_, p) {
    return 1;
  }
});

document
  .querySelector<HTMLButtonElement>("#btn1")!
  .addEventListener("click", () => {
    // @ts-ignore
    console.log(proxy.aProperty);
  });

document
  .querySelector<HTMLButtonElement>("#btn2")!
  .addEventListener("click", () => {
    // @ts-ignore
    console.log(proxy2.aProperty);
  });
