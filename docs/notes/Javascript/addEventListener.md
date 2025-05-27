# Event 事件 - 產生互動

> 指在 Web 頁面上發生的事情，這些事情可以是用戶的操作（如點擊按鈕、提交表單、移動滑鼠等）或其他引發的行為（如網頁的載入、時間的流逝等）。在網頁開發中，事件是一種用於處理交互和響應的概念。

> 當特定的事件發生時，瀏覽器就會生成一個事件對象（Event Object），可以通過 JavaScript 來監聽這些事件並執行相應的操作。事件可以來自多種來源，例如用戶的操作、瀏覽器的內部行為、或是外部的 API 請求。

- 在 HTML attribute 屬性指定事件處理器
- 用 JS 指定 HTML 元素 attribute 屬性的事件
- **_使用 addEventListener()方法註冊是較佳的寫法_**

## addEventListener()

> `addEventListener` 是 JavaScript 中用來監聽事件的方法，允許你指定一個事件（比如點擊、鍵盤按下、頁面載入等），以及當該事件發生時要執行的函式。

```js
要監聽事件的 DOM 元素.addEventListener(監聽的事件類型，例如 "click"、"keydown"、"change",事件發生時要執行的函式(事件處理器或回調函式))

target.addEventlistener(type,listener[,options]);
```

**_在 function 中，通常會傳一個參數近來叫做 event -> `function(e){}`_**

#### 事件名稱

1. click
2. load
   1. 當有用到外部資源時，想確保外部資源全部都載入才執行動作，可以用 load 事件包裹

### removeEventListener()

> 事件移除方法
> 移除也是要帶兩個參數，原因在於 JS 是可以在同一個 tag 上註冊多個事件，因此需要明確指出需要刪除哪一個

```js
btn3.addEventListener("mouseover", displayMsg);
function displayMsg() {
  alert("Mouse Over事件觸發");
}

btn3.removeEventListener("mouseover", displayMsg);
```
