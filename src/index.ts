import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();
import express from "express";

async function createuser() {
  await client.user.create({
    data: {
      username: "kunal",
      password: "12345",
      age: 20,
    },
  });
}

createuser();
