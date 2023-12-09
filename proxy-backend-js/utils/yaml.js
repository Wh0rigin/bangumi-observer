const fs = require('fs');
const yaml = require('js-yaml');

function readYamlFile(filePath) {
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const yamlData = yaml.safeLoad(fileContents);
    return yamlData;
  } catch (error) {
    console.error(`Error reading YAML file: ${error.message}`);
    return null;
  }
}

// 示例使用
const yamlFilePath = 'path/to/your/file.yaml';
const yamlData = readYamlFile(yamlFilePath);

if (yamlData) {
  // 现在，yamlData 包含了从 YAML 文件中读取的内容
  console.log(yamlData);
} else {
  console.error('Failed to read YAML file.');
}
