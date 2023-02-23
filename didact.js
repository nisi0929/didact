/*
 これで後にDOM要素となるオブジェクトを作成する
後に出てくるelementはcreateElementでjavascriptにわかる形にされる
childrenに含まれる値はオブジェクトかそうでないかを見てそうでないならcreateTextElementを呼ぶ
 */
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

/*
このコメントアウトはjsxで書かれた記述をjsに直す際にDidact.createElementを使用してjsに直している
jsx記法を実際にトランスパイルしているのはbabelでブラウザで確認できるのはtext/babelでhtml内のscriptがこのファイルを読み込んでいるから
多分@babel/plugin-transform-react-jsxでjsxをjsに解釈している
ここを見ればわかりそう（https://babeljs.io/docs/babel-plugin-transform-react-jsx）
（ソースコード読むまではしてません）
 */
/** @jsx Didact.createElement */
const element = (
  <div id="foo">
    <a>bar</a>
    <b />
  </div>
)
console.log(element)
