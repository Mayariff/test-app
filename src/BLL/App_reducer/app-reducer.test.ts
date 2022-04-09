
import {appReducer, setAppError, setAppStatus} from './app-reducer';
import {InitialStateType} from './types';

let startState: InitialStateType;
beforeEach(() => {
    startState = {
        error: null,
        status: 'idle',
    }
})

test('correct error message should be set', () => {

    const endState = appReducer(startState, setAppError( 'some error'))
    expect(endState.error).toBe('some error');
})

test('correct status should be set', () => {

    const endState = appReducer(startState, setAppStatus('loading'))
    expect(endState.status).toBe('loading');
})