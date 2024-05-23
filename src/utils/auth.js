export const protect = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).send('user not signed in');
  }
  if (req.headers.authorization !== 'TOKEN') {
    return res.status(403).send('invalid token/session');
  }
  req.user = {
    id: 'userid',
    name: 'User Name'
  };
  next();
};
