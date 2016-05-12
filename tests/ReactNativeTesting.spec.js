import './utils';
import ReactNativeTesting from '../src/ReactNativeTesting';
import ReactNativeTestingChild from '../src/ReactNativeTestingChild';
import { Text, TextInput } from 'react-native';

describe('ReactNativeTesting', function () {
  let component;
  let textInput;
  const defaultState = {text: ''};

  beforeEach(function () {
    component = shallow(<ReactNativeTesting />);
    textInput = component.find(TextInput);
  });

  it('has default state', function () {
    expect(component.state()).to.eql(defaultState);
  });

  it('renders welcome text', function () {
    const expectedText = 'Welcome to React Native testing demo app';
    const text = component.find(Text).children().text();
    expect(text).to.eql(expectedText);
  });

  it('renders input field with placeholder', function () {
    const expectedPlaceholder = 'write something';
    expect(textInput.nodes).to.have.length(1);
    expect(textInput.props().placeholder).to.eql(expectedPlaceholder);
  });

  describe('when text changes', function () {
    const newTextValue = 'random string';
    beforeEach(function () {
      textInput.simulate('changeText', newTextValue);
    });

    it('updates component state', function () {
      expect(component.state().text).to.eql(newTextValue);
    });

    it('passes text from state to ReactNativeTestingChild', function () {
      const childComponent = component.find(ReactNativeTestingChild);
      expect(childComponent.props().text).to.eql(newTextValue)
    });

    describe('when clearText callback is called', function () {
      beforeEach(function () {
        const childComponent = component.find(ReactNativeTestingChild);
        childComponent.simulate('clear');
      });

      it('resets state', function () {
        expect(component.state()).to.eql(defaultState);
      });
    });
  });
});