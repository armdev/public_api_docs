---
layout: post
title:  "Logs"
date:   2016-10-13 12:07:00 +0500
categories: endpoint
tags: logs
---

<div id="list-company-logs" markdown="1">

#### 1) List company logs

###### Request format:

```
GET /logs
```

###### Request parameters:

+ driver_ids (optional &#124; string): array of driver ids of logs
+ start_date (optional &#124; string): start date of date range for logs
+ end_date (optional &#124; string): end date of date range for logs
+ status (optional &#124; string): valid values are 'all, compliant, hos, form_and_manner, missing_dvirs'
+ per_page (optional &#124; integer): no of records to return in response. default is 25
+ page_no (optional &#124; integer): page no for the records list. default is 1

###### Example Requests:

```
GET /logs?per_page=100&page_no=1
curl -H "X-Api-Key: 12345" "https://api.keeptruckin.com/v1/logs?per_page=100&page_no=1"
```

###### Response Status:

+ 200, 404

###### Response Body:

+ List of matching logs

###### Sample JSON Request:

```
GET /logs.json?per_page=100&page_no=1
```

###### Sample JSON Response:

```
{
  "logs": [
    {
      "log": {
        "id": 47,
        "date": "2016-11-22",
        "total_miles": 300,
        "metric_units": false,
        "driver_signed_at": "2016-07-16T00:05:21Z",
        "driver_signature_url": "https://keep-truckin-development.s3.amazonaws.com/uploads/log/driver_signature_upload/47/open-uri20160729-30633-1jeoj77?AWSAccessKeyId=AKIAJHHsdfsTJMZBMLQ&Expires=1485085850&Signature=YXqKF9nyfJI%2qEEq3obOLlFzsuKs0%3D",
        "time_zone": "Pacific Time (US & Canada)",
        "cycle": "70_8",
        "driver_first_name": "Demo",
        "driver_last_name": "Driver",
        "carrier_name": "Demo Carrier",
        "carrier_street": "415 Truckin St.",
        "carrier_city": "San Francisco",
        "carrier_state": "CA",
        "carrier_zip": "94105",
        "terminal_street": null,
        "terminal_city": null,
        "terminal_state": null,
        "terminal_zip": null,
        "notes": null,
        "driver_company_id": null,
        "origin": null,
        "destination": null,
        "exception_24_hour_restart": false,
        "exception_8_hour_break": false,
        "exception_wait_time": false,
        "exception_short_haul": false,
        "short_haul": false,
        "eld_mode": "logs",
        "co_driver_full_names": [],
        "odometers": {},
        "trailer_numbers": "17",
        "vehicle_numbers": "12345, 12",
        "driver": {
          "id": 11,
          "first_name": "Demo",
          "last_name": "Driver",
          "username": "demo_driver",
          "email": null,
          "driver_company_id": null,
          "status": "active",
          "role": "driver"
        },
        "vehicles": [
          {
            "vehicle": {
              "id": 11,
              "number": "12345",
              "year": null,
              "make": null,
              "model": null,
              "vin": null,
              "metric_units": true
            }
          }
        ],
        "remarks": [
          {
            "remark": {
              "id": 1,
              "time": "2016-10-16T23:59:59Z",
              "notes": null,
              "location": null
            }
          }
        ],
        "cycle_restarts": [
          {
            "cycle_restart": {
              "id": 1,
              "start_time": "2016-10-16T08:00:00Z",
              "end_time": "2016-10-17T05:00:00Z",
              "type": "34_hour",
              "name": "34 Hour"
            }
          }
        ],
        "shipping_doc": "123ABC",
        "form_and_manner_errors": [],
        "hos_violations": [
          {
            "hos_violation": {
              "id": 12,
              "type": "canada_driving_13",
              "name": "13 Hour Driving Limit",
              "start_time": "2016-10-16T08:00:00Z",
              "end_time": "2016-10-17T07:00:00Z"
            }
          }
        ],
        "events": [
          {
            "event": {
              "id": 221,
              "type": "driving",
              "notes": null,
              "location": "Mobile, AL",
              "start_time": "2016-10-16T07:00:00Z",
              "end_time": "2016-10-16T09:00:00Z"
            }
          },
          {
            "event": {
              "id": 474,
              "type": "sleeper",
              "notes": null,
              "location": null,
              "start_time": "2016-10-16T09:00:00Z",
              "end_time": "2016-10-16T11:00:00Z"
            }
          },
          {
            "event": {
              "id": 475,
              "type": "driving",
              "notes": null,
              "location": null,
              "start_time": "2016-10-16T11:00:00Z",
              "end_time": "2016-10-17T07:00:00Z"
            }
          }
        ]
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
GET /logs.xml?per_page=100&page_no=1
```

###### Sample XML Response:

```
<?xml version="1.0" encoding="UTF-8"?>
<data>
    <logs>
        <log>
            <id>47</id>
            <date>2016-11-22</date>
            <total_miles>300</total_miles>
            <metric_units>false</metric_units>
            <driver_signed_at>2016-07-16T00:05:21Z</driver_signed_at>
            <driver_signature_url>https://keep-truckin-development.s3.amazonaws.com/uploads/log/driver_signature_upload/47/open-uri20160729-30633-1jeoj77?AWSAccessKeyId=AKIAJHHsdfsTJMZBMLQ&amp;Expires=1485086013&amp;Signature=0DBFDW3tLtgNYBYbsdfdsBmCNgQ0%3D</driver_signature_url>
            <time_zone>Pacific Time (US &amp; Canada)</time_zone>
            <cycle>70_8</cycle>
            <driver_first_name>Demo</driver_first_name>
            <driver_last_name>Driver</driver_last_name>
            <carrier_name>Demo Carrier</carrier_name>
            <carrier_street>415 Truckin St.</carrier_street>
            <carrier_city>San Francisco</carrier_city>
            <carrier_state>CA</carrier_state>
            <carrier_zip>94105</carrier_zip>
            <terminal_street nil="true"/>
            <terminal_city nil="true"/>
            <terminal_state nil="true"/>
            <terminal_zip nil="true"/>
            <notes nil="true"/>
            <driver_company_id nil="true"/>
            <origin nil="true"/>
            <destination nil="true"/>
            <exception_24_hour_restart>false</exception_24_hour_restart>
            <exception_8_hour_break>false</exception_8_hour_break>
            <exception_wait_time>false</exception_wait_time>
            <exception_short_haul>false</exception_short_haul>
            <short_haul>false</short_haul>
            <eld_mode>logs</eld_mode>
            <co_driver_full_names/>
            <odometers>
      </odometers>
            <trailer_numbers>17</trailer_numbers>
            <vehicle_numbers>12345, 12</vehicle_numbers>
            <driver>
                <id>11</id>
                <first_name>Demo</first_name>
                <last_name>Driver</last_name>
                <username>demo_driver</username>
                <email nil="true"/>
                <driver_company_id nil="true"/>
                <status>active</status>
                <role>driver</role>
            </driver>
            <vehicles>
                <vehicle>
                    <id>11</id>
                    <number>12345</number>
                    <year nil="true"/>
                    <make nil="true"/>
                    <model nil="true"/>
                    <vin nil="true"/>
                    <metric_units>true</metric_units>
                </vehicle>
            </vehicles>
            <remarks>
                <remark>
                    <id>1</id>
                    <time>2016-10-16T23:59:59Z</time>
                    <notes nil="true"/>
                    <location nil="true"/>
                </remark>
            </remarks>
            <cycle_restarts>
                <cycle_restart>
                    <id>1</id>
                    <start_time>2016-10-16T08:00:00Z</start_time>
                    <end_time>2016-10-17T05:00:00Z</end_time>
                    <type>34_hour</type>
                    <name>34 Hour</name>
                </cycle_restart>
            </cycle_restarts>
            <shipping_doc>123ABC</shipping_doc>
            <form_and_manner_errors/>
            <hos_violations>
                <hos_violation>
                    <hos_violation>
                        <id>12</id>
                        <type>canada_driving_13</type>
                        <name>13 Hour Driving Limit</name>
                        <start_time>2016-10-16T08:00:00Z</start_time>
                        <end_time>2016-10-17T07:00:00Z</end_time>
                    </hos_violation>
                </hos_violation>
            </hos_violations>
            <events>
                <event>
                    <event>
                        <id>221</id>
                        <type>driving</type>
                        <notes nil="true"/>
                        <location>Mobile, AL</location>
                        <start_time>2016-10-16T07:00:00Z</start_time>
                        <end_time>2016-10-16T09:00:00Z</end_time>
                    </event>
                </event>
                <event>
                    <event>
                        <id>474</id>
                        <type>sleeper</type>
                        <notes nil="true"/>
                        <location nil="true"/>
                        <start_time>2016-10-16T09:00:00Z</start_time>
                        <end_time>2016-10-16T11:00:00Z</end_time>
                    </event>
                </event>
                <event>
                    <event>
                        <id>475</id>
                        <type>driving</type>
                        <notes nil="true"/>
                        <location nil="true"/>
                        <start_time>2016-10-16T11:00:00Z</start_time>
                        <end_time>2016-10-17T07:00:00Z</end_time>
                    </event>
                </event>
            </events>
        </log>
    </logs>
    <pagination>
        <per_page>25</per_page>
        <page_no>1</page_no>
        <total>1</total>
    </pagination>
</data>
```

</div>