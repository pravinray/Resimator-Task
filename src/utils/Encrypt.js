const bcrypt = require('bcryptjs');


const hashPassword = async (password) => {
  try {
    const saltRounds = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log('Hashed Password:', hashedPassword);
    return hashedPassword;
  } catch (err) {
    console.error('Error in hashing password:', err);
  }
};

export default hashPassword;