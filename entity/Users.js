module.exports = {
  name: "Users",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true
    },
    name: {
      type: "varchar"
    },
    address: {
      type: "varchar"
    },
    role: {
      type: "varchar"
    }
  }
};


async function getUserUnsafe1(req, res) {
  const userId = req.params.id; // User-supplied ID from URL
  // DANGEROUS: Direct string concatenation
  const query = `SELECT * FROM users WHERE id = ${userId}`;
  try {
    const user = await db.query(query); // Execute raw query
    res.json(user);
  } catch (error) {
    res.status(500).send("Error fetching user");
  }
}
