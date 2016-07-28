import React, {
  Component,
  StyleSheet,
  Dimensions,
  View,
  Text,
  TextInput,
  Image
} from 'react-native';
import Share from 'react-native-share';

import ReactNativeTestingChild from './ReactNativeTestingChild';

export default class ReactNativeTesting extends Component {
  constructor () {
    super();
    this.handleTextChange = this.handleTextChange.bind(this);
    this.clearText = this.clearText.bind(this);
    this.state = {
      text: ''
    };
  }

  render () {
    const { text } = this.state;
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('./react.png')} />
        <Text style={styles.title}>
          Welcome to React Native testing demo app
        </Text>
        <TextInput
          style={styles.input}
          placeholder={"write something"}
          onChangeText={this.handleTextChange}
          value={text}
          />
        <ReactNativeTestingChild text={text} onClear={this.clearText} />
      </View>
    );
  }

  handleTextChange (text) {
    this._setText(text);
  }

  clearText () {
    this._setText('');
  }

  _setText (text) {
    this.setState({text});
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 26,
    padding: 20,
    textAlign: 'center'
  },
  logo: {
    width: 50,
    height: 50
  },
  input: {
    width: (Dimensions.get('window').width - 20),
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    alignSelf: 'center'
  }
});