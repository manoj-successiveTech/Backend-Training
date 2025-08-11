# Indexing in MongoDB

Indexing in MongoDB involves creating special data structures that improve the efficiency of queries by allowing MongoDB to quickly locate documents that match query conditions. Without indexes, MongoDB must perform a collection scan, which involves examining every document in a collection to find matches, leading to slow query performance, especially in large datasets.

In MongoDB, indexing is a mechanism to improve the performance of queries. Without an index, MongoDB has to scan every document in a collection (called a collection scan) to find the matching ones.


Basic Concepts

1. Document
A document is a record in MongoDB, stored in BSON format (similar to JSON).

Example:

{
  "_id": 1,
  "name": "Alice",
  "age": 28,
  "email": "alice@example.com"
}

2. Collection
A group of MongoDB documents is called a collection. Similar to a table in relational databases.

3. Index
An index in MongoDB is like an index in a book—it helps you find things faster without reading the whole book.