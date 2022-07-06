import { render } from 'react-dom'
import { FirstApp } from '../src/FirstApp'


describe('Probing <FirstApp/>', () => { 

    test('FirstApp should match with the snapshot', () => {

        const title = " i'm going to become the pirates king";
        render( <FirstApp title={title} /> );
     })
 })