jest.unmock('../../src/ReactNativeTestingChild');

import '../testutils/jest';
import ReactNativeTestingChild from '../../src/ReactNativeTestingChild';
import * as Utils from '../../src/ReactNativeTestingUtils';

describe('ReactNativeTestingChild', () => {
  let component;
  let onClearStub;
  const capitalizedString = 'mock string value';

  test('renders correctly', () => {
    const stringValue = 'random value';
    const snapshot = renderer.create(<ReactNativeTestingChild text={stringValue} onClear={onClearStub}  />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  beforeEach(() => {
    Utils.capitalizeWords = jest.fn(); // TODO: ???
    Utils.capitalizeWords.mockReturnValue(capitalizedString);
    onClearStub = jest.fn();
  });

  describe('when props.text is empty', () => {
    const stringValue = '';
    beforeEach(() => {
      component = shallow(<ReactNativeTestingChild text={stringValue} onClear={onClearStub} />);
    });

    it('renders placeholder string', () => {
      const expectedString = 'You must input something!';
      expect(component.find('Text').nodes[1].props.children).toEqual(expectedString);
    });

    it('does not call capitalizeWords', () => {
      expect(Utils.capitalizeWords.mock.calls.length).toBe(0);
    });

    describe('when clear text button is pressed', () => {
      it('should call onClear callback', () => {
        component.find('TouchableHighlight').simulate('press');
        expect(onClearStub).toBeCalled();
      });
    });
  });

  describe('when props.text is not empty', () => {
    const stringValue = 'random value';
    beforeEach(() => {
      component = shallow(<ReactNativeTestingChild text={stringValue} onClear={onClearStub} />);
    });

    it('renders string with capitalizeWords', () => {
      expect(Utils.capitalizeWords).toBeCalledWith(stringValue);
      expect(component.find('Text').nodes[1].props.children).toEqual(capitalizedString);
    });
  });
});