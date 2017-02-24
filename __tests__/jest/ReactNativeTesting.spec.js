jest.unmock('../../src/ReactNativeTesting');

import '../testutils/jest';
import ReactNativeTesting from '../../src/ReactNativeTesting';
import ReactNativeTestingChild from '../../src/ReactNativeTestingChild';

describe('ReactNativeTesting', () => {
  let component;
  let textInput;
  const defaultState = {text: ''};

  test('renders correctly', () => {
    const snapshot = renderer.create(<ReactNativeTesting />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  beforeEach(() => {
    component = shallow(<ReactNativeTesting />);
    textInput = component.find('TextInput');
  });

  it('has default state', () => {
    expect(component.state()).toEqual(defaultState);
  });

  it('renders welcome text', () => {
    const expectedText = 'Welcome to React Native testing demo app';
    const text = component.find('Text').children().text();
    expect(text).toEqual(expectedText);
  });

  it('renders input field with placeholder', () => {
    const expectedPlaceholder = 'write something';
    expect(textInput.length).toBe(1);
    expect(textInput.props().placeholder).toEqual(expectedPlaceholder);
  });

  describe('when text changes', () => {
    const newTextValue = 'random string';
    beforeEach(() => {
      textInput.simulate('changeText', newTextValue);
    });

    it('updates component state', () => {
      expect(component.state().text).toEqual(newTextValue);
    });

    it('passes text from state to ReactNativeTestingChild', () => {
      const childComponent = component.find(ReactNativeTestingChild);
      expect(childComponent.props().text).toEqual(newTextValue)
    });

    describe('when clearText callback is called', () => {
      beforeEach(() => {
        const childComponent = component.find(ReactNativeTestingChild);
        childComponent.simulate('clear');
      });

      it('resets state', () => {
        expect(component.state()).toEqual(defaultState);
      });
    });
  });
});