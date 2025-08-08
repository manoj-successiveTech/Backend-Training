# MongoDB Aggregation Framework

## What is Aggregation?

-Aggregation in MongoDB is a powerful feature used for processing large volumes of documents and transforming them into summarized or computed results.
It works by passing documents through a pipeline that transforms the data into an aggregated result.

-Aggregation is a database process that allows us to perform complex data transformations and computations on collections of documents or rows. It enables us to group, filter, and manipulate data to produce summarized results. MongoDBAggregation is typically carried out using the aggregation pipeline which is a framework for data aggregation modeled on the concept of data processing pipelines.

-Each stage of the pipeline transforms the documents as they pass through it and allows for operations like filtering, grouping, sorting, reshaping and performing calculations on the data. MongoDB supports two primary aggregation approaches:


## Single Purpose Aggregation

Single-purpose aggregation methods are designed for simple analytical queries. It is used when we need simple access to document like counting the number of documents or for finding all distinct values in a document. It simply provides the access to the common aggregation which provides straightforward aggregation functions like:

count() – Returns the number of documents in a collection.
distinct()– Retrieves unique values for a specified field.
estimatedDocumentCount() – Provides an estimated count of documents.

## Aggregation Pipeline

-The aggregation pipeline is a framework for data aggregation modeled on the concept of data processing pipelines. Documents enter a multi-stage pipeline that can transform them and output the aggregated result.

-Mongodb Aggregation Pipeline consist of stages and each stage transforms the document. It is a multi-stage pipeline and in each state the documents are taken as input to produce the resultant set of documents. In the next stage (ID available) the resultant documents are taken as input to produce output, this process continues till the last stage. Each stage filters, modifies, or computes on documents before passing them to the next stage.

The basic pipeline stages are defined below:

-filters that will operate like queries.
-the document transformation that modifies the resultant document.
-provide pipeline tools for grouping and sorting documents.
-Aggregation pipeline can also be used in sharded collection.


# How to use MongoDB Aggregation

To use MongoDB for aggregating data, follow below steps:

Step 1: Connect to MongoDB
Ensure you are connected to your MongoDB instance.

Step 2: Choose the Collection
Select the collection you want to perform aggregation on, such as students.

Step 3: Define the Aggregation Pipeline
Create an array of stages, like $group to group documents and perform operations (e.g., calculate the average grade).

Step 4: Run the Aggregation Query
Use the aggregate method on the collection with your defined pipeline.

Each stage transforms the documents as they pass through the pipeline. Common stages include:

### 1. $match

Filters the documents to pass only the documents that match the specified condition(s).

```js
{
  $match: {
    status: "Delivered";
  }
}
```
### 2. $group

Groups input documents by a specified identifier expression and applies the accumulator expressions (like $sum, $avg, etc.)

```js
{
  $group: {
    _id: "$customerName",
    totalSpent: { $sum: "$totalAmount" }
  }
}
```
### 3. $project

Used to include, exclude, or add new fields.

```js
{
  $project: {
    productName: "$items.productName";
  }
}
```

### 4. $sort

Sorts all input documents and returns them to the pipeline in sorted order.

```js
{
  $sort: {
    totalAmount: -1;
  }
}
```
### 5. $limit

Limits the number of documents passed to the next stage.

```js
{
  $limit: 5;
}
```

### 6. $unwind

Deconstructs an array field from the input documents to output a document for each element.

```js
{
  $unwind: "$items";
}
```
## Example Use Cases

Calculating total revenue.
Finding top customers.
Listing monthly sales.
Analyzing product performance.

## Benefits

Simplifies complex data transformations.
Reduces need for multiple queries or application-side processing.
Increases performance for data analytics.

## Conclusion

MongoDB’s aggregation framework is an efficient and flexible way to perform data analysis directly within the database. By chaining multiple stages in a pipeline, you can extract meaningful insights and summaries from your data.