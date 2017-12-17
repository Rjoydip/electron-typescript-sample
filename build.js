const argv = require('yargs').argv;
const _ = require('lodash');
const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller;
const path = require('path');
const _argv = _.omit(argv, ['help', 'version', '_', '$0']);

const rootPath = path.join('./');
const outPath = path.join(rootPath, 'release');

Object.keys(_argv).forEach(key => {
  // windows
  if (['win', 'win32', 'windows'].indexOf(key) > -1) {
    getInstallerConfig({
        appDirectory: path.join(rootPath, 'package', 'ETA-win32-x64'),
        authors: 'Rjoydip',
        noMsi: true,
        outputDirectory: path.join(outPath, 'windows'),
        exe: './ETA.exe'
      })
      .then(createWindowsInstaller)
      .then(() => {
        console.log("windows installer created successfully");
      })
      .catch((error) => {
        console.error(error.message || error);
        process.exit(1);
      });
  } else if (['linux'].indexOf(key) > -1) {
    getInstallerConfig({
        appDirectory: path.join(rootPath, 'package', 'ETA-linux-x64'),
        authors: 'Rjoydip',
        noMsi: true,
        outputDirectory: path.join(outPath, 'linux'),
        exe: './ETA.exe'
      })
      .then(createWindowsInstaller)
      .then(() => {
        console.log("windows installer created successfully");
      })
      .catch((error) => {
        console.error(error.message || error);
        process.exit(1);
      });
  } else if (['mac', 'osx', 'darwin'].indexOf(key) > -1) {
    getInstallerConfig({
        appDirectory: path.join(rootPath, 'package', 'ETA-darwin-x64'),
        authors: 'Rjoydip',
        noMsi: true,
        outputDirectory: path.join(outPath, 'darwin'),
        exe: './ETA.exe'
      })
      .then(createWindowsInstaller)
      .then(() => {
        console.log("windows installer created successfully");
      })
      .catch((error) => {
        console.error(error.message || error);
        process.exit(1);
      });
  }
  return;
});

function getInstallerConfig(obj) {
  if (obj !== undefined) {
    console.log(`Creating ${obj['appDirectory']} installer`);
    return Promise.resolve(obj);
  }
}