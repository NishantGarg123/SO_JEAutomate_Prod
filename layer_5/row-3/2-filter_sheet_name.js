// ------- This is the code node used to analyse the sheet name and select the JE based sheet name ------------------

// Define regex patterns to match variants of journal-related sheet names
const patterns = [
  /journal/i,
  /\bje?s?\b/i,                    // JE, JEs, je, jes
  /journal\s*entr(?:y|ies|ie)?/i,  // journal entry, entries, entrie
  /\bentries?\b/i,                 // entry, entries
  /jou\s*ent/i,                    // jou ent
  /jo.*en/i                        // NEW: matches JO...EN pattern
];

// Normalize function (optional for consistent testing)
function normalize(str) {
  return str.toLowerCase().replace(/\s+/g, ' ').trim();
}

// Test against regex patterns
function isJournalRelated(name) {
  const normalized = normalize(name);
  return patterns.some(regex => regex.test(normalized));
}

// Try to find first match
for (const item of items) {
  const sheet = item.json.sheetName;
  if (isJournalRelated(sheet)) {
    return [{ json: { matchedSheet: sheet.replace(/\r?\n|\r/g, '') } }];
  }
}

// If no match is found
return [{ json: { matchedSheet: null, note: "No journal-related sheet found." } }];

