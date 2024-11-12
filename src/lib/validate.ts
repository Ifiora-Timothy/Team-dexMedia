//util to validate if the user input is not n attenmpt to leakourdata base rathe than an email or password
export const validateUserInput = (input:string[]) => {
    let valid = true;
    input.forEach((value) => {
      if (value.includes("$") || value.includes("{") || value.includes("}")) {
        valid = false;
      }
    });
    return valid;
    
  
  }