---
layout: post
title:  "HOS Violations"
date:   2016-05-24 12:04:00 +0500
categories: endpoint
tags: hos-violations
---

#### 1) List of hos violations for a company's users

###### Request format:

```
GET /v1/hos_violations?driver_ids[]=<i>&violation_types[]=<s>&min_start_time=<t>&max_start_time=<t>
```

###### Request parameters:

+ min_start_time (optional &#124; datetime): start time begin. default is (current time - 1 day)
+ max_start_time (optional &#124; datetime): start time end. default is current time.
+ violation_types (optional &#124; string array): list of violations
+ driver_ids (optional &#124; integer array)
+ per_page (optional &#124; integer): no of records to return in response. default is 25. Max is 100.
+ page_no (optional &#124; integer): page no for the records list. default is 1

###### Response Status:

+ 200
+ 400
+ 403 - Forbidden

###### Response Body:

List of matching hos_violations

###### Example Request:

```
curl -H "X-Api-Key: 12345" "https://api.keeptruckin.com/v1/hos_violations?min_start_time=2016-03-01"
```

###### Sample JSON Request:

```
GET /v1/hos_violations?min_start_time=2016-01-18
```

###### Sample JSON Response:

```
{
  "hos_violations": [
    {
      "hos_violation": {
        "id": 97,
        "type": "ca_duty_15",
        "start_time": "2016-03-12T19:00:00Z",
        "end_time": null,
        "name": "15 Hour On Duty Limit",
        "user": {
          "id": 156,
          "first_name": "Harold",
          "last_name": "Hoeger",
          "username": "hobart",
          "email": null,
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
GET /v1/available_time.xml?min_start_time=2016-01-18T14%3A24%3A47%2B05%3A00
```

###### Sample XML Response:

```
<?xml version="1.0" encoding="UTF-8"?>
<data>
    <hos_violations>
        <hos_violation>
            <id>97</id>
            <type>ca_duty_15</type>
            <start_time>2016-03-12T19:00:00Z</start_time>
            <end_time nil="true"/>
            <name>15 Hour On Duty Limit</name>
            <user>
                <id>156</id>
                <first_name>Harold</first_name>
                <last_name>Hoeger</last_name>
                <username>hobart</username>
                <email nil="true"/>
                <driver_company_id nil="true"/>
                <status>deactivated</status>
                <role>driver</role>
            </user>
        </hos_violation>
    </hos_violations>
    <pagination>
        <per_page>25</per_page>
        <page_no>1</page_no>
        <total>1</total>
    </pagination>
</data>
```
