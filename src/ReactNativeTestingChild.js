import React, {
  Component,
  PropTypes,
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';

import { capitalizeWords } from './ReactNativeTestingUtils'

export default class ReactNativeTestingChild extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Capitalized string:
        </Text>
        <Text style={styles.string}>
          {this._getCapitalizedString()}
        </Text>
        <TouchableHighlight onPress={this.props.onClear}>
          <Text style={styles.button}>
            Clear text
          </Text>
        </TouchableHighlight>
      </View>
    );
  }

  _getCapitalizedString () {
    const { text } = this.props;
    if (text) {
      return capitalizeWords(text);
    }

    return 'You must input something!';
  }
};

ReactNativeTestingChild.propTypes = {
  text: PropTypes.string.isRequired,
  onClear: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    marginBottom: 20
  },
  string: {
    fontSize: 18,
    padding: 20
  },
  button: {
    marginTop: 30,
    fontSize: 30,
    color: '#007aff'
  }
});