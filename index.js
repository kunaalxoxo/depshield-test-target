const express = require('express');
const _ = require('lodash');
const axios = require('axios');

const app = express();

app.get('/', (req, res) => {
  // Vulnerable lodash usage — prototype pollution risk
  const merged = _.defaultsDeep({}, { constructor: { prototype: { admin: true } } });
  res.json({ status: 'running', message: 'DepShield test target app' });
});

app.listen(3000, () => {
  console.log('depshield-test-target running on port 3000');
});
