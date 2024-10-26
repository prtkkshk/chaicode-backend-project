const asyncHandler = (requestHandler) => (req, res, next) => {
  return Promise.resolve(requestHandler(req, res, next)).catch((err) =>
    next(err)
  );
};

export { asyncHandler };

const asyncHandler2 = (requestHandler) => async (req, res, next) => {
  try {
    await requestHandler(req, res, next);
  } catch (err) {
    res.status(err.code || 500).json({ message: err.message, success: false });
  }
};
