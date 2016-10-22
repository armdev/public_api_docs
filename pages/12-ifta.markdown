---
layout: post
title:  "Ifta Reports"
date:   2016-10-20 13:07:00 +0500
categories: endpoint
tags: ifta
---

<div id="ifta-trips" markdown="1">

#### 1) Ifta Trips

###### Request format:

```
GET /ifta/trips
```

###### Request parameters:

+ start_date (optional &#124; date) start date of ifta trips
+ end_date (optional &#124; date) end date of ifta trips
+ jurisdictions (optional &#124; string) jurisdiction name
+ vehicle_ids (optional &#124; array of integers): ids of vehicles
+ fuel_type (optional &#124; string): vehicle's fuel type, valid values can be 'diesel', 'gasoline' etc
+ per_page (optional &#124; integer): no of records to return in response. default is 25
+ page_no (optional &#124; integer): page no for the records list. default is 1

###### Example Requests:

```
GET /ifta/trips?fuel_type=diesel&per_page=100&page_no=1
curl -H "X-Api-Key: 12345" "https://api.keeptruckin.com/v1/ifta/trips?fuel_type=diesel&per_page=100&page_no=1"
```

###### Response Status:

+ 200, 400, 403

###### Response Body:

+ List of ifta trips

###### Sample JSON Request:

```
GET /ifta/trips.json
```

###### Sample JSON Response:

```
{
  "ifta_trips": [
    {
      "ifta_trip": {
        "id": 42,
        "date": "2016-10-05",
        "jurisdiction": "CA",
        "vehicle": {
          "id": 4,
          "number": "Demo Vehicle",
          "year": "2016",
          "make": "Demo",
          "model": "Vehicle",
          "vin": "WP0AB2966NS458669",
          "metric_units": false
        },
        "start_odometer": 0.6835081,
        "end_odometer": 1.3670162,
        "distance": 0.6835081,
        "time_zone": "Pacific Time (US & Canada)"
      }
    },
    {
      "ifta_trip": {
        "id": 25,
        "date": "2016-08-01",
        "jurisdiction": "NJ",
        "vehicle": {
          "id": 4,
          "number": "Demo Vehicle",
          "year": "2016",
          "make": "Demo",
          "model": "Vehicle",
          "vin": "WP0AB2966NS458669",
          "metric_units": false
        },
        "start_odometer": 2613.59205907,
        "end_odometer": 2719.80921781,
        "distance": 104.676158659999,
        "time_zone": "Pacific Time (US & Canada)"
      }
    }
  ],
  "pagination": {
    "per_page": 25,
    "page_no": 1,
    "total": 2
  }
}
```

###### Sample XML Request:

```
GET /ifta/trips.xml
```

###### Sample XML Response:

```
<?xml version="1.0" encoding="UTF-8"?>
<data>
    <ifta_trips>
        <ifta_trip>
            <id>42</id>
            <date>2016-10-05</date>
            <jurisdiction>CA</jurisdiction>
            <vehicle>
                <id>4</id>
                <number>Demo Vehicle</number>
                <year>2016</year>
                <make>Demo</make>
                <model>Vehicle</model>
                <vin>WP0AB2966NS458669</vin>
                <metric_units>false</metric_units>
            </vehicle>
            <start_odometer>0.6835081000000001</start_odometer>
            <end_odometer>1.3670162000000001</end_odometer>
            <distance>0.6835081000000001</distance>
            <time_zone>Pacific Time (US &amp; Canada)</time_zone>
        </ifta_trip>
        <ifta_trip>
            <id>25</id>
            <date>2016-08-01</date>
            <jurisdiction>NJ</jurisdiction>
            <vehicle>
                <id>4</id>
                <number>Demo Vehicle</number>
                <year>2016</year>
                <make>Demo</make>
                <model>Vehicle</model>
                <vin>WP0AB2966NS458669</vin>
                <metric_units>false</metric_units>
            </vehicle>
            <start_odometer>2613.5920590700002</start_odometer>
            <end_odometer>2719.8092178099996</end_odometer>
            <distance>104.67615865999939</distance>
            <time_zone>Pacific Time (US &amp; Canada)</time_zone>
        </ifta_trip>
    </ifta_trips>
    <pagination>
        <per_page>25</per_page>
        <page_no>1</page_no>
        <total>2</total>
    </pagination>
</data>
```

</div>

<div id="ifta-summary" markdown="1">

#### 2) Ifta Summary

###### Request format:

```
GET /ifta/summary
```

###### Request parameters:

+ start_date (optional &#124; date) start date of ifta trips
+ end_date (optional &#124; date) end date of ifta trips
+ jurisdictions (optional &#124; string) jurisdiction name
+ vehicle_ids (optional &#124; array of integers): ids of vehicles
+ fuel_type (optional &#124; string): vehicle's fuel type, valid values can be 'diesel', 'gasoline' etc
+ per_page (optional &#124; integer): no of records to return in response. default is 25
+ page_no (optional &#124; integer): page no for the records list. default is 1

###### Response Status:

+ 200, 400, 403

###### Response Body:

+ List of ifta summary

###### Example Request:

```
curl -H "X-Api-Key: 12345" "https://api.keeptruckin.com/v1/ifta/summary"
```

###### Sample JSON Request:

```
GET /ifta/summary
```

###### Sample JSON Response:

```
{
  "ifta_trips": [
    {
      "ifta_trip": {
        "jurisdiction": "CA",
        "vehicle": {
          "id": 4,
          "number": "Demo Vehicle",
          "year": "2016",
          "make": "Demo",
          "model": "Vehicle",
          "vin": "WP0AB2966NS458669",
          "metric_units": false
        },
        "distance": 0.6835081,
        "time_zone": "Pacific Time (US & Canada)"
      }
    },
    {
      "ifta_trip": {
        "jurisdiction": "NJ",
        "vehicle": {
          "id": 4,
          "number": "Demo Vehicle",
          "year": "2016",
          "make": "Demo",
          "model": "Vehicle",
          "vin": "WP0AB2966NS458669",
          "metric_units": false
        },
        "distance": 104.676158659999,
        "time_zone": "Pacific Time (US & Canada)"
      }
    }
  ],
  "pagination": {
    "per_page": 25,
    "page_no": 1,
    "total": 2
  }
}
```

###### Sample XML Request:

```
GET /ifta/summary.xml
```

###### Sample XML Response:

```
<?xml version="1.0" encoding="UTF-8"?>
<data>
    <ifta_trips>
        <ifta_trip>
            <jurisdiction>CA</jurisdiction>
            <vehicle>
                <id>4</id>
                <number>Demo Vehicle</number>
                <year>2016</year>
                <make>Demo</make>
                <model>Vehicle</model>
                <vin>WP0AB2966NS458669</vin>
                <metric_units>false</metric_units>
            </vehicle>
            <distance>0.6835081000000001</distance>
            <time_zone>Pacific Time (US &amp; Canada)</time_zone>
        </ifta_trip>
        <ifta_trip>
            <jurisdiction>NJ</jurisdiction>
            <vehicle>
                <id>4</id>
                <number>Demo Vehicle</number>
                <year>2016</year>
                <make>Demo</make>
                <model>Vehicle</model>
                <vin>WP0AB2966NS458669</vin>
                <metric_units>false</metric_units>
            </vehicle>
            <distance>104.67615865999939</distance>
            <time_zone>Pacific Time (US &amp; Canada)</time_zone>
        </ifta_trip>
    </ifta_trips>
    <pagination>
        <per_page>25</per_page>
        <page_no>1</page_no>
        <total>2</total>
    </pagination>
</data>
```

</div>