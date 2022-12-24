import jsPDF from 'jspdf';
import 'jspdf-autotable';
// Date Fns is used to format the dates we receive
// from our API call
import { format } from 'date-fns';

// define a generatePDF function that accepts a tickets argument
const generatePDF = (tickets) => {
  // initialize jsPDF
  const doc = new jsPDF({
    orientation: 'landscape'
  });

  // define the columns we want and their titles
  const tableColumn = [
    'Id',
    'User',
    'Products',
    'Total',
    'Address',
    'Status',
    'Date',
  ];
  // define an empty array of rows
  const tableRows = [];

  // for each ticket pass all its data into an array
  tickets.forEach((ticket) => {
    const ticketData = [
      ticket.orderId,
      ticket.name,
      ticket.products.map((item) => item.productName + '/' + item.dimension + '/' + item.quantity),
      ticket.amount,
      ticket.address,
      ticket.status,
      // called date-fns to format the date on the ticket
      format(new Date(ticket.updatedAt), 'yyyy-MM-dd'),
    ];
    // push each tickcet's info into a row
    tableRows.push(ticketData);
  });

  // startY is basically margin-top
  doc.autoTable(tableColumn, tableRows, { startY: 40 });
  const date = Date().split(' ');
  // we use a date string to generate our filename.
  const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
  // ticket title. and margin-top + margin-left
  doc.setPage(1)
  doc.text('PT. Bamboo Craft Indonesia', 14, 15)
  doc.text('Success transaction within the last one month.', 14, 30);
  // we define the name of our PDF file.
  doc.save(`report_${dateStr}.pdf`);
};

export default generatePDF;
