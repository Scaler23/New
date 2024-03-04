import React from "react";
import {faker} from "@faker-js/faker";

// Function to create random user data
export function createRandomUser() {
  return {
    name: faker.person.fullName(),
    email: faker.internet.userName(),
    address: faker.location.country(),
    contact: faker.phone.imei(),
    price: faker.commerce.price({symbol: "₱"}),
    shop: faker.random.alpha(),
    product: faker.commerce.product(),
    refno: faker.database.mongodbObjectId(),
    deliv: faker.date.anytime(),
  };
}

// Generate mock data with 10 random users
export const MOCK_DATA = faker.helpers.multiple(createRandomUser, 10);
