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
          "id": "af5b6e0d-c442-414c-88d2-d95e5cb7affe",
          "lat": 47.565647,
          "lon": -122.276261,
          "description": "Seattle, WA",
          "located_at": "2016-03-17T12:12:07Z",
          "bearing": 90.0,
          "type": "vehicle_moving",
          "speed": 65.1,
          "engine_hours": 123.56,
          "fuel": 121.33,
          "odometer": 456.22
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
                <id>af5b6e0d-c442-414c-88d2-d95e5cb7affe</id>
                <lat>47.565647</lat>
                <lon>-122.276261</lon>
                <description>Seattle, WA</description>
                <located_at>2016-03-17T12:12:07Z</located_at>
                <bearing>90.0</bearing>
                <type>vehicle_moving</type>
                <speed>65.1</speed>
                <engine_hours>123.56</engine_hours>
                <fuel>121.33</fuel>
                <odometer>456.22</odometer>
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
curl -H "X-Api-Key: 12345" -d "date=2017-02-14" "https://api.keeptruckin.com/v1/vehicle_locations/53"
```

###### Sample JSON Request:

```
GET /v1/vehicle_locations/53
```

###### Sample JSON Response:

```
{
  "vehicle_locations": [
    {
      "vehicle_location": {
        "id": "d261099e-dd3d-4847-bfa1-fb62800bdfb3",
        "located_at": "2017-02-14T15:21:45Z",
        "lat": 33.6667275,
        "lon": 73.0131422,
        "bearing": 98.88,
        "engine_hours": 362.59728,
        "type": "engine_start",
        "description": "6.2 mi N of San Francisco, CA",
        "speed": 0,
        "odometer": 904.357366496655,
        "fuel": 19.58731560404,
        "driver": {
          "id": 5,
          "first_name": "John",
          "last_name": "Doe",
          "username": null,
          "email": "f703a80782ea@keeptruckin.com",
          "driver_company_id": null,
          "status": "active",
          "role": "driver"
        }
      }
    },
    {
      "vehicle_location": {
        "id": "fb11576e-d65a-49be-85d3-650d51911c90",
        "located_at": "2017-02-14T15:21:46Z",
        "lat": 33.6667275,
        "lon": 73.0131422,
        "bearing": 148.85,
        "engine_hours": 362.59728,
        "type": "vehicle_moving",
        "description": "6.2 mi N of San Francisco, CA",
        "speed": 5,
        "odometer": 904.358488444132,
        "fuel": 19.58731560404,
        "driver": {
          "id": 5,
          "first_name": "John",
          "last_name": "Doe",
          "username": null,
          "email": "f703a80782ea@keeptruckin.com",
          "driver_company_id": null,
          "status": "active",
          "role": "driver"
        }
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
  <vehicle_locations>
    <vehicle_location>
      <id>d261099e-dd3d-4847-bfa1-fb62800bdfb3</id>
      <located_at>2017-02-14T15:21:45Z</located_at>
      <lat>33.6667275</lat>
      <lon>73.0131422</lon>
      <bearing>98.88</bearing>
      <engine_hours>362.59728</engine_hours>
      <type>engine_start</type>
      <description>6.2 mi N of San Francisco, CA</description>
      <speed>0</speed>
      <odometer>904.3573664966549</odometer>
      <fuel>19.58731560404</fuel>
      <driver>
        <id>5</id>
        <first_name>John</first_name>
        <last_name>Doe</last_name>
        <username nil="true"/>
        <email>542215da3862@keeptruckin.com</email>
        <driver_company_id nil="true"/>
        <status>active</status>
        <role>driver</role>
      </driver>
    </vehicle_location>
    <vehicle_location>
      <id>fb11576e-d65a-49be-85d3-650d51911c90</id>
      <located_at>2017-02-14T15:21:46Z</located_at>
      <lat>33.6667275</lat>
      <lon>73.0131422</lon>
      <bearing>148.85</bearing>
      <engine_hours>362.59728</engine_hours>
      <type>vehicle_moving</type>
      <description>6.2 mi N of San Francisco, CA</description>
      <speed>5.0</speed>
      <odometer>904.3584884441325</odometer>
      <fuel>19.58731560404</fuel>
      <driver>
        <id>5</id>
        <first_name>John</first_name>
        <last_name>Doe</last_name>
        <username nil="true"/>
        <email>542215da3862@keeptruckin.com</email>
        <driver_company_id nil="true"/>
        <status>active</status>
        <role>driver</role>
      </driver>
    </vehicle_location>
  </vehicle_locations>
</data>
```
</div>
