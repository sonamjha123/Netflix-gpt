export const checkValidateData =(email, password, fullname, isSignintoggle)=>{
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
 const isfullNameValid = /^[A-Z][a-zA-Z]{3,}(?: [A-Z][a-zA-Z]*){0,2}$/.test(fullname);


    if(!isEmailValid) return "Please enter a valid Email address";
    if(!isPasswordValid) return "Password is not valid.";
    
    if (isSignintoggle) {
    // const isFullNameValid = /^[A-Z][a-zA-Z]{3,}(?: [A-Z][a-zA-Z]*){0,2}$/.test(fullname);
    if (!isfullNameValid) return "Please enter a valid Full Name";
  }
   return null;
}
