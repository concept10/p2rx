
// jsonExport.js




const fs = require('fs');

function exportToJson(data, filename) {
    fs.writeFileSync(filename, JSON.stringify(data, null, 4));
    console.log(`Project data saved to ${filename}`);
}

module.exports = {
    exportToJson
};