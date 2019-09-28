# Electron Web Worker Crash Example

Bare minimal example that shows how running web worker with `nodeIntegrationInWorker` set to true results in electron crashing on worker termination.

All it does is create/terminate an empty worker on an interval.

## Run

To run the example with `nodeIntegrationInWorker` set to false, and NOT crash:

```sh
npm install
npm start
```

To run the example with `nodeIntegrationInWorker` set to true, and crash:

```sh
npm install
npm start.crash
```

The crash usually occurs in the first 5 seconds.
