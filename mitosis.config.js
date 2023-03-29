const seedrandom = require("seedrandom");
const rng = seedrandom("vue-sdk-seed");

const getSeededId = () => {
  const rngVal = rng();
  return Number(String(rngVal).split(".")[1]).toString(36);
};

module.exports = {
  files: "src/**",
  targets: ["vue3", "react", "qwik"],
  options: {
    vue: {
      cssNamespace: getSeededId,
    },
  },
};
