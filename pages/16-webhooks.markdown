---
layout: post
title:  "Webhooks"
date:   2017-02-03 13:47:00 -0800
categories: endpoint
tags: webhooks
---

<div id="webhooks" markdown="1">

Webhooks allow you to be notified whenever certain actions occur within your fleet via an HTTP POST request to an endpoint of your choosing. If you have enabled webhooks for your fleet, KeepTruckin will make an HTTP POST request to your endpoint whenever the events you have setup occur.

One common use-case is vehicle location updates. If you want to be notified whenever a vehicle's current location updates you could subscribe to the `vehicle_location_updated` action and you will receive a request whenever any vehicle's location changes.

Webhook requests contain a JSON payload consisting of the action as well as any attributes relevant to the action. The list of currently support actions and their payloads are listed below.

##### Verifying Authenticity

Each webhook has a shared secret that KeepTruckin will use to sign the requests. The computed signature is included in the `X-KT-Webhook-Signature` HTTP header and can be used to verify that the request originated at KeepTruckin servers and has not been modified in-flight. You can respond with 403 if the signature does not match your computed expected value.

To compute the webhook signature, take the HMAC-SHA1 hex digest of the JSON payload using the shared secret.

Example payload:

```
{"action":"test"}
```

Example shared secret:

```
"8cbd43f98ba1e33c28c9"
```

This would have an `X-KT-Webhook-Signature` HTTP header value of `"5e1a966298ba4f3e91847aea8746198ca0530dd2"`.

Example using Bash:

```
echo -n '{"action":"test"}' | openssl dgst -sha1 -hmac "8cbd43f98ba1e33c28c9"
```

Example using Ruby:

```
OpenSSL::HMAC.hexdigest(OpenSSL::Digest.new('sha1'), '8cbd43f98ba1e33c28c9', '{"action":"test"}')
```

##### Expected Responses

KeepTruckin servers expect specific responses from your server to indicate the successful receipt of a webhook. Make sure that your endpoint handler responds with the appropriate response code. Additionally, your server must accept the connection within **5 seconds** and respond within **10 seconds** or the request will be assumed to have failed. It is up to the endpoint handler to ensure that requests are only processed once.

+ **200** or **201** - Indicates the webhook was processed successfully. KeepTruckin will consider the request final and will not retry.
+ **403** - Indicates the HMAC signature could not be verified. KeepTruckin will consider the request invalid and will not retry.
+ **4XX** or **5XX** - Indicates the webhook was not processed and should be retried. KeepTruckin will retry the request based on the schedule below.

##### Retry Schedule

KeepTruckin will make several attempts to retry failed requests using the following delays between attempts.

+ 10 seconds
+ 1 minute
+ 5 minutes
+ 10 minutes
+ 1 hour
+ 1 hour
+ 1 hour
+ 1 day

##### Enabling Webhooks (Test Requests)

Whenever you enable a webhook, change the URL, or change the shared secret, KeepTruckin will perform a test request to verify a successful response is received. The webhook will only be enabled if a response code of **200** or **201** is received. The test request payload is always the same:

```
{"action":"test"}
```

##### Supported Actions

###### Vehicle Current Location Updated (`vehicle_location_updated`)

Triggered whenever a vehicle location is received that is more recent than the current location.

Example Payload:

```
{
  "action": "vehicle_location_updated",
  "id": "5d3d5cf6-501f-4566-ad07-a80c05c743a7",    // unique identifier for the location object
  "vehicle_id": 123,                               // the vehicle id (foreign key)
  "located_at": "2017-01-01T12:00:00Z",            // time when the location was recorded (ISO8601 format)
  "lat": 34.123,                                   // latitude
  "lon": -84.123,                                  // longitude
  "bearing": 90.0,                                 // the direction of travel (0-360 degrees)
  "engine_hours": 123.56,                          // engine hours reported by the vehicle's ECU
  "speed": 123.5,                                  // speed reported by the vehicle's ECU
  "odometer": 2343232.23,                          // odometer reading reported by the vehicle's ECU
  "fuel": 23423.23,                                // amount of fuel used reported by the vehicle's ECU
  "type": "vehicle_moving",                        // indicates whether the location was captured when the vehicle started moving, stopped moving, or while already in motion
  "description": "3.2 mi SE of San Francisco, CA"  // description of the location
}
```

###### Vehicle Location Received (`vehicle_location_received`)

Triggered for all vehicle locations received regardless of whether they are the most recent or not.

Example Payload:

```
same as 'vehicle_location_updated' except the action is 'vehicle_location_received'
```

</div>

<div id="list-webhooks" markdown="1">

#### 1) List Webhooks

###### Request format:

```
GET /company_webhooks
```

###### Request parameters:

+ per_page (optional &#124; integer): no of records to return in response. default is 25
+ page_no (optional &#124; integer): page no for the records list. default is 1

###### Example Requests:

```
GET /company_webhooks
curl -H "X-Api-Key: 12345" "https://api.keeptruckin.com/v1/company_webhooks?per_page=100&page_no=1"
```

###### Response Status:

+ 200

###### Response Body:

+ List of configured webhooks

###### Sample JSON Request:

```
GET /company_webhooks.json
```

###### Sample JSON Response:

```
{
  "company_webhooks": [
    {
      "company_webhook": {
        "id": 42,
        "url": "https://keeptruckin.com/callbacktest/842b02",
        "secret": "fe8b75de0a4e5898f0011faeb8c93654",
        "format": "json",
        "actions": [
          "vehicle_location_received",
          "vehicle_location_updated"
        ],
        "enabled": false
      }
    },
    {
      "company_webhook": {
        "id": 43,
        "url": "https://keeptruckin.com/callbacktest/a6a783",
        "secret": "66a7368063cb21887f546c7af91be59c",
        "format": "json",
        "actions": [
          "vehicle_location_received",
          "vehicle_location_updated"
        ],
        "enabled": false
      }
    },
    {
      "company_webhook": {
        "id": 44,
        "url": "https://keeptruckin.com/callbacktest/53a52c",
        "secret": "4451dc96513b3a67107466dd2c4d9589",
        "format": "json",
        "actions": [
          "vehicle_location_received",
          "vehicle_location_updated"
        ],
        "enabled": false
      }
    },
    {
      "company_webhook": {
        "id": 45,
        "url": "https://keeptruckin.com/callbacktest/6fb337",
        "secret": "4177fbd88c30faaee03a4362648bd663",
        "format": "json",
        "actions": [
          "vehicle_location_received",
          "vehicle_location_updated"
        ],
        "enabled": false
      }
    },
    {
      "company_webhook": {
        "id": 46,
        "url": "https://keeptruckin.com/callbacktest/8cd6da",
        "secret": "6e41817a048b009435e5102fca17db55",
        "format": "json",
        "actions": [
          "vehicle_location_received",
          "vehicle_location_updated"
        ],
        "enabled": false
      }
    }
  ],
  "pagination": {
    "per_page": 25,
    "page_no": 1,
    "total": 5
  }
}
```

###### Sample XML Request:

```
GET /company_webhooks.xml
```

###### Sample XML Response:

```
<?xml version="1.0" encoding="UTF-8"?>
<data>
  <company_webhooks>
    <company_webhook>
      <id>42</id>
      <url>https://keeptruckin.com/callbacktest/842b02</url>
      <secret>fe8b75de0a4e5898f0011faeb8c93654</secret>
      <format>json</format>
      <actions>
        <action>vehicle_location_received</action>
        <action>vehicle_location_updated</action>
      </actions>
      <enabled>false</enabled>
    </company_webhook>
    <company_webhook>
      <id>43</id>
      <url>https://keeptruckin.com/callbacktest/a6a783</url>
      <secret>66a7368063cb21887f546c7af91be59c</secret>
      <format>json</format>
      <actions>
        <action>vehicle_location_received</action>
        <action>vehicle_location_updated</action>
      </actions>
      <enabled>false</enabled>
    </company_webhook>
    <company_webhook>
      <id>44</id>
      <url>https://keeptruckin.com/callbacktest/53a52c</url>
      <secret>4451dc96513b3a67107466dd2c4d9589</secret>
      <format>json</format>
      <actions>
        <action>vehicle_location_received</action>
        <action>vehicle_location_updated</action>
      </actions>
      <enabled>false</enabled>
    </company_webhook>
    <company_webhook>
      <id>45</id>
      <url>https://keeptruckin.com/callbacktest/6fb337</url>
      <secret>4177fbd88c30faaee03a4362648bd663</secret>
      <format>json</format>
      <actions>
        <action>vehicle_location_received</action>
        <action>vehicle_location_updated</action>
      </actions>
      <enabled>false</enabled>
    </company_webhook>
    <company_webhook>
      <id>46</id>
      <url>https://keeptruckin.com/callbacktest/8cd6da</url>
      <secret>6e41817a048b009435e5102fca17db55</secret>
      <format>json</format>
      <actions>
        <action>vehicle_location_received</action>
        <action>vehicle_location_updated</action>
      </actions>
      <enabled>false</enabled>
    </company_webhook>
  </company_webhooks>
  <pagination>
    <per_page>25</per_page>
    <page_no>1</page_no>
    <total>5</total>
  </pagination>
</data>
```

</div>

<div id="get-webhook" markdown="1">

#### 2) Get Webhook

###### Request format:

```
GET /company_webhooks/21
```

###### Request parameters:

+ id (required &#124; integer) the webhook ID to return

###### Example Requests:

```
GET /company_webhooks/21
curl -H "X-Api-Key: 12345" "https://api.keeptruckin.com/v1/company_webhooks/21"
```

###### Response Status:

+ 200, 404

###### Response Body:

+ Company Webhook

###### Sample JSON Request:

```
GET /company_webhooks/21.json
```

###### Sample JSON Response:

```
{
  "company_webhook": {
    "id": 21,
    "url": "https://keeptruckin.com/callbacktest/8e763a",
    "secret": "96d52f39772408084f08604207de7ebb",
    "format": "json",
    "actions": [
      "vehicle_location_received",
      "vehicle_location_updated"
    ],
    "enabled": false
  }
}
```

###### Sample XML Request:

```
GET /company_webhooks/21.xml
```

###### Sample XML Response:

```
<?xml version="1.0" encoding="UTF-8"?>
<data>
  <id>21</id>
  <url>https://keeptruckin.com/callbacktest/8e763a</url>
  <secret>96d52f39772408084f08604207de7ebb</secret>
  <format>json</format>
  <actions>
    <action>vehicle_location_received</action>
    <action>vehicle_location_updated</action>
  </actions>
  <enabled>false</enabled>
</data>
```

</div>

<div id="create-webhook" markdown="1">

#### 3) Create Webhook

###### Request format:

```
POST /company_webhooks
```

###### Request parameters:

+ url (required &#124; string) the URL for the webhook endpoint
+ secret (optional &#124; string) the shared secret (must be 20 characters and will be generated randomly if left blank)
+ format (optional &#124; string) the payload format for the webhook (only "json" is supported at this time)
+ actions (optional &#124; array of string): actions that will be supported by the webhook
+ enabled (optional &#124; boolean): true if the webhook is enabled

###### Example Requests:

```
POST /company_webhooks
curl -X POST -H "X-Api-Key: 12345" -d "url=https%3A%2F%2Fkeeptruckin.com%2Fcallbacktest%2F38ce76" "https://api.keeptruckin.com/v1/company_webhooks"
```

###### Response Status:

+ 201, 400

###### Response Body:

+ The newly configured webhook

###### Sample JSON Request:

```
POST /company_webhooks.json
```

###### Sample JSON Response:

```
{
  "company_webhook": {
    "id": 27,
    "url": "https://keeptruckin.com/callbacktest/bd0421",
    "secret": "67298a4636cb6e07ceabf750bb63e99d",
    "format": "json",
    "actions": [
      "vehicle_location_updated"
    ],
    "enabled": false
  }
}
```

###### Sample XML Request:

```
POST /company_webhooks.xml
```

###### Sample XML Response:

```
<?xml version="1.0" encoding="UTF-8"?>
<data>
  <id>27</id>
  <url>https://keeptruckin.com/callbacktest/bd0421</url>
  <secret>67298a4636cb6e07ceabf750bb63e99d</secret>
  <format>json</format>
  <actions>
    <action>vehicle_location_updated</action>
  </actions>
  <enabled>false</enabled>
</data>
```

</div>

<div id="update-webhook" markdown="1">

#### 4) Update Webhook

###### Request format:

```
PUT /company_webhooks/27
```

###### Request parameters:

+ id (required &#124; integer) the webhook ID to update
+ url (optional &#124; string) the URL for the webhook endpoint
+ secret (optional &#124; string) the shared secret (must be 20 characters and will be generated randomly if left blank)
+ format (optional &#124; string) the payload format for the webhook (only "json" is supported at this time)
+ actions (optional &#124; array of string): actions that will be supported by the webhook
+ enabled (optional &#124; boolean): true if the webhook is enabled

###### Example Requests:

```
PUT /company_webhooks/27?enabled=true
curl -X PUT -H "X-Api-Key: 12345" -d "enabled=true" "https://api.keeptruckin.com/v1/company_webhooks/27"
```

###### Response Status:

+ 200, 400, 404

###### Response Body:

+ The updated webhook object

###### Sample JSON Request:

```
PUT /company_webhooks/27.json
```

###### Sample JSON Response:

```
{
  "company_webhook": {
    "id": 27,
    "url": "https://keeptruckin.com/callbacktest/bd0421",
    "secret": "67298a4636cb6e07ceabf750bb63e99d",
    "format": "json",
    "actions": [
      "vehicle_location_updated"
    ],
    "enabled": true
  }
}
```

###### Sample XML Request:

```
PUT /company_webhooks/12.xml
```

###### Sample XML Response:

```
<?xml version="1.0" encoding="UTF-8"?>
<data>
  <id>27</id>
  <url>https://keeptruckin.com/callbacktest/bd0421</url>
  <secret>67298a4636cb6e07ceabf750bb63e99d</secret>
  <format>json</format>
  <actions>
    <action>vehicle_location_updated</action>
  </actions>
  <enabled>true</enabled>
</data>
```

</div>

<div id="delete-webhook" markdown="1">

#### 5) Delete Webhook

###### Request format:

```
DELETE /company_webhooks/27
```

###### Request parameters:

+ id (required &#124; integer) the webhook ID to delete

###### Example Requests:

```
DELETE /company_webhooks/27
curl -X DELETE -H "X-Api-Key: 12345" "https://api.keeptruckin.com/v1/company_webhooks/27"
```

###### Response Status:

+ 200, 400, 404

###### Response Body:

+ Success message

###### Sample JSON Request:

```
DELETE /company_webhooks/27.json
```

###### Sample JSON Response:

```
{
  "success": true
}
```

###### Sample XML Request:

```
DELETE /company_webhooks/27.xml
```

###### Sample XML Response:

```
<?xml version="1.0" encoding="UTF-8"?>
<data>
  <success>true</success>
</data>
```

</div>

<div id="list-webhook-requests" markdown="1">

#### 6) List Webhook Requests

###### Request format:

```
GET /company_webhook_requests
```

###### Request parameters:

+ company_webhook_id (optional &#124; integer) filter for webhook requests by webhook ID
+ action (optional &#124; string) filter for webhook requests by action
+ response_code (optional &#124; integer) filter for webhook requests by response code received
+ posted_after (optional &#124; datetime): filter for webhook requests posted after this time
+ posted_before (optional &#124; datetime): filter for webhook requests posted before this time
+ per_page (optional &#124; integer): no of records to return in response. default is 25
+ page_no (optional &#124; integer): page no for the records list. default is 1

###### Example Requests:

```
GET /company_webhook_requests
curl -H "X-Api-Key: 12345" "https://api.keeptruckin.com/v1/company_webhook_requests?response_code=400"
```

###### Response Status:

+ 200

###### Response Body:

+ Success message

###### Sample JSON Request:

```
GET /company_webhook_requests.json
```

###### Sample JSON Response:

```
{
  "company_webhook_requests": [
    {
      "company_webhook_request": {
        "id": 9,
        "company_webhook_id": 9,
        "action": "vehicle_location_updated",
        "url": "https://keeptruckin.com/callbacktest/b8271c",
        "secret": "75cac802b19050fa83fcffaddebab5bf",
        "format": "json",
        "payload": {
          "action": "vehicle_location_updated"
        },
        "response_code": null,
        "num_failures": 3,
        "posted_at": "2016-02-17T14:00:00Z"
      }
    },
    {
      "company_webhook_request": {
        "id": 8,
        "company_webhook_id": 8,
        "action": "vehicle_location_received",
        "url": "https://keeptruckin.com/callbacktest/6d4b6b",
        "secret": "51e07b1a7995bd9cd98f8569230d78ac",
        "format": "json",
        "payload": {
          "action": "vehicle_location_received"
        },
        "response_code": null,
        "num_failures": 4,
        "posted_at": "2016-02-16T14:00:00Z"
      }
    },
    {
      "company_webhook_request": {
        "id": 7,
        "company_webhook_id": 7,
        "action": "vehicle_location_updated",
        "url": "https://keeptruckin.com/callbacktest/5d9853",
        "secret": "a5d235965722c14ba163cbd618e7cdb6",
        "format": "json",
        "payload": {
          "action": "vehicle_location_updated"
        },
        "response_code": null,
        "num_failures": 5,
        "posted_at": "2016-02-15T14:00:00Z"
      }
    }
  ],
  "pagination": {
    "per_page": 25,
    "page_no": 1,
    "total": 3
  }
}
```

###### Sample XML Request:

```
GET /company_webhook_requests.xml
```

###### Sample XML Response:

```
<?xml version="1.0" encoding="UTF-8"?>
<data>
  <company_webhook_requests>
    <company_webhook_request>
      <id>9</id>
      <company_webhook_id>9</company_webhook_id>
      <action>vehicle_location_updated</action>
      <url>https://keeptruckin.com/callbacktest/b8271c</url>
      <secret>75cac802b19050fa83fcffaddebab5bf</secret>
      <format>json</format>
      <payload>
        <action>vehicle_location_updated</action>
      </payload>
      <response_code nil="true"/>
      <num_failures>3</num_failures>
      <posted_at>2016-02-17T14:00:00Z</posted_at>
    </company_webhook_request>
    <company_webhook_request>
      <id>8</id>
      <company_webhook_id>8</company_webhook_id>
      <action>vehicle_location_received</action>
      <url>https://keeptruckin.com/callbacktest/6d4b6b</url>
      <secret>51e07b1a7995bd9cd98f8569230d78ac</secret>
      <format>json</format>
      <payload>
        <action>vehicle_location_received</action>
      </payload>
      <response_code nil="true"/>
      <num_failures>4</num_failures>
      <posted_at>2016-02-16T14:00:00Z</posted_at>
    </company_webhook_request>
    <company_webhook_request>
      <id>7</id>
      <company_webhook_id>7</company_webhook_id>
      <action>vehicle_location_updated</action>
      <url>https://keeptruckin.com/callbacktest/5d9853</url>
      <secret>a5d235965722c14ba163cbd618e7cdb6</secret>
      <format>json</format>
      <payload>
        <action>vehicle_location_updated</action>
      </payload>
      <response_code nil="true"/>
      <num_failures>5</num_failures>
      <posted_at>2016-02-15T14:00:00Z</posted_at>
    </company_webhook_request>
  </company_webhook_requests>
  <pagination>
    <per_page>25</per_page>
    <page_no>1</page_no>
    <total>3</total>
  </pagination>
</data>
```

</div>

<div id="retry-webhook-requests" markdown="1">

#### 7) Retry Webhook Requests

###### Request format:

```
POST /company_webhook_requests/retry
```

###### Request parameters:

+ ids (required &#124; array of integers) the webhook request IDs to retry

###### Example Requests:

```
POST /company_webhook_requests
curl -X POST -H "X-Api-Key: 12345" -d "ids[]=123" "https://api.keeptruckin.com/v1/company_webhook_requests/retry
```

###### Response Status:

+ 200

###### Response Body:

+ Success message

###### Sample JSON Request:

```
POST /company_webhook_requests.json
```

###### Sample JSON Response:

```
{
  "success": true
}
```

###### Sample XML Request:

```
POST /company_webhook_requests.xml
```

###### Sample XML Response:

```
<?xml version="1.0" encoding="UTF-8"?>
<data>
  <success>true</success>
</data>
```

</div>
