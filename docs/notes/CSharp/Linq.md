# LINQ 查詢

(查詢)Query，是一種從資料來源擷取資料的運算式。

針對資料類型的不同，就會開發出不同的語言，例如，微軟有微軟的資料庫語法 MSSQL，Oracle 有他自己的查詢語法..，或 MongoDB 、nosql、 mySQL 、SQLlite…. ，各式各樣 SQL 版本裡面，查詢語法大不同，造成寫程式得困擾，因為所有的查詢語法都會依賴外部的 SQL Server，外部的不同， 會影響到程市中的查詢語法。

**LINQ 提供一致的模型來使用各種資料來源和格式的資料，從而簡化此情況。
→ 也就是說一種敘述，即可用在多種不同的資料庫上**

**（語法與資料庫之間的翻譯者就是 Provider） 資料庫若換掉，只要換中間的 Provider 即可**

結論：

> 至於為什麼要用 linq ? 因為我們所知道集合類型有很多種，例如 List、array 、Dictionary….，舉個例子，List 有他自己的查詢方式，如 List.FindAll() 、 List.FindLast() …. ，但這些都只能用在 List 上，array 不能用，而 linq 這個查詢語法，則可以用在所有有實作 IEnumerable 介面的類別身上。也就是說，在使用面上，我們若要達到查詢的目的，依據需求，我們便有兩種方式可以達成目的。這裡指的兩種方式就是，類別本身的方法，或是 linq 的擴充方法。

- **LINQ to Object**
  - 處理查詢記憶體、對陣列、list…
  - **Linq to object 的實作都在這個 Enumerable Class 中**
    - **這些方法都是【擴充方法】→ 擴充方法讓靜態方法偽裝成執行個體方法**
    - Q : 執行個體與靜態方法最大的差異是什麼？
      A : 存取路徑的不同  
      執行個體方法透過執行個體來存取（就是要 new 一個物件出來，透過物件來調用）
      靜態方法透過型別存取（就是直接用類別名稱及可調用）
- **LINQ to ADO.NET**
  - 處理資料庫
    - **LINQ to DataSet**
    - **LINQ to SQL**
    - **LINQ to Entities
      Linq to entities 的實作會在 Provider 裡，因為他要轉換成 SQL 語法** - create - update - ….
- **LINQ to XML**
  - 針對 XML 文件的查詢

## Linq 的敘述種類

- Query Expression
  - 類似 SQL 寫法
  - 涵蓋範圍小
    - Method Expression 寫得出來的 Query Expression 不一定寫得出來
- Method Expression
  - 以 C# Method 的形式呈現
  - Query Expression 寫得出來的 Method Expression 一定寫得出來
