import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

import {Login} from "../../components";

/** MOCKS **/
import {LoginMock} from "../__mocks__";

describe('Login component Test', () => {


    it('Should render component', () => {
        const component = renderer.create(<Login login={LoginMock.login}/>).toJSON();
        expect(component).toMatchSnapshot();
    });

    it('Should set data to state when input data was changed', () => {
        const wrapper = shallow(<Login login={LoginMock.login}/>);

        const TextEl = wrapper.find('input[type="text"]');

        TextEl.simulate('change', {
            target: {
                value: LoginMock.usernameValues.correct
            }
        });
        expect(wrapper.state().value).toEqual(LoginMock.usernameValues.correct);
    });

    it('Should call handleChange when input data was changed', () => {
        const handleChangeSpy = jest.spyOn(Login.prototype, 'handleChange');

        const wrapper = shallow(<Login login={LoginMock.login}/>);

        const TextEl = wrapper.find('input[type="text"]');

        TextEl.simulate('change', {
            target: {
                value: LoginMock.usernameValues.correct
            }
        });

        expect(handleChangeSpy).toHaveBeenCalled();
    });

    it('Should call handleSubmit when form was submitted', () => {
        const handleSubmitSpy = jest.spyOn(Login.prototype, 'handleSubmit');

        const wrapper = shallow(<Login login={LoginMock.login}/>);

        const formEl = wrapper.find('form');

        formEl.simulate('submit', {
            preventDefault() {
            }
        });

        expect(handleSubmitSpy).toHaveBeenCalled();
    });

    describe('Negative validation', () => {
        let wrapper;

        beforeEach(()=>{
            wrapper = shallow(<Login login={LoginMock.login}/>);
            return wrapper;
        });

        it('Should show error when field is empty', () => {
            wrapper.setState({
                value: LoginMock.usernameValues.incorrect
            });

            return wrapper.instance().handleSubmit({
                preventDefault() {

                }
            }).catch(err => expect(err).toEqual(LoginMock.errorMessage));

        });

        it('Should show error message to user when field is empty', () => {
            wrapper.setState({
                value: LoginMock.usernameValues.incorrect
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
            const showErrorSpy = jest.spyOn(Login.prototype, 'showError');

            const wrapper = shallow(<Login login={LoginMock.login}/>);

            wrapper.setState({
                value: LoginMock.usernameValues.incorrect
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
                error: LoginMock.errorMessage
            });

            wrapper.update();

            const TextEl = wrapper.find('input[type="text"]');

            expect(TextEl.hasClass('invalid')).toBeTruthy();
        });

    });

    describe('Positive validation', () => {
        it('Should call sendUsername when validation complete', () => {
            const sendUsernameSpy = jest.spyOn(Login.prototype, 'sendUsername');

            const wrapper = shallow(<Login login={LoginMock.login}/>);

            wrapper.setState({
                value: LoginMock.usernameValues.correct
            });

            return wrapper.instance().handleSubmit({
                preventDefault() {

                }
            }).then(err => {
                expect(sendUsernameSpy).toHaveBeenCalled();
            });
        });
    });

});