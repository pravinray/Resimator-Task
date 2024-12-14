import CryptoJS from "crypto-js";

const encryptPassword = (password) => {
  const secretKey = process.env.REACT_APP_SECURED_KEY;
  console.log("REACT_APP_SECURED_KEY", process.env.REACT_APP_SECURED_KEY);
  const encryptedPassword = CryptoJS.AES.encrypt(
    password,
    secretKey
  ).toString();
  console.log("Encrypted Password:", encryptedPassword);
  return encryptedPassword;
};

export default encryptPassword;
