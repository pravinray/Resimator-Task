import CryptoJS from "crypto-js";

const encryptPassword = (password, secretKey = "pravin") => {
  const encryptedPassword = CryptoJS.AES.encrypt(
    password,
    secretKey
  ).toString();
  console.log("Encrypted Password:", encryptedPassword);
  return encryptedPassword;
};

export default encryptPassword;
