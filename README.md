

# GitHub Project Exporter

A Node.js module for export of GitHub project data to JSON and Markdown.

## Installation

```sh
npm install
```

## Usage

```javascript
const exportProject = require('./src');

const owner = 'your_owner';
const repo = 'your_repo';
const projectId = 'your_project_id';
const accessToken = 'your_access_token';

exportProject(owner, repo, projectId, accessToken);
```

## License

MIT
