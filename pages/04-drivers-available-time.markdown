---
layout: post
title:  "Driver's Available Time"
date:   2016-05-24 12:05:00 +0500
categories: endpoint
tags: drivers-available-time
---

#### 1) List of given users with available times

###### Request format:

```
GET /available_time?driver_ids[]=<i>
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

List of matching users with details of driver's remaining duty time in SECONDS

###### Example Request:

```
curl -H "X-Api-Key: 12345" "https://api.keeptruckin.com/v1/available_time"
```

###### Sample JSON Request:

```
GET /v1/available_time
```

###### Sample JSON Response:

```
{
  "users": [
    {
      "user": {
        "id": 161,
        "first_name": "Alexandrea",
        "last_name": "Koch",
        "driver_company_id": 75,
        "duty_status": "off_duty",
        "available_time": {
          "drive": 39600,
          "shift": 50400,
          "cycle": 252000,
          "break": 28800
        },
        "recap": {
          "on_duty_duration": [
            {
              "date": "2016-07-18",
              "duration": 1200.0
            },
            {
              "date": "2016-07-17",
              "duration": 600.0
            },
            {
              "date": "2016-07-16",
              "duration": 0
            },
            {
              "date": "2016-07-15",
              "duration": 0
            },
            {
              "date": "2016-07-14",
              "duration": 0
            },
            {
              "date": "2016-07-13",
              "duration": 0
            },
            {
              "date": "2016-07-12",
              "duration": 0
            }
          ],
          "driving_duration": [
            {
              "date": "2016-07-18",
              "duration": 1200.0
            },
            {
              "date": "2016-07-17",
              "duration": 600.0
            },
            {
              "date": "2016-07-16",
              "duration": 0
            },
            {
              "date": "2016-07-15",
              "duration": 0
            },
            {
              "date": "2016-07-14",
              "duration": 0
            },
            {
              "date": "2016-07-13",
              "duration": 0
            },
            {
              "date": "2016-07-12",
              "duration": 0
            }
          ]
        },
        "last_hos_status": {
          "status": "on_duty",
          "time": "2016-07-18T07:40:00Z"
        },
        "last_cycle_reset": {
          "type": "34_hour",
          "start_time": "2016-07-16T22:00:00Z",
          "end_time": "2016-07-18T08:00:00Z"
        }
      }
    },
    {
      "user": {
        "id": 159,
        "first_name": "Anahi",
        "last_name": "Flatley",
        "driver_company_id": 75,
        "duty_status": "on_duty",
        "available_time": {
          "drive": 39600,
          "shift": 50400,
          "cycle": 252000,
          "break": 28800
        },
        "recap": {
          "on_duty_duration": [
            {
              "date": "2016-07-18",
              "duration": 0
            },
            {
              "date": "2016-07-17",
              "duration": 0
            },
            {
              "date": "2016-07-16",
              "duration": 0
            },
            {
              "date": "2016-07-15",
              "duration": 0
            },
            {
              "date": "2016-07-14",
              "duration": 0
            },
            {
              "date": "2016-07-13",
              "duration": 0
            },
            {
              "date": "2016-07-12",
              "duration": 0
            }
          ],
          "driving_duration": [
            {
              "date": "2016-07-18",
              "duration": 0
            },
            {
              "date": "2016-07-17",
              "duration": 0
            },
            {
              "date": "2016-07-16",
              "duration": 0
            },
            {
              "date": "2016-07-15",
              "duration": 0
            },
            {
              "date": "2016-07-14",
              "duration": 0
            },
            {
              "date": "2016-07-13",
              "duration": 0
            },
            {
              "date": "2016-07-12",
              "duration": 0
            }
          ]
        },
        "last_hos_status": {
          "status": "on_duty",
          "time": "2016-07-18T07:40:00Z"
        },
        "last_cycle_reset": null
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
GET /v1/available_time.xml
```

###### Sample XML Response:

```
<?xml version="1.0" encoding="UTF-8"?>
<data>
    <users>
        <user>
            <id>161</id>
            <first_name>Alexandrea</first_name>
            <last_name>Koch</last_name>
            <driver_company_id>75</driver_company_id>
            <duty_status>off_duty</duty_status>
            <available_time>
                <drive>39600</drive>
                <shift>50400</shift>
                <cycle>252000</cycle>
                <break>28800</break>
            </available_time>
            <recap>
                <on_duty_duration>
                    <on_duty_duration>
                        <date>2016-07-18</date>
                        <duration>1200.0</duration>
                    </on_duty_duration>
                    <on_duty_duration>
                        <date>2016-07-17</date>
                        <duration>600.0</duration>
                    </on_duty_duration>
                    <on_duty_duration>
                        <date>2016-07-16</date>
                        <duration>0</duration>
                    </on_duty_duration>
                    <on_duty_duration>
                        <date>2016-07-15</date>
                        <duration>0</duration>
                    </on_duty_duration>
                    <on_duty_duration>
                        <date>2016-07-14</date>
                        <duration>0</duration>
                    </on_duty_duration>
                    <on_duty_duration>
                        <date>2016-07-13</date>
                        <duration>0</duration>
                    </on_duty_duration>
                    <on_duty_duration>
                        <date>2016-07-12</date>
                        <duration>0</duration>
                    </on_duty_duration>
                </on_duty_duration>
                <driving_duration>
                    <driving_duration>
                        <date>2016-07-18</date>
                        <duration>1200.0</duration>
                    </driving_duration>
                    <driving_duration>
                        <date>2016-07-17</date>
                        <duration>600.0</duration>
                    </driving_duration>
                    <driving_duration>
                        <date>2016-07-16</date>
                        <duration>0</duration>
                    </driving_duration>
                    <driving_duration>
                        <date>2016-07-15</date>
                        <duration>0</duration>
                    </driving_duration>
                    <driving_duration>
                        <date>2016-07-14</date>
                        <duration>0</duration>
                    </driving_duration>
                    <driving_duration>
                        <date>2016-07-13</date>
                        <duration>0</duration>
                    </driving_duration>
                    <driving_duration>
                        <date>2016-07-12</date>
                        <duration>0</duration>
                    </driving_duration>
                </driving_duration>
            </recap>
            <last_hos_status>
                <status>on_duty</status>
                <time>2016-07-18T07:40:00Z</time>
            </last_hos_status>
            <last_cycle_reset>
                <type>34_hour</type>
                <start_time>2016-07-16T22:00:00Z</start_time>
                <end_time>2016-07-18T08:00:00Z</end_time>
            </last_cycle_reset>
        </user>
        <user>
            <id>159</id>
            <first_name>Anahi</first_name>
            <last_name>Flatley</last_name>
            <driver_company_id>75</driver_company_id>
            <duty_status>on_duty</duty_status>
            <available_time>
                <drive>39600</drive>
                <shift>50400</shift>
                <cycle>252000</cycle>
                <break>28800</break>
            </available_time>
            <recap>
                <on_duty_duration>
                    <on_duty_duration>
                        <date>2016-07-18</date>
                        <duration>0</duration>
                    </on_duty_duration>
                    <on_duty_duration>
                        <date>2016-07-17</date>
                        <duration>0</duration>
                    </on_duty_duration>
                    <on_duty_duration>
                        <date>2016-07-16</date>
                        <duration>0</duration>
                    </on_duty_duration>
                    <on_duty_duration>
                        <date>2016-07-15</date>
                        <duration>0</duration>
                    </on_duty_duration>
                    <on_duty_duration>
                        <date>2016-07-14</date>
                        <duration>0</duration>
                    </on_duty_duration>
                    <on_duty_duration>
                        <date>2016-07-13</date>
                        <duration>0</duration>
                    </on_duty_duration>
                    <on_duty_duration>
                        <date>2016-07-12</date>
                        <duration>0</duration>
                    </on_duty_duration>
                </on_duty_duration>
                <driving_duration>
                    <driving_duration>
                        <date>2016-07-18</date>
                        <duration>0</duration>
                    </driving_duration>
                    <driving_duration>
                        <date>2016-07-17</date>
                        <duration>0</duration>
                    </driving_duration>
                    <driving_duration>
                        <date>2016-07-16</date>
                        <duration>0</duration>
                    </driving_duration>
                    <driving_duration>
                        <date>2016-07-15</date>
                        <duration>0</duration>
                    </driving_duration>
                    <driving_duration>
                        <date>2016-07-14</date>
                        <duration>0</duration>
                    </driving_duration>
                    <driving_duration>
                        <date>2016-07-13</date>
                        <duration>0</duration>
                    </driving_duration>
                    <driving_duration>
                        <date>2016-07-12</date>
                        <duration>0</duration>
                    </driving_duration>
                </driving_duration>
            </recap>
            <last_hos_status>
                <status>on_duty</status>
                <time>2016-07-18T07:40:00Z</time>
            </last_hos_status>
            <last_cycle_reset nil="true"/>
        </user>
    </users>
    <pagination>
        <per_page>25</per_page>
        <page_no>1</page_no>
        <total>2</total>
    </pagination>
</data>
```
