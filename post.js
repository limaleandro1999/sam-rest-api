const {
  dynamodb,
  tableName
} = require('./utils');

exports.handler = async (event) => {
  const userId = event.pathParameters.userId;
  const { firstName, lastName, email, website } = JSON.parse(event.body);
  
  const item = {
    userId,
    firstName,
    lastName,
    email,
    website,
  };

  const createdUser = await dynamodb.put({
    TableName: tableName,
    Item: item,
  }).promise();

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'User created successfully.',
      createdUser,
    }),
  };
};