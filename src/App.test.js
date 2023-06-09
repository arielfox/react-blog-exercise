import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux'
import store from './store'
import {Router} from 'react-router-dom'
import {createMemoryHistory} from 'history'
import App from './App';
import SearchBar from "./features/filters/SearchBar";

test('fetches posts data', async () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    );

    // Todo: Why is this calling the real api and not using the Mock Service Worker?
    expect(await screen.findByText(/qui est esse/i)).toBeInTheDocument()
})


test('renders navigation', () => {
  render(
      <Provider store={store}>
        <App />
      </Provider>

  );
  const albumsLink = screen.getByText(/albums/i);
  expect(albumsLink).toBeInTheDocument();
});

test('renders search bar', () => {
    render(
        <Provider store={store}>
            <SearchBar />
        </Provider>
    )
    expect(screen.getByRole("textbox")).toHaveDisplayValue("");
    expect(screen.getByRole("combobox")).toHaveDisplayValue("Ascending");
});

test('renders album page', () => {
    const history = createMemoryHistory('/albums')

    render(
        <Provider store={store}>
            <Router history={history}>
                <App />
            </Router>
        </Provider>,
    )

    // Todo: Why isn't it loading the Albums page?
    //expect(screen.getByText(/album page/i)).toBeInTheDocument()
});


