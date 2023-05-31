// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case ('mit'):
      break;

    default:

  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case ('mit'):
      return 'https://choosealicense.com/licenses/mit/';
    case ('mpl-2.0'):
      return 'http://choosealicense.com/licenses/mpl-2.0/';
    case ('apache-2.0'):
      return 'https://choosealicense.com/licenses/apache-2.0/';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

function generateTableOfContents(data) {
  let table = ``;
  if (data.contents === 'y') {
    table = `## Table of Contents\n\n`
    for (let keys in data) {
      if (data[keys] !== '') {
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
if(data.contents === 'y'){
  markDown += `${generateTableOfContents(data)}`
}

for(let key in data){
  if(data[key] !== '' && key !== 'title' && key != 'contents'){
    console.log(data[key]);
    markDown += `## ${key}\n\n${data[key]}\n\n`
  }
}
  return markDown;
}

module.exports = generateMarkdown;
