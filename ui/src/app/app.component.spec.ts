import { render, screen, fireEvent } from '@testing-library/angular';
import { AppComponent } from './app.component';

describe('App component', () => {
  test('should render counter', async () => {
    const { navigate } = await render(AppComponent, {
      routes: [],
    });

    expect(screen.getByText('jobs')).toBeInTheDocument();
    expect(screen.getByText('home')).toBeInTheDocument();
  });
});
