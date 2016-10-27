---
layout: post
title:  "Eld Devices"
date:   2016-10-24 18:18:29 +0500
categories: endpoint
tags: eld-devices
---

<div id="list-company-eld-devices" markdown="1">

#### 1) List company eld devices

###### Request format:

```
GET /eld_devices
```

###### Request parameters:

+ identifiers (optional &#124; array of integers): array of identifiers
+ vehicle_ids (optional &#124; array of integers): ids of vehicles
+ per_page (optional &#124; integer): no of records to return in response. default is 25
+ page_no (optional &#124; integer): page no for the records list. default is 1

###### Example Requests:

```
curl -H "X-Api-Key: 12345" "https://api.keeptruckin.com/v1/eld_devices?vehicle_ids[]=1&vehicle_ids[]=2&per_page=100&page_no=1"
```

###### Response Status:

+ 200

###### Response Body:

+ List of matching eld devices

###### Sample JSON Request:

```
GET /eld_devices.json?vehicle_ids[]=1&vehicle_ids[]=2&per_page=100&page_no=1
```

###### Sample JSON Response:

```
{
  "eld_devices": [
    {
      "eld_device": {
        "vehicle": {
          "id": 1,
          "number": "Demo Vehicle",
          "year": "2016",
          "make": "Demo",
          "model": "Vehicle",
          "vin": "WP0AB2966NS458669",
          "metric_units": false
        },
        "id": 1,
        "identifier": "81323613",
        "model": "lbb-1"
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
GET /eld_devices.xml?vehicle_ids[]=1&vehicle_ids[]=2&per_page=100&page_no=1
```

###### Sample XML Response:

```
<?xml version="1.0" encoding="UTF-8"?>
<data>
  <eld_devices>
    <eld_device>
      <vehicle>
        <id>1</id>
        <number>Demo Vehicle</number>
        <year>2016</year>
        <make>Demo</make>
        <model>Vehicle</model>
        <vin>WP0AB2966NS458669</vin>
        <metric_units>false</metric_units>
      </vehicle>
      <id>1</id>
      <identifier>81323613</identifier>
      <model>lbb-1</model>
    </eld_device>
  </eld_devices>
  <pagination>
    <per_page>25</per_page>
    <page_no>1</page_no>
    <total>1</total>
  </pagination>
</data>
```

</div>
