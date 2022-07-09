import * as core from '@actions/core'

async function main() {
  console.log("Esperando 30s");
  await delay(30000);
  core.notice("Segue link do Github: https://github.com")
  await delay(30000);
  console.log("Hello World!");
}

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

main();
