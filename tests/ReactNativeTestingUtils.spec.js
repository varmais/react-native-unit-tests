import './utils';
import {
  capitalizeWord,
  capitalizeWords
} from '../src/ReactNativeTestingUtils';


describe('ReactNativeTestingUtils', function () {
  describe('capitalizeWord', function () {
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
    it('should capitalize word', function () {
      words.forEach((word, index) => {
        expect(capitalizeWord(word)).to.eql(expectedWords[index]);
      });
    });
  });

  describe('capitalizeWords', function () {
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
    it('should capitalize each word in a sentence', function () {
      sentences.forEach((sentence, index) => {
        expect(capitalizeWords(sentence)).to.eql(expectedSentences[index]);
      });
    });
  });
});