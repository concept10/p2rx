
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const { Octokit } = require('@octokit/rest');

const githubService = require('./githubService');
const jsonExporter = require('./jsonExport');
const markdownExporter = require('./markdownExporter');

async function exportProject(owner, repo, projectId, accessToken) {
    const projectData = await githubService.getProjectData(owner, repo, projectId, accessToken);
    jsonExporter.exportToJson(projectData, 'project.json');
    markdownExporter.exportToMarkdown(projectData, 'project.md');
}

module.exports = exportProject;