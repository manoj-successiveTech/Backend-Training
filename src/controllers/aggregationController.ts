import { Request, Response, NextFunction } from "express";
import Order from "../models/seedSchema";

async function runAllAggregations(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // 1. Total revenue generated
  const totalRevenue = await Order.aggregate([
    { $group: { _id: null, totalRevenue: { $sum: "$totalAmount" } } },
  ]);
  console.log(`1.Find total revenue generate`);
  console.log("Total Revenue:", totalRevenue[0]);

  // 2. Total number of orders by status

  const orderStatusCounts = await Order.aggregate([
    { $group: { _id: "$status", count: { $sum: 1 } } },
  ]);
  console.log(`2.Find total number of orders by status`);
  console.log("Orders by Status:", orderStatusCounts);

  // 3. Top 3 customers who spent the most

  const topCustomers = await Order.aggregate([
    { $group: { _id: "$customerName", totalSpent: { $sum: "$totalAmount" } } },
    { $sort: { totalSpent: -1 } },
    { $limit: 3 },
  ]);
  console.log("3.Find the top 3 customers who spent the most");
  console.log("Top 3 Customers by Spend:", topCustomers);

  // 4. Average order amount per customer

  const averageOrderAmount = await Order.aggregate([
    { $group: { _id: "$customerName", avgAmount: { $avg: "$totalAmount" } } },
  ]);
  console.log("4.Get the average order amount per customer.");
  console.log("Average Order Amount per Customer:", averageOrderAmount);

  // 5. Products sold more than 10 times

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
  console.log(
    "5.Find products that were sold more than 10 times (total quantity"
  );
  console.log(" Products Sold > 10 Times:", topProducts);

  // 6. Monthly revenue (last 6 months)
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
  console.log("6.List monthly revenue (group by month-year");
  console.log("Monthly Revenue (Last 6 Months):", monthlyRevenue);

  // 7. Customers who placed more than 2 orders

  const frequentCustomers = await Order.aggregate([
    { $group: { _id: "$customerName", orderCount: { $sum: 1 } } },
    { $match: { orderCount: { $gt: 2 } } },
  ]);

  console.log("7.Find all customers who placed more than 2 orders.");
  console.log("Customers with > 2 Orders:", frequentCustomers);

  // 8. Extract product names from all orders

  const allProductNames = await Order.aggregate([
    { $unwind: "$items" },
    { $project: { productName: "$items.productName", _id: 0 } },
  ]);
  console.log(
    "8.Extract only the product names from all orders using $unwind and $project."
  );
  console.log("Product Names:", allProductNames);

  // 9. Revenue from Delivered orders

  const deliveredRevenue = await Order.aggregate([
    { $match: { status: "Delivered" } },
    { $group: { _id: null, revenue: { $sum: "$totalAmount" } } },
  ]);
  console.log(
    "9.Apply filtering using $match (only Delivered orders) and then calculate revenue."
  );
  console.log("Revenue from Delivered Orders:", deliveredRevenue[0]);

  // 10. Total quantity and revenue per product

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
  console.log(
    "10.Calculate total quantity and total revenue per product (use $unwind and $group)."
  );
  console.log("Total Quantity & Revenue per Product:", productStats);

  res.status(200).json({
    totalRevenue,
    orderStatusCounts,
    topCustomers,
    averageOrderAmount,
    topProducts,
    monthlyRevenue,
    frequentCustomers,
    allProductNames,
    deliveredRevenue,
    productStats,
  });
  next();
}

export default runAllAggregations;
