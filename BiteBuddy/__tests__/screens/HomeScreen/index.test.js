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

    describe('handleNext', () => {
        let index, questionData, points, totalpoints, setIndex, setTotalPoints, navigation;

        beforeEach(() => {
            index = 0;
            questionData = [{ points: 2 }, { points: 3 }];
            points = 2;
            totalpoints = 0;
            setIndex = jest.fn();
            setTotalPoints = jest.fn();
            navigation = { navigate: jest.fn() };
        });

        it('increments index when not on last question', () => {
            handleNext(index, questionData, points, totalpoints, setIndex, setTotalPoints, navigation);

            expect(setIndex).toHaveBeenCalledWith(1);
            expect(setTotalPoints).toHaveBeenCalledWith(2);
            expect(navigation.navigate).not.toHaveBeenCalled();
        });

        it('navigates to ResultScreen and resets values when on last question', () => {
            index = 1;

            jest.useFakeTimers(); // Enable fake timers for setTimeout

            handleNext(index, questionData, points, totalpoints, setIndex, setTotalPoints, navigation);

            jest.runAllTimers(); // Execute all pending timers

            expect(navigation.navigate).toHaveBeenCalledWith('ResultScreen', { totalpoints: 2 });
            expect(setTotalPoints).toHaveBeenCalledWith(0);
            expect(setIndex).toHaveBeenCalledWith(0);
        });
    });
});
