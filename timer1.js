const beepNums = process.argv.slice(2);

for (const num of beepNums) {
  if (num >= 0) {
    setTimeout(() => {
      process.stdout.write('.\x07');
    }, num * 1000);
  }
}
