async function main() {
  console.log("Esperando 30s");
  await delay(30000);
  console.log("Hello World!");
}

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

main();
