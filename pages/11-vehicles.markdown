---
layout: post
title:  "Vehicles"
date:   2016-10-13 12:07:00 +0500
categories: endpoint
tags: vehicles
---

<div id="list-company-vehicles" markdown="1">

#### 1) List company vehicles

###### Request format:

```
GET /vehicles
```

###### Request parameters:

+ driver_ids (optional &#124; string): driver ids of vehicles
+ fuel_type (optional &#124; string): vehicle's fuel type, valid values can be 'diesel', 'gasoline' etc
+ per_page (optional &#124; integer): no of records to return in response. default is 25
+ page_no (optional &#124; integer): page no for the records list. default is 1

###### Example Requests:

```
GET /vehicles?fuel_type=diesel&per_page=100&page_no=1
curl -H "X-Api-Key: 12345" "https://api.keeptruckin.com/v1/vehicles?fuel_type=diesel&per_page=100&page_no=1"
```

###### Response Status:

+ 200, 404

###### Response Body:

+ List of matching vehicles

###### Sample JSON Request:

```
GET /vehicles.json?fuel_type=diesel&per_page=100&page_no=1
```

###### Sample JSON Response:

```
{
  "vehicles": [
    {
      "vehicle": {
        "id": 4,
        "company_id": 5,
        "number": "Demo Vehicle",
        "status": "active",
        "ifta": true,
        "vin": "WP0AB2966NS458669",
        "make": "Demo",
        "model": "Vehicle",
        "year": "2016",
        "license_plate_state": "CA",
        "license_plate_number": "5M37250",
        "metric_units": false,
        "fuel_type": "diesel",
        "eld_device": {
          "id": 2,
          "identifier": "000074802542164638439715893965",
          "model": "lbb-1"
        },
        "current_driver": {
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
    "per_page": 100,
    "page_no": 1,
    "total": 1
  }
}
```

###### Sample XML Request:

```
GET /vehicles.xml?fuel_type=diesel&per_page=100&page_no=1
```

###### Sample XML Response:

```
<?xml version="1.0" encoding="UTF-8"?>
<data>
    <vehicles>
        <vehicle>
            <id>4</id>
            <company_id>5</company_id>
            <number>Demo Vehicle</number>
            <status>active</status>
            <ifta>true</ifta>
            <vin>WP0AB2966NS458669</vin>
            <make>Demo</make>
            <model>Vehicle</model>
            <year>2016</year>
            <license_plate_state>CA</license_plate_state>
            <license_plate_number>5M37250</license_plate_number>
            <metric_units>false</metric_units>
            <fuel_type>diesel</fuel_type>
            <eld_device>
                <id>2</id>
                <identifier>000074802542164638439715893965</identifier>
                <model>lbb-1</model>
            </eld_device>
            <current_driver>
                <id>11</id>
                <first_name>Demo</first_name>
                <last_name>Driver</last_name>
                <username>demo_driver</username>
                <email nil="true"/>
                <driver_company_id nil="true"/>
                <status>active</status>
                <role>driver</role>
            </current_driver>
        </vehicle>
    </vehicles>
    <pagination>
        <per_page>100</per_page>
        <page_no>1</page_no>
        <total>1</total>
    </pagination>
</data>
```

</div>

<div id="specific-vehicle" markdown="1">

#### 2) Get a specific vehicle

###### Request format:

```
GET /vehicles/<id>
```

###### Request parameters:

+ id (**required** &#124; integer): valid vehicle id

###### Response Status:

+ 200, 401, 403, 404

###### Response Body:

Returns vehicle object based on vehicle id.

###### Example Request:

```
curl -H "X-Api-Key: 12345" "https://api.keeptruckin.com/v1/vehicles/4"
```

###### Sample JSON Request:

```
GET /vehicles/4
```

###### Sample JSON Response:

```
{
  "vehicle": {
    "id": 4,
    "company_id": 5,
    "number": "Demo Vehicle",
    "status": "active",
    "ifta": true,
    "vin": "WP0AB2966NS458669",
    "make": "Demo",
    "model": "Vehicle",
    "year": "2016",
    "license_plate_state": "CA",
    "license_plate_number": "5M37250",
    "metric_units": false,
    "fuel_type": "diesel",
    "eld_device": {
      "id": 2,
      "identifier": "000074802542164638439715893965",
      "model": "lbb-1"
    },
    "current_driver": {
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
```

###### Sample XML Request:

```
GET /vehicles/4.xml
```

###### Sample XML Response:

```
<?xml version="1.0" encoding="UTF-8"?>
<data>
    <id>4</id>
    <company_id>5</company_id>
    <number>Demo Vehicle</number>
    <status>active</status>
    <ifta>true</ifta>
    <vin>WP0AB2966NS458669</vin>
    <make>Demo</make>
    <model>Vehicle</model>
    <year>2016</year>
    <license_plate_state>CA</license_plate_state>
    <license_plate_number>5M37250</license_plate_number>
    <metric_units>false</metric_units>
    <fuel_type>diesel</fuel_type>
    <eld_device>
        <id>2</id>
        <identifier>000074802542164638439715893965</identifier>
        <model>lbb-1</model>
    </eld_device>
    <current_driver>
        <id>11</id>
        <first_name>Demo</first_name>
        <last_name>Driver</last_name>
        <username>demo_driver</username>
        <email nil="true"/>
        <driver_company_id nil="true"/>
        <status>active</status>
        <role>driver</role>
    </current_driver>
</data>
```

</div>

<div id="new-vehicle" markdown="1">

#### 3) Create a new vehicle

###### Request format:

```
POST /vehicles
```

###### Request parameters:

+ number (**required** &#124; string): number of vehicle
+ eld_device_id (optional &#124; integer): id of the eld device to attach to the vehicle
+ ifta (optional &#124; boolean): true if vehicle is included in ifta calculations
+ metric_units (optional &#124; boolean): true if the vehicle uses metric units
+ fuel_type (optional &#124; string): valid values are ("diesel", "gasoline", "propane", "lng", "cng", "ethanol", "methanol", "e85", "m85", "a55", "biodiesel", "other")
+ vin (optional &#124; string)
+ license_plate_state (optional &#124; string)
+ license_plate_number (optional &#124; string)
+ make (optional &#124; string)
+ model (optional &#124; string)
+ year  (optional &#124; string)

###### Response Status:

+ 201 - vehicle created
+ 400 - vehicle cannot be created
+ 403 - Forbidden

###### Example Request:

```
curl -H "X-Api-Key: 12345" -d "number=12345&eld_device_id=45&ifta=true&metric_units=true&fuel_type=diesel" "https://api.keeptruckin.com/v1/vehicles"
```

###### Response Body:

Vehicle details

###### Sample JSON Request:

```
POST /vehicles
```

###### Body:

```
{
  "number" : "12345",
  "ifta" : true,
  "staus" : "deactivated"
}
```

###### Sample JSON Response:

Same as specific vehicle's response.

</div>

<div id="existing-vehicle" markdown="1">

#### 4) Update an existing vehicle

###### Request format:

```
PUT /vehicles/:id
```

###### Request parameters:

+ id (required &#124; integer): id of the vehicle to update
+ ifta (optional &#124; boolean): true if vehicle is included in ifta calculations
+ metric_units (optional &#124; boolean): true if the vehicle uses metric units
+ status (optional &#124; string): status of vehicle. valid values are ("active", "deactivated")
+ fuel_type (optional &#124; string): valid values are ("diesel", "gasoline", "propane", "lng", "cng", "ethanol", "methanol", "e85", "m85", "a55", "biodiesel", "other")
+ vin (optional &#124; string)
+ license_plate_state (optional &#124; string)
+ license_plate_number (optional &#124; string)
+ make (optional &#124; string)
+ model (optional &#124; string)
+ year  (optional &#124; string)

###### Example Request:

```
curl -X PUT -H "X-Api-Key: 12345" -d "eld_device_id=45&ifta=true&metric_units=true&fuel_type=diesel" "https://api.keeptruckin.com/v1/vehicles/5"
```

###### Response Status:

+ 200 - vehicle updated
+ 400 - vehicle cannot be updated
+ 403 - Forbidden
+ 404 - vehicle not found

###### Response Body:

Vehicle details.

###### Sample Request:

```
PUT /vehicles/5
```

###### Body:

```
{
  "ifta" : true,
  "staus" : "deactivated"
}
```

###### Sample Response:

Same as specific vehicle's response.

</div>
