function createResult(error,data)
{
    const result = {};
    if (error) {
        result['status'] = 'error'
        result['data'] = error
      } else if (data.length == 0) {
        result['status'] = 'Not Match'
        result['data'] = 'User Does NOT Exist'
      } else {
        result['status'] = 'success'
        result['data'] = data
      }
    
      return result
}
module.exports={
    createResult,
}