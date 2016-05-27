---
layout: post
title:  "Vehicle Current Locations"
date:   2016-05-24 12:02:00 +0500
categories: endpoint
permalink: vehicle-current-locations
---

#### 1) List of vehicles with current location and current driver

###### Request format:

```
GET /vehicle_locations?vehicle_ids[]=<i>
```

###### Request parameters:

+ vehicle_ids (optional &#124; integer array)
+ per_page (optional &#124; integer): no of records to return in response. default is 25. Max is 100.
+ page_no (optional &#124; integer): page no for the records list. default is 1

###### Response Status:

+ 200
+ 400
+ 403 - Forbidden

###### Response Body:

List of matching vehicles with details of current locations

###### Example Request:

```
curl -H "X-API-KEY: 12345" "https://api.keeptruckin.com/v1/vehicle_locations"
```

###### Sample JSON Request:

```
GET /v1/vehicle_locations
```

###### Sample JSON Response:

```
{
  "vehicles": [
    {
      "vehicle": {
        "id": 23,
        "number": "V-1000",
        "year": null,
        "make": null,
        "model": null,
        "vin": null,
        "current_location": {
          "lat": -59.8708336274616,
          "lon": -91.2958210901819,
          "description": "Washington, AZ",
          "located_at": "2016-03-17T12:12:07Z"
         },
        "current_driver": {
          "id": 104,
          "first_name": "Jensen",
          "last_name": "Effertz",
          "username": null,
          "email": "6b6cf86e12d4@keeptruckin.com",
          "driver_company_id": null,
          "status": "deactivated",
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
GET /v1/vehicle_locations.xml
```

###### Sample XML Response:

```
<?xml version="1.0" encoding="UTF-8"?>
<data>
    <vehicles>
        <vehicle>
            <id>23</id>
            <number>V-1000</number>
            <year nil="true"/>
            <make nil="true"/>
            <model nil="true"/>
            <vin nil="true"/>
            <current_location>
                <id>205783</id>
                <lat>-59.8708336274616</lat>
                <lon>-91.2958210901819</lon>
                <description>Washington, NZ</description>
                <located_at>2016-03-17T12:12:07Z</located_at>
            </current_location>
            <current_driver>
                <id>104</id>
                <first_name>Jensen</first_name>
                <last_name>Effertz</last_name>
                <username nil="true"/>
                <email>6b6cf86e12d4@keeptruckin.com</email>
                <driver_company_id nil="true"/>
                <status>deactivated</status>
                <role>driver</role>
            </current_driver>
        </vehicle>
    </vehicles>
    <pagination>
        <per_page>25</per_page>
        <page_no>1</page_no>
        <total>1</total>
    </pagination>
</data>
```
