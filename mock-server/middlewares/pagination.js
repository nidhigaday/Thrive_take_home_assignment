const paginatedResponse = (data, page, pageSize) => {
  const offset = (page - 1) * pageSize;
  const paginatedData = data.slice(offset, offset + pageSize);

  return {
    data: paginatedData,
    total: data.length,
    page,
    totalPages: Math.ceil(data.length / pageSize),
  };
};

module.exports = (req, res) => {
  const pageSize = 15; // Number of items per page
  const page = parseInt(req.query.page, 10) || 1; // Current page, default to 1

  const db = require("../../db.json");
  const paginatedData = paginatedResponse(db.users, page, pageSize);

  res.json(paginatedData);
};
