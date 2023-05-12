import React from 'react';
import renderer from 'react-test-renderer';
import { Header } from '../../components/header';
import { APP_STRINGS } from '../../utils/constants';

describe('Header Stress Testing', () => {
  test('renders title and subtitle correctly for multiple instances', () => {
    const numInstances = 100; // Number of instances to create

    for (let i = 0; i < numInstances; i++) {
      const title = APP_STRINGS.title;
      const subtitle = APP_STRINGS.subtitle;

      const component = renderer.create(<Header title={title} subtitle={subtitle} />);
      const tree = component.toJSON();

      expect(tree).toMatchSnapshot();
    }
  });
});
