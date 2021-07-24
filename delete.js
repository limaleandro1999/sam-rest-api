const {
  dynamodb,
  tableName
} = require('./utils');

exports.handler = async (event) => {
  const userId = event.pathParameters.userId;
  const data = await dynamodb.delete({
    TableName: tableName,
    Key: {
      userId,
    },
  }).promise();

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'User deleted successfully.'
    }),
  };
};