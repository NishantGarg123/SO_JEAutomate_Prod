# There are the some layer on each layer we will have the sone nodes each node will contain the file corresponding to their code or the functionality.

# Layer-1 (No possibility of error)
In this layer we have the outlook thread length verifier( that will find out the length of the thread) and on the basis of length decide the path.

# Layer-2 (No possibility of error)
This layer has the two functionality currently
1. Process the email body based on the length of the email thread.
2. Check is the valid user ( Exist in the valid user list?)

# Layer-3 (This may cause the issue currently their is the Feedback) (Changes Done Not Published Still)
This layer is used to identify that whether the email body or the email title of the thread contain the month (current or previous).

# Layer-4 (No error possibility in this node)
This is the layer user to get the thread data and then process the thread data in the loop.


# Layer-5
Fifth layer is consist of the 3 rows following -

## Row-1(No error possibility)
In this row only outlook node exist that will reply if their is no JE find in the email.

## Row-2 (Their is the issue in this row of the email body process prompt-> If their with the month year is not available then this will take any year not sure)
1. In this row we are processing the email body first if the JE not find in the email body then move to the email attachments.
2. If their is no attachment and no JE in the body then this will reply that no JE find in the email body and in the Email attachments.
3. If the xl sheets does not contain the desired sheet name then their will a reply for that also.

## Row-3(No error possibility)
This row is used to if JE not found in the Email body.
In this we will get the sheet name , then filter the sheet name and pick the first sheet that contain the JE, If the valid sheet name found then proceed with that other wise reply that valid sheet not found in attachment.
