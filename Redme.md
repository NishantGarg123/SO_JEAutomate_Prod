# There are the some layer on each layer we will have the sone nodes each node will contain the file corresponding to their code or the functionality.

# Layer-1 (No possibility of error)
In this layer we have the outlook thread length verifier( that will find out the length of the thread) and on the basis of length decide the path.

# Layer-2 (No possibility of error)
This layer has the two functionality currently
1. Process the email body based on the length of the email thread.
2. Check is the valid user ( Exist in the valid user list?)

# Layer-3 (This may cause the issue currently their is the Feedback)
This layer is used to identify that whether the email body or the email title of the thread contain the month (current or previous).

# Layer-4 (No error possibility in this node)
This is the layer user to get the thread data and then process the thread data in the loop.

