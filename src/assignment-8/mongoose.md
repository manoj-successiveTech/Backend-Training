# MongoDB and Mongoose Introduction

## What is MongoDB?

- MongoDB is a **NoSQL database** that stores data in **BSON (Binary JSON)** format.
- It is **document-oriented**, **schema-less**, and **highly scalable**.
- Data is stored in **collections** instead of tables.
- Each document (like a row) is a **JSON-like object**.

### Example MongoDB Document:
```json
{
  "name": "India",
  "continent": "Asia"
}

What is an ORM/ODM?
ORM: Object Relational Mapping (for SQL databases like MySQL)

ODM: Object Document Mapping (for NoSQL databases like MongoDB)

Purpose:
Converts data between incompatible systems using OOP.

ODM in MongoDB: Helps in modeling application data with schemas.

What is Mongoose?
Mongoose is a Node.js ODM library for MongoDB.

It helps:

Define schemas

Validate data

Query and manipulate documents easily

Mongoose Features:
Schema-based

Middleware support

Model validations

Easy querying

RDBMS vs NoSQL(MongoDB)

Feature	            RDBMS (MySQL,PostgreSQL)	        NoSQL (MongoDB)
Data Storage	    Tables	                        Collections/Documents
Schema	            Fixed schema	                Flexible schema
Relationships	    Join                	        Embedded/Nested docs
Scaling	Vertical    scaling	                        Horizontal scaling
Best Use Case   	Complex transactions	        Large-scale, flexible apps

Why use MongoDB and Mongoose?
Ideal for flexible data models

Fast development with JavaScript-based tech stack

Real-time apps, IoT, social networks, etc.