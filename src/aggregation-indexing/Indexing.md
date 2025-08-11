### 1.  Check indexes on the collection. 

```js
db.orders.getIndexes();
```

### 2.  Create an index on customerName. Run a query filtering by customerName and check performance using explain("executionStats"). 

-Create an index on customerName

```js
db.orders.createIndex({ customerName: 1 })
```

-  Run a query filtering by customerName

```js
db.orders.find({ customerName: "Manoj Singh" })
```

- Check performance using explain("executionStats")

```js
db.orders.find({ customerName: "John Doe" }).explain("executionStats")
```

### 3.  Create a compound index on status and orderDate. Run a query filtering by both and compare performance (before vs after). 


-  Check performance before index.

```js
db.orders.find({ status: "Shipped", orderDate: ISODate("2025-08-01") }).explain("executionStats")
```

- Create a compound index on status and orderDate.

```js
db.orders.createIndex({ status: 1, orderDate: -1 })
```

-  Check performance after index.

```js
db.orders.find({ status: "Shipped", orderDate: ISODate("2025-08-01") }).explain("executionStats")
```

### 4.  Create a text index on items.productName. Perform a text search for a product. 

-Create a text index on items.productName.

```js
db.orders.createIndex({ "items.productName": "text" })
```
-  Perform a text search for a product

```js
db.orders.find({ $text: { $search: "Laptop" } })
```

-Check matched documents with performance details.

```js
db.orders.find({ $text: { $search: "Laptop" } }).explain("executionStats")
```

### 5.  Drop an index and observe performance difference

- Check existing indexes.

```js
db.orders.getIndexes()
```

-Drop an index

```js
db.orders.dropIndex("customerName_1")
```

Observe performance difference

Before dropping index

```js
db.orders.find({ customerName: "John Doe" }).explain("executionStats")
```

-After dropping index

```js
db.orders.find({ customerName: "John Doe" }).explain("executionStats")
```