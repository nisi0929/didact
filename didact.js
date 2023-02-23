//  これで後にDOM要素となるオブジェクトを作成する
const createElement = (
  type,
  props,
  ...children
) => {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) =>
        typeof child === "object"
          ? child
          : createTextElement(child)
      ),
    },
  }
}
// オブジェクトでない要素はTEXT＿ELEMENETとして処理
const createTextElement = (text) => {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  }
}

const Didact = {
  createElement,
}

const element = Didact.createElement(
  "div",
  { id: "foo" },
  Didact.createElement("a", null, "bar"),
  Didact.createElement("b")
)
console.log(element)

/** @jsx Didact.createElement */
const element2 = (
  <div id="foo">
    <a>bar</a>
    <b />
  </div>
)
console.log(element2)
