---
layout: post
title:  "Hours of Service"
date:   2016-11-30 18:36:00 +0500
categories: endpoint
tags: hours-of-service
---

<div id="list-company-hours-of-service" markdown="1">

#### 1) List company hours of service

###### Request format:

```
GET /hours_of_service
```

###### Request parameters:

+ driver_ids (optional &#124; string): array of driver ids for hours of service
+ start_date (optional &#124; string): start date of date range for hours of service
+ end_date (optional &#124; string): end date of date range for hours of service
+ per_page (optional &#124; integer): no of records to return in response. default is 25
+ page_no (optional &#124; integer): page no for the records list. default is 1

###### Example Requests:

```
GET /hours_of_service?per_page=100&page_no=1
curl -H "X-Api-Key: 12345" "https://api.keeptruckin.com/v1/hours_of_service?per_page=100&page_no=1"
```

###### Response Status:

+ 200, 400

###### Response Body:

+ List of matching hours of service

###### Sample JSON Request:

```
GET /hours_of_service.json?per_page=100&page_no=1
```

###### Sample JSON Response:

```
{
  "hours_of_services": [
    {
      "hours_of_service": {
        "id": 47,
        "date": "2016-11-22",
        "off_duty_duration": 43200,
        "on_duty_duration": 7200,
        "sleeper_duration": 0,
        "driving_duration": 21600,
        "waiting_duration": 0,
        "driver": {
          "id": 11,
          "first_name": "Demo",
          "last_name": "Driver",
          "username": "demo_driver",
          "email": null,
          "driver_company_id": null,
          "status": "active",
          "role": "driver"
        }
      }
    }
  ],
  "pagination": {
    "per_page": 25,
    "page_no": 1,
    "total": 1
  }
}

```

###### Sample XML Request:

```
GET /hours_of_service.xml?per_page=100&page_no=1
```

###### Sample XML Response:

```
<?xml version="1.0" encoding="UTF-8"?>
<data>
    <hours_of_services>
        <hours_of_service>
            <id>47</id>
            <date>2016-11-22</date>
            <off_duty_duration>43200</off_duty_duration>
            <on_duty_duration>7200</on_duty_duration>
            <sleeper_duration>0</sleeper_duration>
            <driving_duration>21600</driving_duration>
            <waiting_duration>0</waiting_duration>
            <driver>
                <id>11</id>
                <first_name>Demo</first_name>
                <last_name>Driver</last_name>
                <username>demo_driver</username>
                <email />
                <driver_company_id />
                <status>active</status>
                <role>driver</role>
            </driver>
        </hours_of_service>
    </hours_of_services>
    <pagination>
        <per_page>25</per_page>
        <page_no>1</page_no>
        <total>1</total>
    </pagination>
</data>
```

</div>