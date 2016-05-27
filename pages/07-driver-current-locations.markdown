---
layout: post
title:  "Driver Current Locations"
date:   2016-05-24 12:03:00 +0500
categories: endpoint
permalink: drivers-current-locations
---

#### 1) List of drivers with current location & current vehicle

###### Request format:

```
GET /driver_locations?driver_ids[]=<i>
```

###### Request parameters:

+ driver_ids (optional &#124; integer array)
+ per_page (optional &#124; integer): no of records to return in response. default is 25. Max is 100.
+ page_no (optional &#124; integer): page no for the records list. default is 1

###### Response Status:

+ 200
+ 400
+ 403 - Forbidden

###### Response Body:

List of matching users with details of current locations

###### Example Request:

```
curl -H "X-API-KEY: 12345" "https://api.keeptruckin.com/v1/driver_locations"
```

###### Sample JSON Request:

```
GET /v1/driver_locations
```

###### Sample JSON Response:

```
{
  "users": [
    {
      "user": {
        "id": 156,
        "first_name": "Harold",
        "last_name": "Hoeger",
        "username": "hobart",
        "email": null,
        "driver_company_id": null,
        "status": "deactivated",
        "role": "driver",
        "current_location": {
          "lat": -59.8708336274616,
          "lon": -91.2958210901819,
          "description": "Washington, AZ",
          "located_at": "2016-03-17T12:12:07Z"
         },
        "current_vehicle": {
          "id": 32,
          "number": "V-1000",
          "status": "active",
          "make": null,
          "model": null
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
GET /v1/driver_locations.xml
```

###### Sample XML Response:

```
<?xml version="1.0" encoding="UTF-8"?>
<data>
    <users>
        <user>
            <id>156</id>
            <first_name>Harold</first_name>
            <last_name>Hoeger</last_name>
            <username>hobart</username>
            <email nil="true"/>
            <driver_company_id nil="true"/>
            <status>deactivated</status>
            <role>driver</role>
            <current_location>
                <id>205783</id>
                <lat>-59.8708336274616</lat>
                <lon>-91.2958210901819</lon>
                <description>Washington, NZ</description>
                <located_at>2016-03-17T12:12:07Z</located_at>
            </current_location>
            <current_vehicle>
                <id>32</id>
                <number>V-1000</number>
                <status>active</status>
                <make nil="true"/>
                <model nil="true"/>
            </current_vehicle>
        </user>
    </users>
    <pagination>
        <per_page>25</per_page>
        <page_no>1</page_no>
        <total>1</total>
    </pagination>
</data>
```
