import React from 'react';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);
import { shallow } from 'enzyme';

global.React = React;
global.expect = chai.expect;
global.sinon = sinon;
global.shallow = shallow;
