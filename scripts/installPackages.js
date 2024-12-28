// install_packages.js
// made by Homura
import chalk from 'chalk';
import fs from 'fs';
import { exec } from 'child_process';

// Read package.json synchronously
const packageJsonContent = fs.readFileSync(new URL('../package.json', import.meta.url));
const packageJson = JSON.parse(packageJsonContent);

// Filter out packages that are not installed
const missing = Object.keys(packageJson.dependencies)
    .filter((packageName) => !fs.existsSync(`../node_modules/${packageName}`));

if (missing.length > 0) {
    console.log(chalk.hex("#79b0fc")("Installing Packages: ") + missing.join(", "));
    exec(`npm i --save ${missing.join(" ")}`);
}