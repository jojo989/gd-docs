// eslint-disable-next-line no-console
import { exec } from 'child_process';
import chalk from 'chalk';
import os from 'os';

// Import local script as an ES module
import './scripts/installPackages.js';

// Define the command to serve documentation
let command = "node ./node_modules/docsify-cli/bin/docsify serve ./docs --port 9505";

if (os.platform() === "win32") {
    // Adjust command for Windows
    command = "node \"./node_modules/docsify-cli/bin/docsify\" serve ./docs --port 9505";
}

console.log(`${chalk.hex("#66d9ff")("Running Command: ")} ${command}\n`);

// Execute the command
const docsProcess = exec(command);

// Handle process exit
docsProcess.on("exit", () => process.exit(0));