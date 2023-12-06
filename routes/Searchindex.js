const client = require("..");

const searchCourses = async (req, res) => {
  const result = await client.search({
    index: "courses",
    query: { fuzzy: { title: req.query.query } },
  });

  res.json(result);
}

module.exports = searchCourses;