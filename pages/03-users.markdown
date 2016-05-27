---
layout: post
title:  "Users"
date:   2016-05-24 12:07:00 +0500
categories: endpoint
permalink: users
---

#### 1) List company users

###### Request format:

```
GET /users?role=<driver|admin|fleet_user>&name=<s>&duty_status=<off_duty|on_duty|sleeper|driving|waiting>&per_page=<i>&page_no=<i>
```

###### Request parameters:

+ role (optional &#124; string): role of the user. valid values are admin, fleet_user & driver
+ name (optional &#124; string): name of the user to search for
+ duty_status (optional &#124; string): valid values are off_duty, on_duty, sleeper, driving, or waiting
+ status (optional &#124; string): valid values are 'active' or 'deactivated'
+ per_page (optional &#124; integer): no of records to return in response. default is 25
+ page_no (optional &#124; integer): page no for the records list. default is 1
+ summary (optional &#124; string): TRUE or FALSE

###### Example Requests:

```
GET /users?role=”driver”&name=”John%20Smith”&duty_status=”driving”&per_page=”100”&page_no=”1”
curl -H "X-API-KEY: 12345" "https://api.keeptruckin.com/v1/users?role=driver&name=John%20Smith&duty_status=driving&per_page=100&page_no=1"
```

###### Response Status:

+ 200, 404

###### Response Body:

+ List of matching users

###### Sample JSON Request:

```
GET /users.json
```

###### Sample JSON Response:

```
{
  "users": [
    {
      "user": {
        "id": 1,
        "email": "2c3e42cdaf57@keeptruckin.com",
        "first_name": "2",
        "last_name": "Fo2",
        "dot_id": null,
        "phone": null,
        "phone_ext": null,
        "time_zone": "Pacific Time (US & Canada)",
        "role": "driver",
        "status": "active",
        "carrier_name": null,
        "carrier_street": null,
        "carrier_city": null,
        "carrier_state": null,
        "carrier_zip": null,
        "violation_alerts": "1_hour",
        "terminal_street": null,
        "terminal_city": null,
        "terminal_state": null,
        "terminal_zip": null,
        "exception_24_hour_restart": false,
        "exception_8_hour_break": false,
        "exception_wait_time": false,
        "export_combined": true,
        "export_recap": true,
        "export_odometers": true,
        "metric_units": false,
        "username": null,
        "cycle": "60_7",
        "driver_company_id": null,
        "minute_logs": false,
        "eld_mode": "none",
        "drivers_license_number": null,
        "drivers_license_state": null,
        "yard_moves_enabled": false,
        "personal_conveyance_enabled": false,
        "created_at": "2016-02-24T06:26:00Z",
        "updated_at": "2016-02-24T06:26:00.000000Z"
      }
    },
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
GET /users.xml
```

###### Sample XML Response:

```
<?xml version="1.0" encoding="UTF-8"?>
<data>
  <users>
    <user>
      <id>1</id>
      <email>2c3e42cdaf57@keeptruckin.com</email>
      <first_name>2</first_name>
      <last_name>Fo2</last_name>
      <dot_id nil="true"/>
      <phone nil="true"/>
      <phone_ext nil="true"/>
      <time_zone>Pacific Time (US &amp; Canada)</time_zone>
      <role>driver</role>
      <status>active</status>
      <carrier_name nil="true"/>
      <carrier_street nil="true"/>
      <carrier_city nil="true"/>
      <carrier_state nil="true"/>
      <carrier_zip nil="true"/>
      <violation_alerts>1_hour</violation_alerts>
      <terminal_street nil="true"/>
      <terminal_city nil="true"/>
      <terminal_state nil="true"/>
      <terminal_zip nil="true"/>
      <exception_24_hour_restart>false</exception_24_hour_restart>
      <exception_8_hour_break>false</exception_8_hour_break>
      <exception_wait_time>false</exception_wait_time>
      <export_combined>true</export_combined>
      <export_recap>true</export_recap>
      <export_odometers>true</export_odometers>
      <metric_units>false</metric_units>
      <username nil="true"/>
      <cycle>60_7</cycle>
      <driver_company_id nil="true"/>
      <minute_logs>false</minute_logs>
      <eld_mode>none</eld_mode>
      <drivers_license_number nil="true"/>
      <drivers_license_state nil="true"/>
      <yard_moves_enabled>false</yard_moves_enabled>
      <personal_conveyance_enabled>false</personal_conveyance_enabled>
      <created_at>2016-02-24T06:26:00Z</created_at>
      <updated_at>2016-02-24T06:26:00.000000Z</updated_at>
    </user>
  </users>
  <pagination>
    <per_page>25</per_page>
    <page_no>1</page_no>
    <total>1</total>
  </pagination>
</data>
```

#### 2) Get a specific user

###### Request format:

```
GET /users/<id>
```

###### Request parameters:

+ id (**required** &#124; integer): valid user id

###### Response Status:

+ 200, 401, 403, 404

###### Response Body:

Returns user object based on user id.

###### Example Request:

```
curl -H "X-API-KEY: 12345" "https://api.keeptruckin.com/v1/users/158"
```

###### Sample JSON Request:

```
GET /users/158
```

###### Sample JSON Response:

```
{
  "user": {
    "id": 158,
    "email": "d77d64aa04d1@keeptruckin.com",
    "first_name": "Addison",
    "last_name": "Hahn",
    "dot_id": "1000",
    "phone": null,
    "phone_ext": null,
    "time_zone": "Mountain Time (US & Canada)",
    "role": "fleet_user",
    "status": "active",
    "created_at": "2016-03-16T08:22:44Z",
    "updated_at": "2016-03-16T08:22:44.226952Z"
  }
}
```

###### Sample XML Request:

```
GET /users/158.xml
```

###### Sample XML Response:

```
<?xml version="1.0" encoding="UTF-8"?>
<data>
    <id>158</id>
    <email>d77d64aa04d1@keeptruckin.com</email>
    <first_name>Addison</first_name>
    <last_name>Hahn</last_name>
    <dot_id>1000</dot_id>
    <phone nil="true"/>
    <phone_ext nil="true"/>
    <time_zone>Mountain Time (US &amp; Canada)</time_zone>
    <role>fleet_user</role>
    <status>active</status>
    <created_at>2016-03-16T08:22:44Z</created_at>
    <updated_at>2016-03-16T08:22:44.226952Z</updated_at>
</data>
```

#### 3) Create a new user

###### Request format:

```
POST /users
```

###### Request parameters:

+ password (**required** &#124; string): password of user
+ first_name (**required** &#124; string): first_name of user
+ last_name (**required** &#124; string): last_name of user
+ role (optional &#124; string): role of user. valid values are ('driver', 'fleet_user', 'admin')

###### Response Status:

+ 201 - user created
+ 200 - user is valid (test mode)
+ 400 - user cannot be created
+ 403 - Forbidden

###### Example Request:

```
curl -H "X-API-KEY: 12345" -d "password=12345678&email=foo@keeptruckin.com&first_name=Foo&last_name=Bar&role=driver" "https://api.keeptruckin.com/v1/users"
```

###### Response Body:

User details

###### Sample JSON Request:

```
POST /users
```

###### Body:

```
{
  "password" : "123123",
  "email" : "foo@keeptruckin.com",
  "first_name" : "Foo",
  "last_name" : "Bar",
  "role" : "admin"
}
```

###### Sample JSON Response:

Same as specific user's response.

#### 4) Update an existing user

###### Request format:

```
PUT /users/:id
```

###### Request parameters:

+ id (required &#124; integer): id of the user to update
+ admin/fleet_user’s params ->  :email, :password, :first_name, :last_name, :dot_id, :phone, :phone_ext, :time_zone
+ Driver’s params -> :email, :password, :first_name, :last_name, :dot_id, :phone, :phone_ext, :time_zone, :cycle, :driver_company_id, :carrier_name, :carrier_street, :carrier_city, :carrier_state, :carrier_zip,:violation_alerts, :terminal_street, :terminal_city, :terminal_state, :terminal_zip, :exception_24_hour_restart,:exception_8_hour_break, :exception_wait_time, :export_combined, :export_recap, :export_odometers, :metric_units, :username,:unconfirmed_email, :minute_logs, :eld_mode, :drivers_license_number, :drivers_license_state, :yard_moves_enabled,:personal_conveyance_enabled

###### Example Request:

```
curl -X PUT -H "X-API-KEY: 12345" -d "password=12345678&email=foo@keeptruckin.com&first_name=Foo&last_name=Bar&role=driver" "https://api.keeptruckin.com/v1/users/104"
```

###### Response Status:

+ 200 - user updated
+ 400 - user cannot be updated
+ 403 - Forbidden
+ 404 - user not found

###### Response Body:

User details.

###### Sample Request:

```
PUT /users/1137
```

###### Body:

```
{
  "password" : "123123",
  "email" : "foo@keeptruckin.com"
}
```

###### Sample Response:

Same as specific user's response.
