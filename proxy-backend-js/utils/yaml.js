const fs = require('fs');
const yaml = require('js-yaml');

function readYamlFile(filePath) {
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const yamlData = yaml.load(fileContents);
    return yamlData || {};
  } catch (error) {
    console.error(`Error reading YAML file: ${error.message}`);
    return {};
  }
}

module.exports = { readYamlFile };