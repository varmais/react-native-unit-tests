import '../testutils/jest';
import {
  capitalizeWord,
  capitalizeWords
} from '../../src/ReactNativeTestingUtils';

describe('ReactNativeTestingUtils', () => {
  describe('capitalizeWord', () => {
    const words = [
      'car',
      'dogsAREbest',
      'lOreal'
    ];
    const expectedWords = [
      'Car',
      'Dogsarebest',
      'Loreal'
    ];
    it('should capitalize word', () => {
      words.forEach((word, index) => {
        expect(capitalizeWord(word)).toEqual(expectedWords[index]);
      });
    });
  });

  describe('capitalizeWords', () => {
    const sentences = [
      'a dOg was   running',
      'fLyers will win STANLEY CUP',
      'my AVOCAdo dieD'
    ];
    const expectedSentences = [
      'A Dog Was   Running',
      'Flyers Will Win Stanley Cup',
      'My Avocado Died'
    ];
    it('should capitalize each word in a sentence', () => {
      sentences.forEach((sentence, index) => {
        expect(capitalizeWords(sentence)).toEqual(expectedSentences[index]);
      });
    });
  });
});