// ///const express = require('express');
// const Elasticsearch = require('elasticsearch');

// const app = express();
// const port = 3000;



// // Configure Elasticsearch client
// const esClient = new Elasticsearch.Client({
//   host: 'http://localhost:9200',
//   log: 'trace',
// });



// // For creating a index function
// async function createIndex(indexName) {
//   try {
//     const response = await esClient.indices.create({
//       index: indexName,
//     });
//     console.log(`Index '${indexName}' created successfully:`, response);
//   } catch (error) {
//     console.error(`Error creating index '${indexName}':`, error);
//   }
// }

// // cretae index on application start
// (async () => {
//   const indexName = 'example-index';
//   await createIndex(indexName);
// })();



// // Test Elasticsearch connection
// esClient.ping({ requestTimeout: 30000 }, (error) => {
//   if (error) {
//     console.error('Elasticsearch cluster is down!');
//   } else {
//     console.log('Elasticsearch cluster is up and running!');
//   }
// });



// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });





