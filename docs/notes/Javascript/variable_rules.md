# 變數的命名規則

---

    必須使用字母、下底線( _ )、錢號（$）作為開頭
    後面接字元或數字
    區分大小寫

1. camel case 駝峰式命名法 小駝峰(lower camel case)
   `let lastName = 'Kevin';`
2. pascal case 大駝峰式命名法（upper camel case）
   `let LastName= 'John';`
3. Snake Case
   `以小寫單字開頭，若有多個單字則以底線區隔連接
`let last_name='John';``
4. Kebab Case
   `以小寫單字開頭，若有多個單字則以hyphen區隔連接`
   `此命明方法在JS中不合法、不被接受`
   `let last-name = 'John';`
5. constant 常數命名
   `全大寫方式`
   `const PI=3.14;`
   `const PURE_WEIGHT=10; (UPPER_SNAKE_CASE)`
6. Function 命名
   `Camel Case`

```js
//Function Declaration
//計算圓的週長:直徑× 圓周率
function getCircle(r) {
  return r * 2.0 * Math.PI;
}
```

1. Class 命名
   `Pascal Case`
   `class CalcRectangle{...}`
2. Boolean 命名
   `可用is或has開頭 ＋ Camel case`
   `let isVisible = true;`
3. Private 私有變數命名
   `底線開頭`
   `let _defaultSetting = 3000;`
4. Global 全域變數命名
   `全大寫`
   `let DOMAIN ="https://www.codemagic.com.tw";`

## 變數的範圍

- ES6 ECMA2015 前 沒有 區塊 block statement
- block statement 幫我們做好了區塊範圍，在範圍內的變數只要不是在 window 全域物件上，在外面是無法使用的
