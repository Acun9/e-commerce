import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageContent from './layout/PageContent';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';

function App() {
  return (
    <Router>
      <PageContent>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/about">
            <div className="container mx-auto px-4 py-12">
              <h1 className="text-3xl font-bold">About Page - Coming Soon</h1>
            </div>
          </Route>
          <Route path="/contact">
            <div className="container mx-auto px-4 py-12">
              <h1 className="text-3xl font-bold">Contact Page - Coming Soon</h1>
            </div>
          </Route>
          <Route path="/product/:id">
            <div className="container mx-auto px-4 py-12">
              <h1 className="text-3xl font-bold">Product Page - Coming Soon</h1>
            </div>
          </Route>
          <Route>
            <div className="container mx-auto px-4 py-12">
              <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
            </div>
          </Route>
        </Switch>
      </PageContent>
    </Router>
  );
}

export default App;
