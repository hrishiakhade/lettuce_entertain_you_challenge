import React from 'react';
import renderer, { act } from 'react-test-renderer';
import { Cards, getQuestionText, getButton } from '../../components/card';
import { RadioButton } from 'react-native-paper';


//  react-native-paper components are not fully compatible with react-native-testing-library


describe('Cards component', () => {
  test('renders question and options correctly', () => {
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

  test('renders question text correctly', () => {
    const text = 'What is the first thing you reach for in the morning?';
    const questionText = getQuestionText(text);

    const component = renderer.create(questionText);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('renders next/submit button correctly', () => {
    const isLastQuestion = false;
    const handleNext = jest.fn();
    const setOption = jest.fn();
    const points = 3;

    const button = getButton(isLastQuestion, handleNext, setOption, points);

    const component = renderer.create(button);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });


  test('renders RadioButton correctly in stress test', () => {
    const questionData = {
      question: 'Sample question',
      options: [
        { text: 'Option 1', points: 1 },
        { text: 'Option 2', points: 2 },
        { text: 'Option 3', points: 3 },
      ],
    };

    const iterations = 100; // Number of iterations for stress testing

    for (let i = 0; i < iterations; i++) {
      const component = renderer.create(<Cards questionData={questionData} />);
      const radioButtons = component.root.findAllByType(RadioButton.Item);

      expect(radioButtons.length).toBe(questionData.options.length);

      questionData.options.forEach((option, index) => {
        expect(radioButtons[index].props.label).toBe(option.text);
        expect(radioButtons[index].props.value).toBe(index);
      });
    }
  });


  test('Radio Button selects the correct value stress test', () => {
    const questionData = {
      question: 'Sample question',
      options: [
        { text: 'Option 1', points: 1 },
        { text: 'Option 2', points: 2 },
        { text: 'Option 3', points: 3 },
      ],
    };

    const iterations = 100;

    for (let i = 0; i < iterations; i++) {
      let component;
      act(() => {
        component = renderer.create(<Cards questionData={questionData} />);
      });

      const radioGroup = component.root.findByType(RadioButton.Group);

      // Generate a random value within the options range
      const randomValue = Math.floor(Math.random() * questionData.options.length);

      act(() => {
        radioGroup.props.onValueChange(randomValue);
      });

      // Check if the selected value matches the randomly generated value
      expect(radioGroup.props.value).toBe(randomValue);
    }
  });
});
