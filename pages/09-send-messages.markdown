---
layout: post
title:  "Send Messages"
date:   2016-05-24 12:01:00 +0500
categories: endpoint
tags: send-messages
---

#### 1) Send a Message

###### Request format:

```
POST /messages
```

###### Request parameters:

+ recipient_id (**required** &#124; integer) *these are the same as id in the user API
+ body (**required** &#124; string)

###### Request Headers:

```
HTTP_X_USER_ID(optional) default: admin. messages/emails will be sent on behalf of this user.
```

###### Response Status:

+ 201 - Message sent
+ 400 - Error occurred
+ 403 - Forbidden
+ 404 - recipient not found

###### Example Request:

```
curl -X POST -H "X-API-KEY: 12345" -d "recipient_id=1&body=hello, this is a test /'message/'" "https://api.keeptruckin.com/v1/messages"
```

###### Sample Request:

```
POST /v1/messages
```

###### Body:

```
{
  "recipient_id": 1,
  "body" : "hello, this is a test /'message/'"
}
```


###### Sample Response:

```
{
  "success": true
}
```
