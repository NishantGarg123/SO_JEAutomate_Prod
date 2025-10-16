// ------- This is the code node used to get the sheet name of the each attachment in the loop to select the particular sheet ------------
const xlsx = require('xlsx');

// Decode the binary data
const binaryData = items[0].binary[ Object.keys($binary)[0] ].data;
const buffer = Buffer.from(binaryData, 'base64');
const workbook = xlsx.read(buffer, { type: 'buffer' });

// Get visibility metadata
const visibility = workbook.Workbook?.Sheets?.map(sheet => sheet.Hidden) || [];

// Filter only visible sheets (Hidden !== 1 or 2)
const visibleSheets = workbook.SheetNames.filter((name, index) => {
  return !visibility[index]; // false or 0 = visible
});

// Return only visible sheets
return visibleSheets.map(sheet => ({
  json: { sheetName: sheet }
}));


// const xlsx = require('xlsx');

// // Get the first item's binary data
// const binaryData = items[0].binary['attachment_0'].data;

// // Decode base64 into a buffer
// const buffer = Buffer.from(binaryData, 'base64');

// // Read Excel workbook
// const workbook = xlsx.read(buffer, { type: 'buffer' });

// // Return each sheet name as an item
// return workbook.SheetNames.map(sheet => ({
//   json: { sheetName: sheet }
// }));


// const xlsx = require('xlsx');
// const buffer = Buffer.from(item.binary.attachment_0.data, 'base64');
// const workbook = xlsx.read(buffer, { type: 'buffer' });

// return workbook.SheetNames.map(sheet => ({ json: { sheetName: sheet } }));
