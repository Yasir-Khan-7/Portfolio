const fs = require('fs');

// Read the file
const filePath = 'src/components/Hero/Hero.js';
const content = fs.readFileSync(filePath, 'utf8');

// Replace the tags
const newContent = content
    .replace(/<n>/g, '<Name>')
    .replace(/<\/n>/g, '</Name>');

// Write back to the file
fs.writeFileSync(filePath, newContent);

console.log('Hero.js has been updated successfully.'); 