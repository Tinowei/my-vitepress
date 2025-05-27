# 物件的定義

> C#中的物件，是由欄位、屬性、方法組合而成
> JS 物件是由 properties 集合、function() 組合而成

- property 除了指定 value 外，還可以指定 function，就變成熟悉的 method
- 早期以來 JS 是 prototype-base 語言，沒有 class 關鍵字，而是以 function 來替代 class
- 直到 ECMA2015 才支援 class 關鍵字，但涉及瀏覽器相容性問題，例如 IE 不支援

**Object Literal**

```js
var person = { name: "Kevin", age: 32, height: 175, weight: 64 };
//直接指派值給變數即為Literal，但如果用初始化方式就不是
console.log(person);

var person = {
  name: "Kevin",
  age: 32,
  height: 175,
  weight: 64,
  bmi: function () {
    //object literal語法需要用this才能存取到本身屬性
    return this.weight / (this.height / 100) ** 2;
  },
  //bmi是屬於method
};
console.log(person);
console.log(person.bmi());
```

## 物件及屬性

- old school

```javascript
var person = new Object();
person.name = "Kuro";
person.job = "Front-end developer";
person.sayName = function () {
  alert(this.name);
};
```

- new
  - Object literal (物件實字)，類似`json`格式的核心語法

```javascript
var person = {
  name: "Kuro",
  job: "Front-end developer",
  sayName: function () {
    alert(this.name);
  },
};
```

## 屬性的存取

- 用 `.` 存取

```javascript
var person =  {
	name:'Tino',
	job: 'Student',
	sayName: fuction() {
		alert(this.name);
	}
};
person.name;   //'Tino'
person.sayName; // 'Tino'
```

- 用`[]`存取
  - 當屬性名稱是數字或是不合法  (如帶有**空白的字串或是數字**)的名稱時非常有用
  - 第二種方式常用於屬性的名稱來自網路資料， 例如 JSON ，事後動態帶入;而非事先存在， 或不知屬性名稱，故無法使用第一種方式

```javascript
var person =  {
	name:'Tino',
	job: 'Student',
	sayName: fuction() {
		alert(this.name);
	}
};

person["name"];    //'Tino'
person["sayName"]();//'Tino'
```

```javascript
var ob1={
	"001"="Hello"
}
ob1.001; //SyntaxError:Unexpected number

ob1["001"];  // "Hello"
```

## 存取物件屬性 names 與 values

回傳皆是 Array

- Object.keys(物件)
  - 取得所有 key 名稱
- Object.values(物件)
  - 取得所有 value 名稱

### Add a property

- use `=` to assigned;

```javascript
var obj = {};
obj.name = "Object";

obj.name; // 'Object'
```

### Delete property

- `delete` obj.name ;

```js
var obj = {};
obj.name = "Object";
obj.name; // 'Object'
delete obj.name;
obj.name; // 刪除屬性後變成 undefined
```

- 要確認屬性是否存在時，可以去看他印出來的值是否為 undefined
- `in`  運算子 與  `hasOwnProperty()`  也是一種方法

```js
var ob1 = {
  name: "Tino",
};

//in
console.log("name" in ob1); //true
console.log("value" in ob1); //false

//hasOwnProperty()
ob1.hasOwnProperty("name"); //true
ob1.hasOwnProperty("value"); //false
```

## Array V.S Object

**_差異性_**

> 陣列可以用 foreach 迭代，物件沒辦法用迭代！
> 因此在執行 foreach 之前要先判斷此資料結構是否是陣列，可以使用`Array.isArray(array_name)`來判斷

### Array 與 Object 的混合-觀念

- 一般來說設計上，一個資料會以陣列包物件的結構較佳，因為陣列才有許多方法可以調用，例如迭代，而物件沒有。

```js
let allCities = [
  { id: "taipei", name: "台北" }, //Object1
  { id: "taoyuan", name: "桃園" }, //Object2
  { id: "taichung", name: "台中" }, //Object3
];
```

- 但是陣列包物件有一個致命缺陷，當資料有多版本問題時無法得知是什麼日期。
- 因此有時會設計成最外層是物件，裡面的每個屬性也是物件，但是主要資料會用物件包陣列的方式來呈現，這樣也同樣能使用陣列的特性來操作資料。

```js
	let cityArray = [
	{ name: 'taipei',
	  ch_name: '台北',
	  districts: [
		{ id: 'taipei01', district: '中正區' },
		{ id: 'taipei02', district: '萬華區' },
		{ id: 'taipei03', district: '信義區' }] },

	{ name: 'taoyuan',
	  ch_name: '桃園',
	  districts: [
		{ id: 'taoyuan01', district: '桃園市' },
		{ id: 'taoyuan02', district: '八德市' },
		{ id: 'taoyuan03', district: '中壢市' }] },

	{...}
	];
```

```js
//確診,死亡,治癒
let virus = {
  Taiwan: [41, 1, 12],
  China: [80134, 2914, 44595],
  America: [9665, 146, 694],
};
//缺點：資料的可讀性非常差，若沒有了註解，則不知道資料所代表的意義
```
