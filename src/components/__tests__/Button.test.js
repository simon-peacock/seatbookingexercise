import React from 'react';
import Button from 'Presentational/Button'
import renderer from 'react-test-renderer';

test('Button renders correctly', () => {
  const component = renderer.create(<Button
    title={'Next step'}
    disabled={false}
  />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
