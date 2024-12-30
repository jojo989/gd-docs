// eslint-disable-next-line no-console
import { exec } from 'child_process';
import os from 'os';

// Import local script as an ES module
import './scripts/installPackages.js';

// Define the command to serve documentation
let command = "node ./node_modules/docsify-cli/bin/docsify serve ./docs --port 9505";

if (os.platform() === "win32") {
    // Adjust command for Windows
    command = "node \"./node_modules/docsify-cli/bin/docsify\" serve ./docs --port 9505";
}

console.log(`${("Running Command: ")} ${command}\n`);

// Execute the command
const docsProcess = exec(command);

if(docsProcess.exitCode === null) {
    console.log("http://localhost:9505")
}
docsProcess.on("exit", () => process.exit(0));

// Handle process exit
