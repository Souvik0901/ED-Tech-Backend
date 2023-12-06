const client = require("..");

const removeCourses = async (req, res) => {
  const result = await client.delete({
    index: "courses",
    _id: req.query.id,
  });

  res.json(result);
}
module.exports = removeCourses;