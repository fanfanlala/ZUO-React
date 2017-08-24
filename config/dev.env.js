const merge = require('webpack-merge')
const prod = require('./prod.env')
module.exports = merge(prod, {
  NODE_ENV: '"production"'
})
