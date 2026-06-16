import jwt from 'jsonwebtoken';

// Arrow function jo User ID ko token me encrypt karega
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d', // Token 30 din tak valid rahega
  });
};

export default generateToken;