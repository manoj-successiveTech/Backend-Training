## Aggregation

### 1. Total Revenue Generated (Sum of totalAmount)

```js
const totalRevenue = await Order.aggregate([
  { $group: { _id: null, totalRevenue: { $sum: "$totalAmount" } } },
]);
```

### 2. Find total number of orders by status.

```js
const orderStatusCounts = await Order.aggregate([
  { $group: { _id: "$status", count: { $sum: 1 } } },
]);
```

### 3. Find the top 3 customers who spent the most.

```js
const topCustomers = await Order.aggregate([
  { $group: { _id: "$customerName", totalSpent: { $sum: "$totalAmount" } } },
  { $sort: { totalSpent: -1 } },
  { $limit: 3 },
]);
```

### 4. Get the average order amount per customer.

```js
const averageOrderAmount = await Order.aggregate([
  { $group: { _id: "$customerName", avgAmount: { $avg: "$totalAmount" } } },
]);
```

### 5. Find products that were sold more than 10 times (total quantity).

```js
const topProducts = await Order.aggregate([
  { $unwind: "$items" },
  {
    $group: {
      _id: "$items.productName",
      totalQuantity: { $sum: "$items.quantity" },
    },
  },
  { $match: { totalQuantity: { $gt: 10 } } },
]);
```

### 6. List monthly revenue (group by month-year) for the last 6 months

```js
const sixMonthsAgo = new Date();
sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

const monthlyRevenue = await Order.aggregate([
  { $match: { orderDate: { $gte: sixMonthsAgo } } },
  {
    $group: {
      _id: { $dateToString: { format: "%Y-%m", date: "$orderDate" } },
      monthlyRevenue: { $sum: "$totalAmount" },
    },
  },
  { $sort: { _id: 1 } },
]);
```

### 7. Find all customers who placed more than 2 orders.

```js
const frequentCustomers = await Order.aggregate([
  { $group: { _id: "$customerName", orderCount: { $sum: 1 } } },
  { $match: { orderCount: { $gt: 2 } } },
]);
```

### 8. Extract product names from all orders

```js
const allProductNames = await Order.aggregate([
  { $unwind: "$items" },
  { $project: { productName: "$items.productName", _id: 0 } },
]);
```

### 9. Revenue from Delivered orders.

```js
const deliveredRevenue = await Order.aggregate([
  { $match: { status: "Delivered" } },
  { $group: { _id: null, revenue: { $sum: "$totalAmount" } } },
]);
```

### 10. Calculate total quantity and total revenue per product

```js
const productStats = await Order.aggregate([
  { $unwind: "$items" },
  {
    $group: {
      _id: "$items.productName",
      totalQuantity: { $sum: "$items.quantity" },
      totalRevenue: {
        $sum: { $multiply: ["$items.quantity", "$items.price"] },
      },
    },
  },
]);
```
