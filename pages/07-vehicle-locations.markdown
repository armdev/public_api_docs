---
layout: post
title:  "Vehicle Locations"
date:   2016-05-24 12:02:00 +0500
categories: endpoint
tags: vehicle-locations
---
<div id="list-vehicles-current-locations" markdown="1">
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
curl -H "X-Api-Key: 12345" "https://api.keeptruckin.com/v1/vehicle_locations"
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
          "lat": 47.565647,
          "lon": -122.276261,
          "description": "Seattle, WA",
          "located_at": "2016-03-17T12:12:07Z",
          "bearing": 90.0,
          "type": "vehicle_moving",
          "speed": 65.1
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
                <lat>47.565647</lat>
                <lon>-122.276261</lon>
                <description>Seattle, WA</description>
                <located_at>2016-03-17T12:12:07Z</located_at>
                <bearing>90.0</bearing>
                <type>vehicle_moving</type>
                <speed>65.1</speed>
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

</div>

<div id="list-single-vehicle-locations" markdown="1">

#### 2) Single day location histories of a vehicle

###### Request format:

```
GET /vehicle_locations/<id>
```

###### Request parameters:

+ id (**required** &#124; integer): valid vehicle id 
+ date (**required** &#124; date): Date of location history (Single Day)

###### Response Status:

+ 200
+ 400
+ 403 - Forbidden
+ 404 - vehicle not found

###### Response Body:

Single day location histories of vehicle

###### Example Request:

```
curl -H "X-Api-Key: 12345" -d "date=2016-05-24" "https://api.keeptruckin.com/v1/vehicle_locations/53"
```

###### Sample JSON Request:

```
GET /v1/vehicle_locations/53
```

###### Sample JSON Response:

```
{
  "location_histories": [
    {
      "location_history": {
        "located_at": "2016-05-24T06:01:11Z",
        "lat": 123.0,
        "lon": 456.0,
        "bearing": 1.24,
        "engine_hours": 234.22,
        "type": "vehicle_moving",
        "description": "6.2 mi N of San Francisco, CA",
        "speed": 50.1,
        "odometer": 7.58693991,
        "fuel": 2.96665156
      },
      "location_history": {
        "located_at": "2016-05-24T09:01:11Z",
        "lat": 123.0,
        "lon": 456.0,
        "bearing": 2.24,
        "engine_hours": 244.22,
        "type": "breadcrumb",
        "description": "6.2 mi N of San Francisco, CA",
        "speed": 40.4,
        "odometer": 5.58623553,
        "fuel": 1.34645126
      }
    }
  ]
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
    <location_histories>
        <location_history>
            <located_at>2016-05-24T06:01:11Z</located_at>
            <loc>123.0</loc>
            <lan>456.0</lon>
            <bearing>1.24</bearing>
            <engine_hours>234.22</engine_hours>
            <type>vehicle_moving</type>
            <description>6.2 mi N of San Francisco, CA</description>
            <speed>50.1</speed>
            <odometer>7.58693991</odometer>
            <fuel> 2.96665156</fuel>
        </location_history>
        <location_history>
            <located_at>2016-05-24T09:01:11Z</located_at>
            <loc>123.0</loc>
            <lan>456.0</lon>
            <bearing>2.24</bearing>
            <engine_hours>244.22</engine_hours>
            <type>breadcrumb</type>
            <description>6.2 mi N of San Francisco, CA</description>
            <speed>40.4</speed>
            <odometer>5.58623553</odometer>
            <fuel> 1.34645126</fuel>
        </location_history>
    </location_histories>
</data>
```
</div>