#end-points

Endpoint | Method | Requirements
------------ | ------------- | ------------- 
/api/auth/register | POST | username & password
/api/auth/login | POST | username & password
/api/auth/users | GET | Valid token in Authorization header
/api/posts | GET | Valid token in Authorization header
/api/posts | POST | title & description *required* --- materials/instructions/video *optional*
/api/posts/user/:id | GET | Valid token in Authorization header - returns a user's posts based on userId
/api/posts/:id | GET | Valid token in authorization header - returns a specific post based on postId

/api/posts/:id/steps | GET | Valid token in authorization header
/api/posts/:id/steps | POST | stepName, stepNumber, posts_id ALL REQUIRED
------------ | ------------- | ------------- 

        posts.string("title", 128).notNullable().unique().index();
        posts.string("description", 256).notNullable();
        posts.string("materials", 256);
        posts.string("video");
        posts.string("instructions");


# /api/posts Schema

name | type | required
---- | ---- | --------
title|string|yes
description|string|yes
materials|string|no
video|string/url|no
instruction|string|no

