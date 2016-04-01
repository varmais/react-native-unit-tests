'use strict';

export const capitalizeWord = (word) => {
  if (!word) {
    return;
  }
  const letters = word.split('');
  return letters[0].toUpperCase() + letters.splice(1).join('').toLowerCase();
};

export const capitalizeWords = (sentence) => {
  const words = sentence.split(' ');
  return words.map(function (word) {
    return capitalizeWord(word.trim())
  }).join(' ');
};