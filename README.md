# back-end

Endpoint | Method | Requirements
------------ | ------------- | ------------- 
/api/auth/register | POST | username & password
/api/auth/login | POST | username & password
/api/auth/users | GET | N/A
/api/posts | GET | Valid token in Auth header
/api/posts | POST | title & description *required*, materials/instructions/video *optional*
