---
page_type: sample
languages:
- nodejs
- javascript
products:
- azure
- azure-app-service
description: "This sample demonstrates a tiny Hello World Node.js app for Azure App Service."
---

# Node.js Hello World

Tiny, modified Hello World node.js app for [App Service Web App](https://docs.microsoft.com/azure/app-service-web) with MS SQL database interface.

## Database config
Create db-config.json for everything needed for your MS SQL connection:
{
  "host":       "hostname",
  "port":       1433,
  "database":   "my-first-db",
  "user":       "database-username",
  "password":   "secret-password"
}

This file is not under version control.

## To avoid node_modules upload
Do this in the future:
https://github.com/woloski/nodeonazure-blog/blob/master/articles/startup-task-to-run-npm-in-azure.markdown