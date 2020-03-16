import React from 'react';

import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CardList from './CardList';

configure({ adapter : new Adapter() });

it("expect to render CardList component", () => {

    const mockRobots = [
        {
            id : 1,
            name : 'John sena',
            email : 'johnsena@gmail.com'
        }
    ]

    expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot();
})