export const checkValidateData =(email, password, fullName)=>{
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
 const isfullNameValid = /^[A-Z][a-zA-Z]{3,}(?: [A-Z][a-zA-Z]*){0,2}$/.test(fullName);

    if(!isEmailValid) return "Please enter a valid Email address";
    if(!isPasswordValid) return "Password is not valid.";
    if(!isfullNameValid) return "Please enter a valid Full Name";
   return null;
}
