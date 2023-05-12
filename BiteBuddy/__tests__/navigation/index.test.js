import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import renderer from 'react-test-renderer';
import Navigation from '../../navigation';

jest.mock('@react-navigation/native', () => ({
    NavigationContainer: ({ children }) => <>{children}</>,
}));

jest.mock('@react-navigation/stack', () => ({
    createStackNavigator: () => ({
        Navigator: ({ children }) => <>{children}</>,
        Screen: ({ children }) => <>{children}</>,
    }),
}));

describe('Navigation component', () => {
    test('renders correctly', () => {
        const component = renderer.create(<Navigation />);
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });


    // renders HomeScreen and ResultScreen correctly
    test('renders Navigation component correctly', () => {
        const component = renderer.create(
            <NavigationContainer>
                <Navigation />
            </NavigationContainer>
        );
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });
    
});
