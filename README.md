# endpoints

Endpoint | Method | Requirements
------------ | ------------- | ------------- 
/api/auth/register | POST | username & password
/api/auth/login | POST | username & password
/api/auth/users | GET | Valid token in Authorization header
/api/posts | GET | Valid token in Authorization header
/api/posts | POST | title & description *required* --- materials/instructions/video *optional*
/api/posts/user/:id | GET | Valid token in Authorization header - returns a user's posts based on userId
/api/posts/:id | GET | Valid token in authorization header - returns a specific post based on postId
/api/posts/:id | DELETE | Deletes a post based on postID
/api/posts/:id | PUT | Change title/description/materials/instructions/video
/api/posts/:id/steps | GET | Valid token in authorization header
/api/posts/:id/steps | POST | stepName, stepNumber - ***stepNumber is a string***
------------ | ------------- | ------------- 


# /api/posts schema

name | type | required
---- | ---- | --------
title|string|yes
description|string|yes
materials|string|no
video|string/url|no
instruction|string|no

# /api/posts/:id/steps schema

name | type | required
---- | ---- | --------
posts_id|integer (should be pulled from whatever post they're trying to add a step to)| auto
stepName|string| no
stepNumber|***string***| no


