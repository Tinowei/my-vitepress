# 九種資料與結構型別

### 用`typeof(a)` or `typeof a` 來檢視變數型別

1. 六種資料型別(Primitive Type 基本型別，用`typeof`來檢查)
   - undefined : 僅宣告變數，未指派值，系統自會指派值
     - 變數已宣告，但未賦值，或者物件屬性不存在
   - boolean : true or false
   - number :帶正負號的雙精度數字
   - string : 字串
   - BigInt : 大整數
   - Symbol : 符號
2. null : 空值 (特殊 Primitive 型別)
   - typeof(null) === "object"
     - null 不是代表沒有，是一種沒有的有，代表一種特殊的基礎型別
     - null 表示一個“空”或”不存在“的特殊值，**表示該變數的值被明確地設定為空或不存在**
3. Function : 函式方法()
4. Object : 物件(結構，常用於資料結構)

### typeof 型別判斷

> 說是型別判斷，但實際上應該是判斷值才對，因為 javascript 中，變數是沒有型別的，值才有。

```js
typeof true; // 'boolean'
typeof "Kuro"; // 'string'
typeof 123; // 'number'
typeof NaN; // 'number'
typeof {}; // 'object'
typeof []; // 'object'
typeof undefined; // 'undefined'
typeof window.alert; // 'function'
typeof null; // 'object'
```

- 為什麼`typeof NaN`是 number ?
  - `NaN` 代表 "Not a Number"，它是一種*特殊的數值*，用來表示一個在數學運算中無法確定結果的值。`NaN` 的型別是 `number`，這是因為 JavaScript 中的所有數值型別都屬於 `number`。
- 為什麼`typeof null` 是 object ?
  - JavaScript 的值是由一個表示「型別」的標籤，與實際內容的「值」所組合成的。
    - 物件 (Object) 這個型別的標籤是「0」，而且 null 代表的是空值 (NULL pointer，慣例上會以 0x00 來表示)，於是代表 null 的標籤就與物件的標籤搞混，而有著這樣錯誤的結果
- 如何判別是否為陣列 ?
  - `Array`  定義了  `isArray()`  方法
  ```js
  Array.isArray([]); // true
  Array.isArray([1]); // true
  Array.isArray(new Array()); // true
  Array.isArray(); // false
  Array.isArray({}); // false
  Array.isArray(null); // false
  Array.isArray(undefined); // false
  ```

**_討論_**

### undefined v.s. not defined v.s. null

##### null v.s. undefined

```js
let a = null; // 變數 a 的值是 null
let b; // 變數 b 的值是 undefined
```

```js
let c = null;
let d;
console.log(c); // null
console.log(d); // undefined
```

**類型：**

- `null` 是一個表示空值的物件，它的類型是 "object"。
- `undefined` 是一個表示未定義值的原始型別，它的類型是 "undefined"。

```js
console.log(typeof null); // "object"
console.log(typeof undefined); // "undefined"
```

**比較：**

- 在值比較時（使用 `==` 或 `===`），`null` 和 `undefined` 是相等的。
- 注意，使用嚴格相等運算符 `===` 進行比較時，它們的類型也需要相等。

```js
console.log(null == undefined); // true
console.log(null === undefined); // false
```

**\*結論**

> `null`表示變數是空值，而`undefined`表示變數未賦予值或物件屬性不存在。設計中，通常建議使用 `undefined` 來表示變數的初始狀態，而使用 `null` 來明確地將變數設定為空。

---

## 會被當成 false 的值

- false
- undefined
- null
- 0
- NaN
- 空字串("")

---

## 為什麼在設計 web 時，js 很常宣告都不給值？

- 因為在 web 上，通常資料都是動態生成的，會用動態的方式給值，很少會直接 assign 值，因此沒有必要先給他值，而是讓 js 自動賦予他一個初始值為 undefined，後面再來藉由賦值改變型態，而當我們知道變數的初始值應該是空值時，我們也可以在宣告時就給予他 null。
- 當你聲明一個變數而不賦予它一個明確的值時，該變數的初始值就是 `undefined`。這是因為 JavaScript 的設計理念之一是支持動態生成和修改數據，因此開發者可以在運行時動態分配值。
- 實際的開發中，有時候你確實不知道一個變數的初始值應該是什麼，或者你知道該變數將在稍後的代碼中被賦值。在這種情況下，讓變數的初始值為 `undefined` 是合理的。

```js
let username;
// 初始值為 undefined，因為我們還不知道用戶名是什麼
// 在某個地方後面的代碼中賦值
username = generateUsername();
// 假設有一個函式生成用戶名
```

- 這種方式使得變數的聲明更加靈活，同時不需要明確指定一個初始值。當然，如果你確實知道變數的初始值應該是空（而不是 `undefined`），那麼使用 `null` 也是可以的。這取決於代碼的設計和需求。

### 為何 JS 宣告變數不用精確型別 ?

因為在做網路資料程式時 web 的資料很常是從網路上來的，我們並不會知道他是物件還是陣列還是字串....等等，而在企業營運上，我們通常上版是一個很大的工程，這時候我們不可能因為資料型別的不同，而常常去改資料的型別，像是 C#強型別語言那樣，JS 任何型別都能吃，因此這就是 js 動態型別（Dynamic typing）在寫 web 上強大的地方。

---
