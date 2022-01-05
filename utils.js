const generateMarkdown = ({
  title,
  description,
  installation,
  usage,
  licenseBadge,
  licenseDesc,
  contribution,
  testing,
  github,
  email,
}) => `# ${title}
![License](https://img.shields.io/badge/License-${licenseBadge}-green.svg)
## Contents
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contribution](#Contribution)
* [Testing](#Testing)
* [Questions](#Questions)

## Description
${description}

## Installation
${installation}

## Usage
${usage}

## License
${licenseDesc}

## Contribution
${contribution}

## Testing
${testing}

## Questions
Please contact me at either of the below options:
* https://github.com/${github}
* ${email}`;

module.exports = { generateMarkdown };
