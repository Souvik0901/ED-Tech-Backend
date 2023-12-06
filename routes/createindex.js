const client = require("..");


const createCourses = async (req, res) => {
  const result = await client.index({
    index: "courses",
    document: {
      title: req.body.title,
      description: req.body.description,
      cost: req.body.cost,
      validity: req.body.validity,
    },
  });

  res.send(result);
}

module.exports = createCourses;