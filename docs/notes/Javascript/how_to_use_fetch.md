# Fetch 基本語法結構

使用`async / await` 處理非同步操作，可以看到以下程式碼，**看起來就像是同步的程式碼**，在需要處理多個非同步操作的時候，**易讀性佳**、保持程式碼上下文的一致性，減少程式碼風格切換。錯誤處理使用`try{ }catch{ }`。本質上還是使用 Promise 機制

```js
async function getApi() {
  let url = "https://jsonplaceholder.typicode.com/posts/1";
  let options = { method: "GET" };

  try {
    let response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    let responseData = response.json();
    console.log(responseData);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("不管成功或失敗，最後都會進finally");
  }
}
```

使用 Promise 的`.then()` 和 `.catch( )`鍊式寫法，容易造成`callback hell`，可讀性差。使用`.catch()` 處理錯誤

```js
function getApi2() {
  let url = "https://jsonplaceholder.typicode.com/posts/1";
  options = { method: "GET" };

  fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((responseData) => {
      console.log(responseData);
      //todo...
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("不管成功或失敗，最後都會進finally");
    });
}
```

POST 方法，要傳輸的資料放在 body，並且要轉成 JSON 字串，`headers`也要設定`Content-Type`，回傳的資料格式

```js
async function postApi() {
  let url = "https://jsonplaceholder.typicode.com/posts";
  let options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      user: "Tino",
      title: "My Title",
      content: "My Content",
    }),
  };
  try {
    let response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    let responseData = await response.json();
    console.log(responseData.title);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("不管成功或失敗，最後都會進finally");
  }
}
```
