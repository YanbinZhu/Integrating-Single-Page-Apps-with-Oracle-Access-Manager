# Integrating-Single-Page-Apps-with-Oracle-Access-Manager

1. Try to resolve the Single Page Apps with Oracle Access Manager issue, after the end user got session time-out, the page will not able to redirect user to the login page, until end user forcely refresh the page.
2. Use interceptors to detect all the http errors, when the end-user got session time out, the interceptors will detect a -1 status, then do a force reload web page, the OAM will automaticly redirect to the login page.