# HTTP Errors Code 

HTTP Error Codes are standardized status codes returned by a web server in response to a client's request. They indicate whether the request was successful, redirected, resulted in an error, or requires further action. These codes help both developers and users understand what happened during the communication between the client (like a web browser) and the server.

Key Points:

Three-digit codes categorize the type of response:
1xx (Informational): The request is being processed.
2xx (Success): The request was successful.
3xx (Redirection): Further action is needed to complete the request.
4xx (Client Error): The request has an error originating from the client.
5xx (Server Error): The server failed to fulfill a valid request.

# Purpose of HTTP Error Codes

To inform the client about the status of their request.
To help troubleshoot issues by understanding the nature of errors.
To guide the client on potential next steps (like authentication, redirection, or correcting request errors).

# 1xx – Informational
These codes indicate that the request was received and understood. They are provisional responses.

Code	        Meaning	                    Description

100	            Continue	            The server received the request headers, and the client should proceed to send the body.
101	        Switching Protocols	        The requester has asked the server to switch protocols (e.g., HTTP to WebSocket), and the server has agreed.
102     	Processing (WebDAV)	        The server has received and is processing the request, but no response is available yet.


# 2xx – Success
These codes indicate that the request was successfully received, understood, and accepted.

Code	Meaning	                        Description

200	    OK	                            Standard response for successful HTTP requests.
201	    Created	                        The request has been fulfilled and resulted in a new resource being created.
202	    Accepted	                    The request has been accepted for processing, but the processing is not complete.
204	    No Content	                    The server successfully processed the request, but is not returning any content.


# 3xx – Redirection

These codes indicate that further action needs to be taken by the user agent to complete the request.

Code	    Meaning     	                    Description
301 	Moved Permanently	            The resource has been permanently moved to a new URL.
302	    Found (Moved Temporarily)	    The resource resides temporarily under a different URL.
303	    See Other	                    The response can be found under a different URI and should be retrieved using a GET method.
304	    Not Modified	                The resource has not been modified since the last request. Used for caching purposes.
307	    Temporary Redirect	            Same as 302 but does not allow changing the HTTP method.
308	    Permanent Redirect	            Same as 301 but does not allow changing the HTTP method.


# 4xx – Client Errors

These codes are meant to indicate an error that was caused by the client.

Code	Meaning	                   Description

400	    Bad Request	            The server cannot process the request due to a client error (e.g., malformed syntax).
401	    Unauthorized	        Authentication is required and has failed or has not been provided.
403	    Forbidden	            The client does not have access rights to the content.
404	    Not Found	            The requested resource could not be found on the server.
405	    Method Not Allowed	    The request method is known but has been disabled or is not supported.
406	    Not Acceptable	        The server cannot produce a response matching the list of acceptable values defined in the request headers.
408	    Request Timeout	        The server timed out waiting for the request.
409	    Conflict	            The request could not be completed due to a conflict with the current state of the resource.
410	    Gone	                The resource is no longer available and will not be available again.
413	    Payload Too Large	    The request is larger than the server is willing or able to process.
415	    Unsupported Media Type	The request entity has a media type which the server or resource does not support.
429	    Too Many Requests	    The user has sent too many requests in a given amount of time.



# 5xx – Server Errors

These codes indicate that the server failed to fulfill a valid request.

Code    	Meaning	                       Description
500	    Internal Server Error	    A generic error message when the server encounters an unexpected condition.
501	    Not Implemented	            The server does not support the functionality required to fulfill the request.
502	    Bad Gateway	                The server, while acting as a gateway or proxy, received an invalid response from the upstream server.
503	    Service Unavailable	        The server is currently unavailable (due to overload or maintenance).
504	    Gateway Timeout	            The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server.
505	    HTTP Version Not Supported	T  he server does not support the HTTP protocol version used in the request.