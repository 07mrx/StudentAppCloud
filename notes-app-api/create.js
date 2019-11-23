import uuid from "uuid";
import AWS from "aws-sdk";
import { success, failure} from "./libs/response-lib";
import * as dynamoDbLib from "./libs/dynamodb-lib";

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export async function main(event, context) {
  // Request body is passed in as a JSON encoded string in 'event.body'
  console.log(event);
  let data = event;
  if(data.constructor.name === "String") { data = JSON.parse(data); }

  const params = {
    TableName: process.env.tableName,
    Item: {
      _id: uuid.v1(),
      student_name: data.student_name,
      student_email: data.student_email,
      section: data.section,
      subjects: data.subjects,
      dob: data.dob
    }
  };

  console.log(params);

  try {
    await dynamoDbLib.call("put", params);
    return success(params.Item);
  } catch (e) {
    console.log(e);
    return failure({ status: false });
  }
}
