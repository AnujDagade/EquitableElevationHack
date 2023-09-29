export const handler = async function (event, context) {
    return {
        statusCode:200,
        headers: {
            "Access-Control-Allow-Origin": "*", // Allow from anywhere 
        },
        body:JSON.stringify({message:"hiiiiiiiiiii"}),
    }
  };
  