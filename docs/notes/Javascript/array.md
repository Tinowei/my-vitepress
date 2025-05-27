# Array

- old school

```js
var arr = new Array();
arr[0] = "a";
arr[1] = "b";
arr[2] = "c";

arr.length; // 3
```

- new -> Array literal (陣列實字)

```js
var arr = [];
arr[0] = "a";
arr[0] = "b";
arr[0] = "c";

a.length; //3
```

```js
var arr = ["a", "b", "c"];
arr.length; //3
```

- `ArrayName.length`可以取得陣列長度，_也可以被覆寫_

```js
var arr = ["a", "b", "c"];
arr.length; //3

arr.length = 1;
console.log(arr); //["a"]

arr.length = 3;
console.log(arr); //["a",undefined,undefined]
```

## 陣列的種類

**_一維陣列_**

```js
let array1 = [];
let array2 = new Array();
let array3 = new Array(10);

let computer = ["CPU", "DRAM", "SSD", "Mouse"]; //直接宣告literal
let comp = new Array("CPU", "DRAM", "SSD", "GPU");
```

**_二維陣列_**

```js
let products = [
  ["CPU", "DRAM", "SSD", "Mouse"],
  ["BMW", "Benz", "Audi", "Lexus"],
  ["Apple", "Banana", "Cherry"],
];
```

## 迭代 Array

**_用 for 迭代陣列（老式）_**

```js
let cars = ["BMW", "Benz", "Audi", "Lexus"];
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}
```

**_用 forEach 迭代陣列（首推）_**

```js
let cars = ["BMW", "Benz", "Audi", "Lexus"];
cars.forEach(function (car, index) {
  console.log(index, car, typeof car);
});
//或是arrow function
cars.forEach((car, index) => {
  console.log(index, car, typeof car);
});
```

**_用 for...of 迭代陣列_**

```js
const fruits = ["Apple", "Mango", "Cherry"];
for (const fruit of fruits) {
  console.log(fruit);
}
//替for...of加上索引
for (const [index, fruit] of fruits.entries()) {
  console.log(`${index},${fruit}`);
}
//[0,'Apple'],[1,'Mango']...
```

- `entries()` 是 JavaScript 陣列（Array）原型上的一個方法。它返回一個陣列迭代器（Array Iterator），該迭代器包含陣列中每個索引/值對的陣列。每個陣列中的元素包含兩個值，分別是索引和相應的元素值。而不需要額外的索引變數。在實際應用中，`entries()` 常用於迭代陣列的鍵/值對。
  **_動態新增 Array 元素 -> push()_**

```js
let friends = [];
let person1 = {
  id: 1,
  name: "kevin",
  email: "kevin@gmail.com",
};
let person2 = {
  id: 2,
  name: "mary",
  email: "mary@gmail.com",
};

//新增
friends.push(person1);
friends.push(person2);
friends.push(person1, person2);
```

## 該如何辨別某個變數是物件，還是陣列呢?

`Array.isArray()`  是可以協助我們的方法。如果是陣列，會回傳  `true`；但若是一般物件，則會回傳  `false`。舉例來說：

```js
Array.isArray([1, 2, 3]); // true
Array.isArray({ foo: 123 }); // false
```

我們也可以透過  `Object.prototype.toString()`  的方法幫助我們辨別陣列、函式與一般物件。

```js
const arr = [1, 2, 3];
const fn = () => {
  return 123;
};
const obj = { foo: 123 };

console.log(Object.prototype.toString.call(arr)); // [object Array]
console.log(Object.prototype.toString.call(fn)); // [object Function]
console.log(Object.prototype.toString.call(obj)); // [object Object]
```

**_補充_**

- `javascript`的 array 可以存多種資料嗎？
  - `javascript`中的同一個`array`，可以存放多種的資料型態，但不建議
- 長度可以隨時增加嗎？
  > 可以，當有一個`array`var arr=['a',b','c'];時，`arr.length`為 3，此時當我想在`index`5 的位置增加資料，`arr[5]='f'`
  > output 為 `["a","b","c",undefined,undefined,"f"]`
- 如何在`array`末端增加元素？
  - arrayName.push( ) ;
- 如何移除最後一個元素？
  - arrayName.pop( ) ;
- 如何移除`array`首個元素 ?
  - arrayName.shift( ) ;
- 如何在`array`的開頭新增一個或多個元素？
  - arrayName.unshift( 1) ;
    - 在開頭新增元素 1
  - arrayName.unshift(-2,-1,0) ;
    - 在開頭新增 -2,-1,0
