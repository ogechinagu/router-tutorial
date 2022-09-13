import { useState } from 'react';
import { NavLink, Outlet, useSearchParams } from 'react-router-dom';
import { getInvoices } from '../data';

const Invoices = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const invoices = getInvoices();

  const handleOnChange = (e) => {
    const filter = e.target.value;
    if (filter) {
      setSearchParams({ filter });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <nav
        style={{
          borderRight: 'solid 1px',
          padding: '1rem',
        }}
      >
        <input
          type="search"
          value={searchParams.get('filter') || ''}
          onChange={handleOnChange}
        />
        {invoices
          .filter((invoice) => {
            const filter = searchParams.get('filter');
            if (!filter) return true;
            const name = invoice.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((invoice) => (
            <NavLink
              to={`/invoices/${invoice.number}`}
              key={invoice.number}
              style={({ isActive }) => {
                return {
                  textDecoration: 'none',
                  color: isActive ? 'red' : '#131313',
                  padding: '10px 5px',
                  display: 'block',
                };
              }}
            >
              {invoice.name}
            </NavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  );
};

export default Invoices;
