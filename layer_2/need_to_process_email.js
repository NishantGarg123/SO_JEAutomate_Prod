// this is the code node in the path where the length of the thread =1 
const { convert } = require('html-to-text');
const html = $('Email_data').first().json.body.content;

let body = convert(html, {
  wordwrap: false,
  tables: true
});

// Remove the "ALERT: ..." line (case-insensitive and flexible)
body = body.replace(/ALERT: This email originated outside of .*? safe\.\s*/i, '');

// Now extract up to the ", Month Day, Year" line
let snippet = body;
const match = snippet.match(/^[\s\S]*?(?=,\s+[A-Za-z]{3,9}\s+\d{1,2},\s+\d{4})/);
if (match) snippet = match[0];

const body_result = snippet.trim()


return {
  'body':body_result,
};