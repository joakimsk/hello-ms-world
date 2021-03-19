# Node.js Hello World

Tiny, modified Hello World node.js app for [App Service Web App](https://docs.microsoft.com/azure/app-service-web) with MS SQL database interface.

This web app should be available at: (https://joakim-test-app.azurewebsites.net/) at least until the free tier runs out...

npm dependencies: ejs, mssql

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

## Database content
You can run the sql to set up the table in your MS SQL database.

## To avoid node_modules upload
Do this in the future:
https://github.com/woloski/nodeonazure-blog/blob/master/articles/startup-task-to-run-npm-in-azure.markdown