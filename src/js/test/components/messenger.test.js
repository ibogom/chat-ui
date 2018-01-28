import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

import { Messenger } from "../../components";

/** MOCKS **/
import {MessengerMock} from "../__mocks__";

describe('Messenger component Test', () => {
    it('Should render component', () => {
        const component = renderer.create(<Messenger
            messages={MessengerMock.messages}
            correlationId={MessengerMock.correlationId}
        />).toJSON();
        expect(component).toMatchSnapshot();
    });

    it('Should call renderMessage when render was called', () => {
        const renderMessagesSpy = jest.spyOn(Messenger.prototype, 'renderMessages');

        shallow(<Messenger
            messages={MessengerMock.messages}
            correlationId={MessengerMock.correlationId}
        />);

        expect(renderMessagesSpy).toHaveBeenCalled();
    });

});