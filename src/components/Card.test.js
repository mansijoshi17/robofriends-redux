import { shallow, configure } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

import Card from './Card';

configure({ adapter: new Adapter() });

it("expect to render card component", () => {
    expect(shallow(<Card />).length).toEqual(1);
}) // This shallow mwthod is used for only single component rendering in test it's not render the child component.

it("match components with snapshot", () => {
    expect(shallow(<Card />)).toMatchSnapshot();
}) // This snapshot is take snapshot of your component and created one text file of that component and when you change something 
// in component its compare that component with that snapshot and show error in test,
// but you can change that changes of component by typeing (u) and its save the changes in also snapshot and test get passed.

