// Code your solutions in this file
wrapGifts(gifts);

function writeCards(names, event) {
  const messages = [];
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return messages;
}

function countDown(i) {
  let initialCount = i;
  while (initialCount >= 0) {
    console.log(initialCount--);
  }
}
