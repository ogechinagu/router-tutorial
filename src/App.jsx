import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: '#131313',
            paddingRight: '20px',
          }}
        >
          Bookkeeper
        </Link>
      </h1>
      <nav>
        <Link
          to="/invoices"
          style={{
            textDecoration: 'none',
            color: '#131313',
            paddingRight: '20px',
          }}
        >
          Invoices
        </Link>
        <Link
          to="/expenses"
          style={{
            textDecoration: 'none',
            color: '#131313',
            paddingRight: '20px',
          }}
        >
          Expenses
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default App;
