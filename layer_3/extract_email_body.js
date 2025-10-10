const { convert } = require('html-to-text');
const subject = $input.first().json.subject;
const html = $input.first().json.body.content;

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

// ------------------- To make the date dynamic ------------------------------
const now = new Date();

const monthIndex = now.getMonth(); // 0–11
const previous_monthIndex = now.getMonth()-1; // 0–11
const year = now.getFullYear();    // e.g., 2025

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const monthName = monthNames[monthIndex];
const previous_monthName = monthNames[previous_monthIndex];
// console.log(`Date: ${date}, Month: ${monthName}, Year: ${year}`);


return {
  'subject':subject,
  'body':body_result,
  'month':monthName,
  'prev_month':previous_monthName,
  'year':year
};