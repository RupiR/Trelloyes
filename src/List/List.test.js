import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import List from './List.js';


describe ('<List />', ()=> {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        const cards = [
            { id: 'a', title: 'First card', content: 'lorem ipsum' },
            { id: 'b', title: 'Second card', content: 'lorem ipsum' },
            { id: 'c', title: 'Third card', content: 'lorem ipsum' },
            { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
            { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
            { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
            { id: 'g', title: 'Seventh card', content: 'lorem ipsum' },
            { id: 'h', title: 'Eighth card', content: 'lorem ipsum' },
            { id: 'i', title: 'Ninth card', content: 'lorem ipsum' },
            { id: 'j', title: 'Tenth card', content: 'lorem ipsum' },
            { id: 'k', title: 'Eleventh card', content: 'lorem ipsum' },
            { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
            { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' },
        ];
        ReactDOM.render(<List key='a' title='tony' cards={cards} />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})

describe('<List />',()=>{
    it('initial snapshot', () =>{
        const cards = [
            { id: 'a', title: 'First card', content: 'lorem ipsum' },
            { id: 'b', title: 'Second card', content: 'lorem ipsum' },
            { id: 'c', title: 'Third card', content: 'lorem ipsum' },
            { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
            { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
            { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
            { id: 'g', title: 'Seventh card', content: 'lorem ipsum' },
            { id: 'h', title: 'Eighth card', content: 'lorem ipsum' },
            { id: 'i', title: 'Ninth card', content: 'lorem ipsum' },
            { id: 'j', title: 'Tenth card', content: 'lorem ipsum' },
            { id: 'k', title: 'Eleventh card', content: 'lorem ipsum' },
            { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
            { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' },
        ];
        const tree = renderer.create(<List key='a' title='tony' cards={cards} />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})