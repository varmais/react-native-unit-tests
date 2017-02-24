import React from 'react';
import 'react-native';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

global.React = React;
global.renderer = renderer;
global.shallow = shallow;
