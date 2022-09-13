import * as React from 'react';
import { useParams } from 'react-router-dom';
import { getInvoice } from '../data';

const Invoice = () => {
  const params = useParams();
  const invoice = getInvoice(parseInt(params.invoiceId, 10));
  return (
    <div style={{ margin: '20px' }}>
      <main style={{ padding: '20px' }}>
        <h2>Total Due: {invoice.amount}</h2>
        <p>
          {invoice.name}: {invoice.number}
        </p>
        <p>Due Date: {invoice.due}</p>
      </main>
    </div>
  );
};

export default Invoice;
