const Common = {
  handleError(error){
    if(error.errors && error.errors[0]){
      let resError = {
        msg: error.errors[0].message,
        type: error.errors[0].type,
        value: error.errors[0].value,
      }
      return resError;
    }else {
      return error;
    }
    
  }
}

module.exports = Common;