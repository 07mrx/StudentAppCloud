import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function main(event, context) {
  const data = JSON.parse(event.body);
  const params = {
    TableName: process.env.tableName,
    Key: {
      _id: event.pathParameters._id
    },
    // 'UpdateExpression' defines the attributes to be updated
    // 'ExpressionAttributeValues' defines the value in the update expression
    UpdateExpression: "SET student_name = :student_name, student_email = :student_email, sect = :sect, subjects = :subjects, dob = :dob, gender = :gender",
    ExpressionAttributeValues: {
      ":student_name": data.student_name || null,
      ":student_email": data.student_email || null,
      ":sect": data.section || null,
      ":subjects": data.subjects || null,
      ":dob": data.dob || null,
      ":gender": data.gender || null
    },
    // 'ReturnValues' specifies if and how to return the item's attributes,
    // where ALL_NEW returns all attributes of the item after the update; you
    // can inspect 'result' below to see how it works with different settings
    ReturnValues: "ALL_NEW"
  };

  try {
    await dynamoDbLib.call("update", params);
    return success({ status: true });
  } catch (e) {
    return failure({ status: false });
  }
}
