import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store/store';
import App from './App';

test('renders App and resize window inner width, dispatch updateWiw. ', () => {
    render(
        <Provider store={store}>
            <App/>
        </Provider>
    );

    // resize window to 500px, and expect app.wiw equals to 500
    window.innerWidth=500;
    window.dispatchEvent(new Event('resize'));
    expect(store.getState().app.wiw).toBe(500);

    // resize window to 1024px, and expect app.wiw equals to 1024
    window.innerWidth=1024;
    window.dispatchEvent(new Event('resize'));
    expect(store.getState().app.wiw).toBe(1024);
});

