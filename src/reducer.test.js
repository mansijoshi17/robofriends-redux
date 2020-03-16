import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_SUCCESS
} from './constants';

import * as reducers from './reducers';

const initialStateSearch = {
    searchField: ''
}


it("should handle CHANGE_SEARCHFIELD", () => {
    expect(reducers.searchRobots(initialStateSearch, {
        type: CHANGE_SEARCHFIELD,
        payload: 'abc'
    })).toEqual({ searchField: 'abc' });
})


const initialStateRobots = {
    robots: [],
    isPending: false
}


it("should handle REQUEST_ROBOTS_SUCCESS", () => {
    expect(reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: [{
            id: 1,
            name: 'John sena',
            email: 'johnsena@gmail.com'
        }]
    })).toEqual({
        robots: [{
            id: 1,
            name: 'John sena',
            email: 'johnsena@gmail.com'
        }],
        isPending: false
    })
})