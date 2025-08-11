import { NextFunction, Request, Response } from 'express';
import { faker } from '@faker-js/faker';
import { ObjectId } from 'mongodb';
import Order from '../models/seedSchema'; // Mongoose model

// ✅ Create one random order (same structure you provided)
function createRandomOrder() {
  const items = Array.from({ length: faker.number.int({ min: 1, max: 5 }) }).map(() => ({
    productName: faker.commerce.productName(),
    quantity: faker.number.int({ min: 1, max: 10 }),
    price: faker.number.int({ min: 100, max: 1000 })
  }));

  const totalAmount = items.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return {
    _id: new ObjectId(), // Optional
    orderId: faker.string.uuid(),
    customerName: faker.person.fullName(),
    orderDate: faker.date.recent({ days: 30 }),
    status: faker.helpers.arrayElement(['Pending', 'Shipped', 'Delivered']),
    items,
    totalAmount
  };
}

// ✅ Use faker.helpers.multiple() to create 30 orders
const orders = faker.helpers.multiple(createRandomOrder, {
  count: 30
});

// ✅ Express route handler
const seedOrders = async (req:Request,res:Response,next:NextFunction) => {
  console.log("4");
  try {
    console.log("5");
    const seededData = await Order.insertMany(orders);
    console.log("6");
    next();
  } catch (error) {
    console.log(`Error : ${error}`)
  }

};

export default seedOrders;
