/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

enzyme.configure({ adapter: new Adapter() });

it('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render a navbar when the app loads', () => {
  const app = shallow(<App />);
  const navBar = app.find("[testID='navBar']");
});
