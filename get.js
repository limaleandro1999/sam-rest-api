const {
  dynamodb,
  tableName
} = require('./utils');

exports.handler = async (event) => {
  const userId = event.pathParameters.userId;
  const user = await dynamodb.get({
    TableName: tableName,
    Key: {
      userId,
    },
  }).promise();

  if (user.Item) {
    return {
      statusCode: 200,
      body: JSON.stringify(user.Item),
    };
  } else {
    return {
      statusCode: 404,
      body: JSON.stringify({
        message: 'User not found',
      }),
    };
  }
};