var addon = require(`${process.cwd()}/build/addon_1.node`);

module.exports = () => {
  return addon.hello()
}
