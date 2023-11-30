exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'LEEYS',
      age: 41,
      email: '123eefd@daum.net'
    })
  }
}