---
layout: page
title:  "Getting Started"
date:   2016-05-20 12:05:47 +0500
categories:
  - introduction
  - getting-started
tags: getting-started
---
Our APIs can all be accessed through HTTPS requests to URLs like:

```
https://api.keeptruckin.com/v1/<endpoint>
```

<div id="authentication" markdown="1">

##### Authentication

We use a simple and secure authentication system. You must get an API key from the [KeepTruckin dashboard](https://dashboard.keeptruckin.com/#/admin/api){:target="_blank"}, and provide that key on every API request. You can create multiple API keys for your company. If a key needs to be disabled because someone with it leaves the company or if it gets shared accidentally, you can disable it in the [KeepTruckin dashboard](https://dashboard.keeptruckin.com/#/admin/api){:target="_blank"}. You should not share your API key with anyone outside your organization.

To authenticate, the API client needs to include a Company API key in an HTTP header.

<b>NOTE</b>: API keys can be configured for "test mode" or "live mode". A test API key will never modify data and is useful when developing your integration. Use a test API key to experiment with the API without accidentally making unwanted changes to your company profile or fleet.

| Header Name     | Value                       |
| :-------------: | :-------------------------: |
| X-Api-Key       | &#60;company api key&#62;   |

</div>

<div id="time-zone" markdown="1">

##### Time Zone

All times are in UTC, unless a time zone is specified in an HTTP header.

| Header Name       | Value               |
| :---------------: | :-----------------: |
| X-Time-Zone       | &#60;time zone&#62; |

###### We support the following values in the X-Time-Zone header:

 | Header Value                    | UTC Offset       |
 | :-----------------------------: | :--------------: |
 | Atlantic Time (Canada)          | UTC -4, uses DST |
 | Eastern Time (US &amp; Canada)  | UTC -5, uses DST |
 | Indiana (East)                  | UTC -5, no DST   |
 | Central Time (US &amp; Canada)  | UTC -6, uses DST |
 | Saskatchewan                    | UTC -6, no DST   |
 | Mountain Time (US &amp; Canada) | UTC -7, uses DST |
 | Arizona                         | UTC -7, no DST   |
 | Pacific Time (US &amp; Canada)  | UTC -8, uses DST |
 | Alaska                          | UTC -9, uses DST |

###### Example:

```
curl -H 'X-Api-Key: 24eb4181-ee55-446b-a25b-b39777cf4d8d' -H 'X-Time-Zone: Alaska' 'https://api.keeptruckin.com/v1/users'
```

</div>

<div id="request-methods" markdown="1">

##### Request Methods

All KeepTruckin APIs use HTTP request methods to indicate the desired operation to be performed. All endpoints in this documentation will specify the request method that should be used for each API request.

###### GET

Use a `GET` request when fetching data (like listing all your company's drivers).

###### POST

Use a `POST` request when creating new records (like adding a driver to your fleet).

###### PUT

Use a `PUT` request when updating existing records (like changing a driver's cycle setting).

###### DELETE

Use a `DELETE` request when deleting existing records (like removing a driver from your fleet).

</div>

<div id="response-codes" markdown="1">

##### Response Codes

The APIs respond with codes in the 200's, 400's, and 500's. Your API client should handle each class differently.

###### 2XX

These are successful responses and indicate the API request completed without any errors.

###### 4XX

These indicate there was a problem with the request, like missing parameters or invalid parameter values. Check the response for specific error details. Requests that respond in the 400's should NOT be retried without modification.

###### 5XX

These indicate there was a problem with the server and should be retried. They should only occur when the server is unreachable or misconfigured.

</div>

<div id="response-formats" markdown="1">

##### Response Formats

Responses can be formatted with JSON or XML. To specify the desired response format, append `.json` or `.xml` to the request path or use the `Accept` HTTP header. JSON is the default when nothing is specified.

###### JSON Examples:
```
curl -H 'X-Api-Key: <insert api key here>' 'https://api.keeptruckin.com/v1/users.json'
curl -H 'Accept: application/json' -H 'X-Api-Key: <insert api key here>' 'https://api.keeptruckin.com/v1/users'
```

###### XML Examples:
```
curl -H 'X-Api-Key: <insert api key here>' 'https://api.keeptruckin.com/v1/users.xml'
curl -H 'Accept: application/xml' -H 'X-Api-Key: <insert api key here>' 'https://api.keeptruckin.com/v1/users'
```

</div>

<div id="pagination" markdown="1">

##### Pagination

All GET requests will limit the number of results returned at a time for performance reasons and so all APIs support pagination for enumerating large numbers of records in the responses. By default, only 25 results will be included at a time and so you will need to increase the number of results per page or request each page consecutively. The API supports the following parameters for paginating results.

+ per_page (optional &#124; integer): number of results to return in response. default is 25
+ page_no (optional &#124; integer): the page number to return. default is 1

The total number of results, page number, and number of results per page are included in all requests.

###### Example:

```json
{
  "pagination": {
    "per_page": 25,
    "page_no": 1,
    "total": 123
  }
}
```

</div>

<div id="api-call" markdown="1">

##### Test out an API call

You can confirm your API key works and everything is setup correctly by trying a basic request to get a list of the drivers in your fleet. Try the following command on the command line:

```
curl -H 'X-Api-Key: <insert api key here>' 'https://api.keeptruckin.com/v1/users?role=driver'
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
</div>
