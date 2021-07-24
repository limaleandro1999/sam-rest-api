const AWS = require('aws-sdk');
AWS.config.update({ region: 'sa-east-1' });

const dynamodb = new AWS.DynamoDB.DocumentClient();
const tableName = process.env.TABLE_NAME;

module.exports = {
  AWS,
  dynamodb,
  tableName,
};