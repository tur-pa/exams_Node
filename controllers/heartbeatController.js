exports.getHeartbeat = async (req, res) => {
  try {
    const currTime = `Current time is ${new Date().toString()}`;
    res.status(200).json({
      status: "Success",
      data: currTime,
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      status: "Bad Request",
      message: err.message,
    });
  }
};
