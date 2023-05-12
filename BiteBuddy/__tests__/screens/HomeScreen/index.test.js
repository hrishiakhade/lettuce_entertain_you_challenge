import React from 'react';
import renderer from 'react-test-renderer';
import HomeScreen, { handleNext } from '../../../screens/HomeScreen';
import { ImageBackground } from 'react-native';
import { Header } from '../../../components/header';
import { Cards } from '../../../components/card';

describe('HomeScreen', () => {
    test('HomeScreen renders correctly', () => {
        const navigation = { navigate: jest.fn() };

        const component = renderer.create(<HomeScreen navigation={navigation} />);
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });

    test('ImageBackground renders correctly', () => {
        const component = renderer.create(
            <ImageBackground source={require('../../../assets/pattern.jpg')} style={{ flex: 1 }}>
            </ImageBackground>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('Header renders correctly', () => {
        const component = renderer.create(
            <Header title="My App" subtitle="Welcome!" />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });


    test('Cards renders correctly', () => {
        const questionData = {
            question: 'Pick a Netflix show to binge watch',
            options: [
                { text: 'Stranger Things', points: 2 },
                { text: 'The Crown', points: 4 },
                { text: 'House of Cards', points: 1 },
                { text: 'Wednesday', points: 3 },
            ]
        };
        const isLastQuestion = false;
        const handleNext = jest.fn();

        const component = renderer.create(
            <Cards questionData={questionData} isLastQuestion={isLastQuestion} handleNext={handleNext} />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('handleNext calls navigation.navigate on last question', () => {
        const navigationMock = { navigate: jest.fn() };
        const setIndexMock = jest.fn();
        const setTotalPointsMock = jest.fn();

        handleNext(0, [{ points: 2 }], 2, 0, setIndexMock, setTotalPointsMock, navigationMock);

        expect(navigationMock.navigate).toHaveBeenCalledWith('ResultScreen', { totalpoints: 2 });
        expect(setIndexMock).toHaveBeenCalledWith(0);
        expect(setTotalPointsMock).toHaveBeenCalledWith(2);
    });

    test('handleNext can handle stress testing', () => {
        const navigationMock = { navigate: jest.fn() };
        const setIndexMock = jest.fn();
        const setTotalPointsMock = jest.fn();

        const iterations = 1000;
        const maxPoints = 4;
        const questionData = [{ points: 2 }];

        for (let i = 0; i < iterations; i++) {
            const points = Math.floor(Math.random() * maxPoints);
            const totalpoints = Math.floor(Math.random() * 15);
            handleNext(0, questionData, points,totalpoints, setIndexMock, setTotalPointsMock, navigationMock);
        }

        expect(navigationMock.navigate).toHaveBeenCalledTimes(iterations);

    });

});
