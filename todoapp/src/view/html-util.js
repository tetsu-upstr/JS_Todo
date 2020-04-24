/**
 * 特殊な記号に対するエスケープ処理
 * @param {string} str 
 */
export function escapeSpecialChars(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * HTML文字列からHTML要素を作成して返す
 * @param {string} html 
 */
export function htmlToElement(html) {
  const templete = document.createElement("template");
  templete.innerHTML = html;
  return templete.content.firstElementChild;
}

/**
 * HTML文字列からDOM Nodeを作成して返すタグ関数
 * テンプレートリテラルにタグづけします。
 * タグ関数には、第一引数に文字列リテラルの配列、
 * 第二引数に埋め込まれる値の配列が与えられます。
 * @return {Element}
 */
export function element(string, ...values) {
  // 関数reduce(配列, 値, 添字) 数値や文字を合計（連結）する
  const htmlString = string.reduce((result, str, i) => {
    // initialValueを提供しない代わりにi-1で[0]から連結
    const value = values[i - 1];
    if (typeof value === "string") {
      return result + escapeSpecialChars(value) + str;
    } else {
      return result + String(value) + str;
    }
  });
  return htmlToElement(htmlString);
}

/**
 * コンテナ要素の中身をbodyElementで上書きする
 * @param {Element} bodyElement コンテナ要素の中身となる要素
 * @param {Element} containerElement コンテナ要素
 */
export function render(bodyElement, containerElement) {
  // containerElementの中身を空にする
  containerElement.innerHTML = "";
  // containerElementの直下にbodyElementを追加する
  containerElement.appendChild(bodyElement);
}