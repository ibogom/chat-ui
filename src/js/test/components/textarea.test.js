import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

import {Textarea} from "../../components";

import { validationRules } from '../../utils/validation.rules';

/** MOCKS **/
import { TextAreaMock } from "../__mocks__";

describe('Textarea component Test', () => {
    let wrapper;

    beforeEach(()=>{
        wrapper = shallow(<Textarea
            avatar={TextAreaMock.avatar}
            correlationId={TextAreaMock.correlationId}
            sendMessage={TextAreaMock.sendMessage}
        />);
        return wrapper;
    });

    it('Should render component', () => {
        const component = renderer.create(<Textarea
            avatar={TextAreaMock.avatar}
            correlationId={TextAreaMock.correlationId}
            sendMessage={TextAreaMock.sendMessage}
        />).toJSON();
        expect(component).toMatchSnapshot();
    });

    it('Should set data to state when input data was changed', () => {
        const TextEl = wrapper.find('input[type="text"]');

        TextEl.simulate('change', {
            target: {
                value: TextAreaMock.message.correct
            }
        });

        expect(wrapper.state().value).toEqual(TextAreaMock.message.correct);
    });

    it('Should call handleChange when input data was changed', () => {
        const handleChangeSpy = jest.spyOn(Textarea.prototype, 'handleChange');

        const wrapper = shallow(<Textarea
            avatar={TextAreaMock.avatar}
            correlationId={TextAreaMock.correlationId}
            sendMessage={TextAreaMock.sendMessage}
        />);

        const TextEl = wrapper.find('input[type="text"]');

        TextEl.simulate('change', {
            target: {
                value: TextAreaMock.message.correct
            }
        });

        expect(handleChangeSpy).toHaveBeenCalled();
    });

    it('Should call handleSubmit when form was submitted', () => {
        const handleSubmitSpy = jest.spyOn(Textarea.prototype, 'handleSubmit');

        const wrapper = shallow(<Textarea
            avatar={TextAreaMock.avatar}
            correlationId={TextAreaMock.correlationId}
            sendMessage={TextAreaMock.sendMessage}
        />);

        const formEl = wrapper.find('form');

        formEl.simulate('submit', {
            preventDefault() {
            }
        });

        expect(handleSubmitSpy).toHaveBeenCalled();
    });

    it('Should call setDefaultState when message was sent', () => {
        const setDefaultStateSpy = jest.spyOn(Textarea.prototype, 'setDefaultState');

        const wrapper = shallow(<Textarea
            avatar={TextAreaMock.avatar}
            correlationId={TextAreaMock.correlationId}
            sendMessage={TextAreaMock.sendMessage}
        />);

        wrapper.setState({
            value: TextAreaMock.message.correct
        });

        return wrapper.instance().handleSubmit({
            preventDefault() {

            }
        }).then(function () {
            expect(setDefaultStateSpy).toHaveBeenCalled();
        });
    });

    describe('Negative validation', () => {
        let wrapper;

        beforeEach(()=>{
            wrapper = shallow(<Textarea
                avatar={TextAreaMock.avatar}
                correlationId={TextAreaMock.correlationId}
                sendMessage={TextAreaMock.sendMessage}
            />);
            return wrapper;
        });

        it('Should show error when field is empty', () => {
            wrapper.setState({
                value: TextAreaMock.message.incorrect
            });

            return wrapper.instance().handleSubmit({
                preventDefault() {

                }
            }).catch(err => expect(err).toEqual(TextAreaMock.errorMessage));

        });

        it('Should show error message to user when message field is empty', () => {
            wrapper.setState({
                value: TextAreaMock.message.incorrect
            });

            return wrapper.instance().handleSubmit({
                preventDefault() {

                }
            }).catch(err => {
                const errorMessage = wrapper.find('error-message');
                expect(errorMessage.length).toEqual(1);
                expect(errorMessage.text()).toEqual(err);
            });
        });

        it('Should call showError when field is empty', () => {
            const showErrorSpy = jest.spyOn(Textarea.prototype, 'showError');

            const wrapper = shallow(<Textarea
                avatar={TextAreaMock.avatar}
                correlationId={TextAreaMock.correlationId}
                sendMessage={TextAreaMock.sendMessage}
            />);

            wrapper.setState({
                value: TextAreaMock.message.incorrect
            });

            return wrapper.instance().handleSubmit({
                preventDefault() {

                }
            }).catch(err => {
                expect(showErrorSpy).toHaveBeenCalled();
            });
        });

        it('Should add "invalid" class when field is empty', () => {

            wrapper.setState({
                error: TextAreaMock.errorMessage
            });

            wrapper.update();

            const TextEl = wrapper.find('input[type="text"]');

            expect(TextEl.hasClass('invalid')).toBeTruthy();
        });

        it('Should show error if message is too long', () => {

            wrapper.setState({
                value: TextAreaMock.message.long
            });

            let min = validationRules['message'].length.min;
            let max = validationRules['message'].length.max;

            let expectedErrorMessage = `Data length is wrong! Minimum length is ${min} and maximum length is ${max}`;

            return wrapper.instance().handleSubmit({
                preventDefault() {

                }
            }).catch(err => {
                expect(err).toEqual(expectedErrorMessage);
            });
        });
    });

    describe('Positive validation', () => {
        it('Should call sendMessage when validation complete', () => {
            const sendMessageSpy = jest.spyOn(Textarea.prototype, 'sendMessage');

            const wrapper = shallow(<Textarea
                avatar={TextAreaMock.avatar}
                correlationId={TextAreaMock.correlationId}
                sendMessage={TextAreaMock.sendMessage}
            />);

            wrapper.setState({
                value: TextAreaMock.message.correct
            });

            return wrapper.instance().handleSubmit({
                preventDefault() {

                }
            }).then(err => {
                expect(sendMessageSpy).toHaveBeenCalled();
            });
        });
    });

});