### 在 JavaScript 當中，==、=== 與 Object.is()的區別

> `==` 是鬆散比較、 `===` 是嚴格比較、 `Object.is()` 是同值比較

`==` 在比較之前會強制轉型別 → 如字串轉數字，因此使用 `==` 時 undefined 會等於 null ，雖然兩者根本不同型別不同值

```jsx
console.log(1 == "1"); // true
console.log(0 == false); // true
console.log(undefined == null); // true
```

`===` 背後不強制轉型，型別不同就是 false

```jsx
+0 === -0;
// true
Object.is(+0 === -0);
// false
```

`Objectis()`

```jsx
console.log(Object.is(+0, -0)); // false
console.log(Object.is(NaN, NaN)); // true
```

- Object.is() 的比較邏輯是「**嚴格相等且處理一些例外（如 NaN）**」。
- 它跟 === 在物件上的行為是一樣的（都是看參考記憶體位置）

### JS 大補帖

- 開發時比起 `==` 請使用 `===` 更安全
- 比較 `0` 與 `-0` 時 `===` 會回傳 **true 此時要使用 Object.is()**
- 比較 `NaN` 與 `NaN` 時 `===` 會回傳 **false 此時要使用 Object.is()**
- 判斷是不是 NaN 可以使用 **`Number.isNaN()`**這個方法 → 簡化 `isNaN(n)`
- `Object.is({},{})` → false ，因為指向的記憶體位置不一樣
- 在使用 new Object() 或 {} 建立物件時，JavaScript 會在記憶體中開一個新的空間來儲存這個物件，也就是產生一個新的「物件地址」（reference）。當我們透過變數來操作這個物件時，實際上是讓變數指向這個記憶體位置因此，即使兩個物件內容看起來完全一樣，只要它們是分別建立的，指向的是不同的記憶體位址，那麼在 Object.is(obj1, obj2) 中，就會回傳 false，因為兩者不是「同一個物件」。
