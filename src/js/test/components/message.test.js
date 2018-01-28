import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

import { Message } from "../../components";

/** MOCKS **/
import { MessageMock } from "../__mocks__";

describe('Message component Test', () => {

    it('Should render component', () => {
        const component = renderer.create(<Message
            message={MessageMock.userMessage}
            correlationId={MessageMock.correlationId}
        />).toJSON();
        expect(component).toMatchSnapshot();
    });

    it('Should call renderUserMessege when user message was sent', () => {
        const renderUserMessegeSpy = jest.spyOn(Message.prototype, 'renderUserMessege');

        shallow(<Message
            message={MessageMock.userMessage}
            correlationId={MessageMock.correlationId}
        />);

        expect(renderUserMessegeSpy).toHaveBeenCalled();
    });

    it('Should call renderGuestMessage when guest message was sent', () => {
        const renderGuestMessageSpy = jest.spyOn(Message.prototype, 'renderGuestMessage');

        shallow(<Message
            message={MessageMock.guestMessage}
            correlationId={MessageMock.correlationId}
        />);

        expect(renderGuestMessageSpy).toHaveBeenCalled();
    });

    it('Should call getDate when message is rendering', () => {
        const getDateSpy = jest.spyOn(Message.prototype, 'getDate');

        shallow(<Message
            message={MessageMock.userMessage}
            correlationId={MessageMock.correlationId}
        />);

        expect(getDateSpy).toHaveBeenCalled();
    });

    it('Should return date in right format', () => {

        const wrapper = shallow(<Message
            message={MessageMock.userMessage}
            correlationId={MessageMock.correlationId}
        />);

        const wrapperDate = wrapper.instance().getDate();
        const mockDate = MessageMock.getDate();

        expect(wrapperDate).toEqual(mockDate);
    });
});