const annieRoute = (req, res) => {
  res.send('Annie Gordon');
}

const jacobRoute = (req, res) => {
  res.send('Jacob Albancando');
};

module.exports = {
  annieRoute,
  jacobRoute
};