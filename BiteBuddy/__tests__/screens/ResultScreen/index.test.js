import React from 'react';
import renderer from 'react-test-renderer';
import ResultScreen from "../../../screens/ResultScreen";

describe('ResultScreen Stress Testing', () => {
    test('ResultScreen Stress Testing renders correctly', () => {
        const numInstances = 100; // Number of instances to render
        const route = { params: { totalPoints: 20 } };
        const navigation = { popToTop: jest.fn() };
        for (let i = 0; i < numInstances; i++) {
            const component = renderer.create(<ResultScreen route={route} navigation={navigation} />);
            const tree = component.toJSON();
            expect(tree).toMatchSnapshot();
          }

    });
    
    test('calls navigation.popToTop() on restart button press for multiple instances', () => {
        const numInstances = 100; // Number of instances to create
    
        for (let i = 0; i < numInstances; i++) {
          const route = { params: { totalPoints: 20 } };
          const navigation = { popToTop: jest.fn() };
    
          const component = renderer.create(<ResultScreen route={route} navigation={navigation} />);
          const instance = component.root;
    
          // Find the restart button
          const restartButton = instance.findByProps({ testID: 'restartButton' });
    
          // Simulate a press event on the restart button
          restartButton.props.onPress();
    
          // Verify if navigation.popToTop has been called
          expect(navigation.popToTop).toHaveBeenCalled();
        }
      });

});


