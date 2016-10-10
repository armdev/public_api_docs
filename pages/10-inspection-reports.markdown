---
layout: post
title:  "Inspection Reports"
date:   2016-05-24 12:07:00 +0500
categories: endpoint
tags: inspection-reports
---

#### 1) List of inspection reports

###### Request format:

```
GET /inspection_reports
```

###### Request parameters:

+ driver_ids (optional &#124; string): ids of drivers to search for
+ vehicle_ids (optional &#124; string): ids of vehicles to search for
+ start_date (optional &#124; string): start date of report. default is 1 week ago
+ end_date (optional &#124; string): end date of report. default is current date
+ status (optional &#124; string): valid values are: all, with_defects, with_no_defects, with_signature_missing, unknown, harmless, corrected
+ per_page (optional &#124; integer): no of records to return in response. default is 25
+ page_no (optional &#124; integer): page no for the records list. default is 1

###### Example Requests:

```
GET /inspection_reports?start_date=2016-10-3&end_date=2016-10-10&per_page="100"&page_no="1"
curl -H "X-Api-Key: 12345" "https://api.keeptruckin.com/v1/inspection_reports?start_date=2016-10-3&end_date=2016-10-10&per_page=100&page_no=1"
```

###### Response Status:

+ 200, 404

###### Response Body:

+ List of matching inspection reports

###### Sample JSON Request:

```
GET /inspection_reports.json
```

###### Sample JSON Response:

```
{
  "inspection_reports": [
    {
      "inspection_report": {
        "id": 9,
        "date": "2016-07-22",
        "time": "2016-07-22T14:00:00Z",
        "odometer": null,
        "carrier_name": "Demo Carrier",
        "vehicle_number": "Demo Vehicle",
        "trailer_nums": [
          "17"
        ],
        "location": "Omaha, NE",
        "city": "Omaha",
        "state": "NE",
        "status": "corrected",
        "mechanic_signed_at": "2016-07-22T14:00:00Z",
        "mechanic_signature_url": "https://keep-truckin-development.s3.amazonaws.com/uploads/inspection_report/mechanic_signature_upload/9/open-uri20160712-30633-thc30n?AWSAccessKeyId=AKIAJH12345&Expires=1481274629&Signature=Qi1mXnl0ylJ5tCuds789Ocq44L4%3D",
        "driver_signed_at": "2016-07-22T14:00:00Z",
        "driver_signature_url": "https://keep-truckin-development.s3.amazonaws.com/uploads/inspection_report/driver_signature_upload/9/open-uri20160729-30645-1jeoj77?AWSAccessKeyId=AKIAJH12345&Expires=1481274629&Signature=Qi1mXnl0ylJ5tCuds789Ocq44L4%3D",
        "defects": [
          {
            "defect": {
              "id": 5,
              "area": "tractor",
              "category": "Mirrors",
              "notes": null
            }
          },
          {
            "defect": {
              "id": 6,
              "area": "tractor",
              "category": "Oil Level",
              "notes": null
            }
          }
        ],
        "vehicle": {
          "id": 4,
          "number": "Demo Vehicle",
          "year": "2016",
          "make": "Demo",
          "model": "Vehicle",
          "vin": "WP0AB2966NS458669"
        },
        "mechanic": {
          "id": 12,
          "first_name": "Joe",
          "last_name": "Williams",
          "username": null,
          "email": "joe@example.com",
          "driver_company_id": null,
          "status": "active",
          "role": "admin"
        },
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
  "per_page": 25,
  "page_no": 1,
  "total": 3
}
```

###### Sample XML Request:

```
GET /users.xml
```

###### Sample XML Response:

```
<?xml version="1.0" encoding="UTF-8"?>
<data>
    <inspection_reports>
        <inspection_report>
            <id>9</id>
            <date>2016-07-22</date>
            <time>2016-07-22T14:00:00Z</time>
            <odometer nil="true"/>
            <carrier_name>Demo Carrier</carrier_name>
            <vehicle_number>Demo Vehicle</vehicle_number>
            <trailer_nums>
                <trailer_num>17</trailer_num>
            </trailer_nums>
            <location>Omaha, NE</location>
            <city>Omaha</city>
            <state>NE</state>
            <status>corrected</status>
            <mechanic_signed_at>2016-07-22T14:00:00Z</mechanic_signed_at>
            <mechanic_signature_url>https://keep-truckin-development.s3.amazonaws.com/uploads/inspection_report/mechanic_signature_upload/9/open-uri20160729-30633-thc30n?AWSAccessKeyId=AKIAJHHVMD6UTJMZBMLQ&amp;Expires=1481275519&amp;Signature=dtBQJE%2Fj9891aui%2BN8RNCMZfNCc%3D</mechanic_signature_url>
            <driver_signed_at>2016-07-22T14:00:00Z</driver_signed_at>
            <driver_signature_url>https://keep-truckin-development.s3.amazonaws.com/uploads/inspection_report/driver_signature_upload/9/open-uri20160729-30633-1jeoj77?AWSAccessKeyId=AKIAJHHVMD6UTJMZBMLQ&amp;Expires=1481275519&amp;Signature=cnmAZmkCK9p2EnKKXPilPz4ntWM%3D</driver_signature_url>
            <defects>
                <defect>
                    <id>5</id>
                    <area>tractor</area>
                    <category>Mirrors</category>
                    <notes nil="true"/>
                </defect>
                <defect>
                    <id>6</id>
                    <area>tractor</area>
                    <category>Oil Level</category>
                    <notes nil="true"/>
                </defect>
            </defects>
            <vehicle>
                <id>4</id>
                <number>Demo Vehicle</number>
                <year>2016</year>
                <make>Demo</make>
                <model>Vehicle</model>
                <vin>WP0AB2966NS458669</vin>
            </vehicle>
            <mechanic>
                <id>12</id>
                <first_name>Joe</first_name>
                <last_name>Williams</last_name>
                <username nil="true"/>
                <email>joe@example.com</email>
                <driver_company_id nil="true"/>
                <status>active</status>
                <role>admin</role>
            </mechanic>
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
        </inspection_report>
      </inspection_reports>
    <per_page>25</per_page>
    <page_no>1</page_no>
    <total>3</total>
</data>
```