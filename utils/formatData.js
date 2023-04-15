formatMiddleware = (req, res, next) => {
  console.log(res.locals.data);
  res.format({
    "text/plain": function () {
      res.send(res.locals.data);
    },
    "text/html": function () {
      res.status(201).send(`<p>${res.locals.data}</p>`);
    },
    "application/json": function () {
      res.status(200).json({
        status: "Success",
        data: {
          advertById: res.locals.data,
        },
      });
    },
    "*/*": function () {
      console.error("Please add proper 'Accept' header.");
      res
        .status(406)
        .send("Status: Not Acceptable. Please add proper 'Accept' header.");
    },
  });
};

module.exports = formatMiddleware;
