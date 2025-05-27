# IQueryable vs IEnumerable

**IQueryable 和 IEnumerable 都是 C# 中用於查詢資料的介面,但它們在實作原理和使用情境上有所不同,尤其是在使用 Entity Framework Core 時。**

IEnumerable

- 表示一般的集合,可以進行 foreach 迭代運算。
- 在執行 IEnumerable 查詢時,整個查詢運算會在用戶端記憶體中執行。
- IEnumerable 查詢無法利用資料庫優化功能,效能可能較差。

IQueryable

- 表示可查詢的資料來源,如資料庫或 XML 文件等。
- 在執行 IQueryable 查詢時,查詢運算會延遲到執行時才在伺服器端執行。
- IQueryable 可以利用資料庫的查詢優化功能,效能通常較佳。
- 使用 LINQ to Entities 時,Entity Framework Core 會將 IQueryable 查詢轉換為相對應的 SQL 語句。

舉例來說,假設我們有一個 BlogPost 實體類別,並使用 Entity Framework Core 存取資料庫:

```csharp
// IEnumerable 範例
var posts = context.BlogPosts.ToList(); // 將所有 BlogPost 載入記憶體
var recentPosts = posts.Where(p => p.PublishedDate > DateTime.Today.AddDays(-7)); // 在記憶體中過濾

// IQueryable 範例 
var recentPosts = context.BlogPosts.Where(p => p.PublishedDate > DateTime.Today.AddDays(-7)); // 產生 SQL 查詢
```

在第一個範例中,我們先使用 ToList() 將所有 BlogPost 載入記憶體,然後在記憶體中過濾出最近 7 天的文章。這種做法對於大量資料來說,記憶體消耗可能很高。

而在第二個範例中,我們直接對 IQueryable 進行 Where 過濾,Entity Framework Core 會將該查詢轉換為相對應的 SQL,並在資料庫中執行過濾,只會取回符合條件的資料,記憶體消耗較低。

總的來說,在 Entity Framework Core 中,我們應該盡可能使用 IQueryable 來組合查詢,以利用資料庫的查詢優化功能,提升效能。只有在需要對查詢結果進行額外的記憶體操作時,才將 IQueryable 轉換為 IEnumerable。

**_在 C#中使用 Entity Framework Core 時，`IQueryable`與`IEnumerable`之間的差異主要體現在如何執行數據查詢_**

### `IEnumerable`

- `IEnumerable`接口是用於所有的集合類型的基本接口，它支持對集合的簡單迭代。
- 使用`IEnumerable`時，查詢是在記憶體中執行的。當對`IEnumerable`進行操作（例如過濾、排序等）時，這些操作是在客戶端（C#代碼運行的地方）完成的。
- 當從數據庫檢索數據後，再對其進行任何操作（如過濾、排序）時，這意味着整個數據集都需要從數據庫加載到記憶體中，這可能會導致性能問題。

**例子：**

```csharp
IEnumerable<Product> products = dbContext.Products
    .ToList() // 從數據庫中檢索所有產品，執行SQL查詢
    .Where(p => p.Price > 100); // 在記憶體中過濾出價格大於100的產品
```

### `IQueryable`

- `IQueryable`接口允許對數據源進行查詢，且該查詢的構造可以在執行時進行修改。這使得查詢能夠延遲執行。
- 使用`IQueryable`時，查詢條件是轉換成對應的數據庫查詢語言（例如 SQL）並在數據庫服務器上執行的。這意味着只有真正需要的數據才會從數據庫加載到記憶體中，從而提高效率。
- `IQueryable`特別適合於操作大量數據的場景，因為它可以利用數據庫的查詢優化器來提升性能。

**例子：**

```csharp
IQueryable<Product> queryableProducts = dbContext.Products
    .Where(p => p.Price > 100); // 建立查詢條件，但不立即執行

// 實際的數據庫查詢在這裡發生，只檢索出符合條件的產品
List<Product> filteredProducts = queryableProducts.ToList();
```

總的來說，當你希望在數據庫層面進行查詢優化，並且只處理所需的數據時，`IQueryable`是更好的選擇。而當你在客戶端已經擁有所有需要的數據，並且只需要對這些數據進行一些簡單的操作時，`IEnumerable`可能是更簡單的選擇。
