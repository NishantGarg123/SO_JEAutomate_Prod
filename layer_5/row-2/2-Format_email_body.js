// ---------- This is the code node (Html to Text Converter)    ------------------

const { convert } = require('html-to-text');

const subject = $input.first().json.subject;
const html = $input.first().json.body.content;

const body = convert(html, {
  wordwrap: false,
  tables: true
});

return {
  subject,
  body
};

