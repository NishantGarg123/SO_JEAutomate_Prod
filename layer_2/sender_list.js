// This is the code node check the email sender is the valid user or not.

// const received_email = $input.first().json.sender.emailAddress.address;

const received_email =  $('Email_data').first().json.sender.emailAddress.address;

// --------------email list that are allow to use the flow operations.
const email_list = [
  'skagrawal10@gmail.com',
  'eruiz@sunorchard.com',
  'jmosher@sunorchard.com',
  'ewarvar@sunorchard.com',
  'msaler@sunorchard.com',
  'dev.skagrawal10@gmail.com',
  'rlopez@sunorchard.com',
];

if (email_list.includes(received_email)) {
  // email exists in the list
  return [{ json: { exists: true, email: received_email } }];
} else {
  // email does not exist
  return [{ json: { exists: false, email: received_email } }];
}

