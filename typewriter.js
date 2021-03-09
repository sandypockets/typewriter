const sentence = "hello there from lighthouse labs";
console.log(sentence.length);

const typeWriter = (words) => {
  let delay = 1000;
  for (let characters of words) {
  setTimeout(function() {
    process.stdout.write(characters);
    }, delay)
    delay += 50;
  }
  setTimeout(function() {
    process.stdout.write('\n');
  }, delay);
};

typeWriter(sentence);