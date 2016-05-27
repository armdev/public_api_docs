---
layout: page
title:  "Getting Started"
date:   2016-05-20 12:05:47 +0500
categories:
  - introduction
  - getting-started
permalink: getting-started
---
Our APIs can all be accessed through HTTPS requests to URLs like

```
https://api.keeptruckin.com/v1/<endpoint>
```

##### <a name="authentication"></a> Authentication

We use a simple and secure authentication system. You must get an API key from the Keep Truckin dashboard, and provide that key on every API request. You can create multiple API keys for your company. If a key needs to be disabled because someone with it leaves the company or if it gets shared accidentally, you can disable it in the [KeepTruckin dashboard](https://dashboard.keeptruckin.com){:target="_blank"}. You should not share your API key with anyone outside your organization.

To authenticate, the API client needs to specify a Company API key in the following header. At this time, you will need to request API keys from <mailto:john@keeptruckin.com>.

| Name            | Value                       |
| :-------------: | :-------------------------: |
| X-Api-Key       | &#60;company api key&#62;   |

##### <a name="time-zone"></a> Time Zone

All times are in UTC, unless a timezone is specified in the request header.

| Name              | Value               |
| :---------------: | :-----------------: |
| X-TIME-ZONE       | &#60;time zone&#62; |

###### We support the following timezones:

"Atlantic Time (Canada)",  "Eastern Time (US & Canada)" (UTC -5, uses DST)
<br/> "Indiana (East)"  (UTC -5)
<br/> "Central Time (US & Canada)"  (UTC -6, uses DST)
<br/> "Saskatchewan", "Mountain Time (US & Canada)" (UTC -7, uses DST)
<br/> "Arizona" (UTC -7)
<br/> "Pacific Time (US & Canada)" (UTC -8, uses DST)
<br/> "Alaska" (UTC -9, uses DST)

###### Example:

```
curl -H ‘X-API-KEY: 12345’ -H ‘X-TIME-ZONE: Alaska’ ‘https://api.keeptruckin.com/v1/users’
```

##### <a name="response-codes"></a> Response Codes

The APIs respond with codes in the 200's, 400's, and 500's. Your API client  should handle each class differently.

###### 200s

These are successful responses and indicate the API request completed without any errors.

###### 400s

These indicate there was a problem with the request, like missing parameters or invalid parameter values. Requests that respond in the 400's should NOT be retried without modification.

###### 500s

These indicate there was a problem with the server and should be retried. They should only occur when the server is unreachable or misconfigured.

##### <a name="api-call"></a> Test out an API call

You can confirm your API key works and everything is setup correctly by trying a basic request to get a list of the drivers in your fleet. Try the following command on the command line:

```
curl -H 'X-API-KEY: <insert api key here>' 'https://api.keeptruckin.com/v1/users?role=driver'
```

If you do this with an API key associated with your fleet, you should get a response like:

```json
{
  "users": [
    {
      "user": {
        "id": 123,
        "email": "2c3e42cdaf57@keeptruckin.com",
        "first_name": "Pablo",
        "last_name": "Baskin",
        "dot_id": null,
        "phone": null,
        "phone_ext": null,
        "time_zone": "Pacific Time (US & Canada)",
        "role": "driver",
        "status": "active",
        "updated_at": "2016-02-24T06:26:00.000000Z"
      }
    },
  ],
  "pagination": {
    "per_page": 25,
    "page_no": 1,
    "total": 1
  }
}
```

