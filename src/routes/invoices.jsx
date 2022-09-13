import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { getInvoices } from '../data';

const Invoices = () => {
  const [search, setSearch] = useState('');

  const invoices = getInvoices();

  const handleOnChange = (e) => {
    setSearch(e.target.value);
  };
  console.log(setSearch);

  return (
    <div style={{ display: 'flex' }}>
      <nav
        style={{
          borderRight: 'solid 1px',
          padding: '1rem',
        }}
      >
        <input type="search" onChange={handleOnChange} />
        {invoices.map((invoice) => (
          <Link
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
            style={{
              textDecoration: 'none',
              color: '#131313',
              padding: '10px 5px',
              display: 'block',
            }}
          >
            {invoice.name}
          </Link>
        ))}
      </nav>
      <Outlet />
    </div>
  );
};

export default Invoices;
