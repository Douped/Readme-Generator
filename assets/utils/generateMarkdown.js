// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license != 'None') {
    return `![${license}](https://img.shields.io/badge/License-${license}-blue)`;
  }else{
    return '';
  }
  
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
//not sure what license link necessarily means. Do i hardcode in the links?
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license != 'None'){
    return `This application is licensed under the ${license} license.`;
  }
  else{
    return '';
  }
    
}

function generateTableOfContents(data) {
  let table = ``;
  if (data.contents === 'y') {
    table = `## Table of Contents\n\n`
    for (let keys in data) {
      if (data[keys] !== '' && keys !='title' && keys != 'contents') {
        //cant figure out how to make them appear on newlines
        table += `[${keys}](#${keys})\n\n`
      }
    }
  }

  return table;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
console.log(data);
let markDown = `# ${data.title}\n\n`;

if(data.license !== ''){
  markDown += `${renderLicenseBadge(data.license)}\n\n`;
}

if(data.contents === 'y'){
  markDown += `${generateTableOfContents(data)}`
}

for(let key in data){
  if(data[key] !== '' && key !== 'title' && key !== 'contents' && key != 'license'){
    console.log(data[key]);
    markDown += `## ${key}\n\n${data[key]}\n\n`
  }
}
if(data.license !== ''){
  markDown += `## License\n\n${renderLicenseSection(data.license)}`;
}
  return markDown;
}

module.exports = generateMarkdown;
