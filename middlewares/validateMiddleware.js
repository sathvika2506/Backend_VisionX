function validateMiddleware(rules) {
  return (req, res, next) => {
    const errors = [];
    rules.forEach((rule) => {
      if (!req.body[rule]) {
        errors.push(`${rule} is required`);
      }
    });

    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }
    next();
  };
}
module.exports = validateMiddleware;
