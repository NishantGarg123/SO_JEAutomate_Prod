// ---------- This is the code node used to fetch the attachment if exist -----------------

const items = $('Extract: Msg data').all();
const attachments = items[0].binary || {};

if (Object.keys(attachments).length === 0) {
  return [{ json: { key: false } }];
}

// Filter and return only .xlsx attachments
const xlsxAttachments = Object.entries(attachments)
  .filter(([key, value]) => {
    const fileName = value.fileName || key;
    return fileName.toLowerCase().endsWith('.xlsx');
  })
  .map(([key, value]) => {
    return {
      binary: {
        [key]: value
      },
      json: {
        filename: value.fileName || key
      }
    };
  });

if (xlsxAttachments.length === 0) {
  return [{ json: { key: false } }];
}

return xlsxAttachments;