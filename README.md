# GitHub Project Exporter

[![npm version](https://img.shields.io/npm/v/github-project-exporter.svg)](https://www.npmjs.com/package/github-project-exporter)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/github/workflow/status/username/p2rx/CI)](https://github.com/username/p2rx/actions)
[![Dependencies Status](https://status.david-dm.org/gh/username/p2rx.svg)](https://david-dm.org/username/p2rx)
[![GitHub Stars](https://img.shields.io/github/stars/username/p2rx.svg)](https://github.com/username/p2rx/stargazers)

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
