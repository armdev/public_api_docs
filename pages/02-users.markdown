---
layout: post
title:  "Users"
date:   2016-05-24 12:07:00 +0500
categories: endpoint
tags: users
---

<div id="list-company-users" markdown="1">

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
GET /users?role="driver"&name="John%20Smith"&duty_status="driving"&per_page="100"&page_no="1"
curl -H "X-Api-Key: 12345" "https://api.keeptruckin.com/v1/users?role=driver&name=John%20Smith&duty_status=driving&per_page=100&page_no=1"
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
        "exception_short_haul": false,
        "exception_ca_farm_school_bus": false,
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
        "duty_status": "off_duty",
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
      <exception_short_haul>false</exception_short_haul>
      <exception_ca_farm_school_bus>false</exception_ca_farm_school_bus>
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
      <duty_status>off_duty</duty_status>
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

</div>

<div id="specific-user" markdown="1">

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
curl -H "X-Api-Key: 12345" "https://api.keeptruckin.com/v1/users/158"
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
    "duty_status": "off_duty",
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
    <duty_status>off_duty</duty_status>
    <created_at>2016-03-16T08:22:44Z</created_at>
    <updated_at>2016-03-16T08:22:44.226952Z</updated_at>
</data>
```

</div>

<div id="new-user" markdown="1">

#### 3) Create a new user

###### Request format:

```
POST /users
```

###### Request parameters:

+ password (**required** &#124; string): password of user
+ first_name (**required** &#124; string): first_name of user
+ last_name (**required** &#124; string): last_name of user
+ email (**required** &#124; string): email address of user (only email address OR username is required but both can be set)
+ username (**required** &#124; string): username of user (only email address OR username is required but both can be set)
+ role (**required** &#124; string): role of user. valid values are ('driver', 'fleet_user', 'admin')
+ driver_company_id (optional &#124; string): drivers only - fleet-specific driver ID (set this to whatever ID you use to internally identify a driver)
+ yard_moves_enabled (optional &#124; boolean): true if yard moves are allowed for the driver
+ personal_conveyance_enabled (optional &#124; boolean): true if personal conveyance is allowed for the driver
+ group_ids (optional &#124; integer array): array of group_ids that a fleet user needs to be added to
+ group_visibility (optional &#124; string): group visibility of fleet user. valid values are ('all', 'limited')

###### Notes:

The group accessiblity parameters i.e. group_ids and group_visibility are only considered if role is 'fleet_user' otherwise they are ignored. If group_visibility is 'all' then group_ids should be blank otherwise error is returned. If group_visibility is 'limited' then group_ids should be present otherwise error is returned. If group_ids is present then group_visibility should be 'limited' otherwise error is returned.

###### Response Status:

+ 201 - user created
+ 200 - user is valid (test mode)
+ 400 - user cannot be created
+ 403 - Forbidden

###### Example Request:

```
curl -H "X-Api-Key: 12345" -d "password=12345678&email=foo@keeptruckin.com&first_name=Foo&last_name=Bar&role=driver" "https://api.keeptruckin.com/v1/users"
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

</div>

<div id="existing-user" markdown="1">

#### 4) Update an existing user

###### Request format:

```
PUT /users/:id
```

###### Request parameters:

+ id (**required** &#124; integer): id of the user to update
+ group_ids (optional &#124; integer array): array of group_ids that a fleet user needs to be added to
+ group_visibility (optional &#124; string): group visibility of fleet user. valid values are ('all', 'limited')
+ admin/fleet_user's params ->  :email, :password, :first_name, :last_name, :dot_id, :phone, :phone_ext, :time_zone
+ Driver's params -> :email, :password, :first_name, :last_name, :dot_id, :phone, :phone_ext, :time_zone, :carrier_city, :carrier_name, :carrier_state, :carrier_street, :carrier_zip, :cycle, :cycle2, :driver_company_id, :drivers_license_number, :drivers_license_state, :eld_mode, :exception_24_hour_restart, :exception_24_hour_restart2, :exception_8_hour_break, :exception_8_hour_break2, :exception_ca_farm_school_bus, :exception_ca_farm_school_bus2, :exception_short_haul, :exception_short_haul2, :exception_wait_time, :exception_wait_time2, :export_combined, :export_odometers, :export_recap, :metric_units, :minute_logs, :personal_conveyance_enabled, :terminal_city, :terminal_state, :terminal_street, :terminal_zip, :unconfirmed_email, :username, :violation_alerts, :yard_moves_enabled

###### Notes:

The group accessiblity parameters i.e. group_ids and group_visibility are only considered if user's role is 'fleet_user' otherwise they are ignored. If group_visibility is 'all' then group_ids should be blank otherwise error is returned. If group_visibility is 'limited' then group_ids should be present otherwise error is returned. If group_ids is present then group_visibility should be 'limited' otherwise error is returned.

###### Example Request:

```
curl -X PUT -H "X-Api-Key: 12345" -d "password=12345678&email=foo@keeptruckin.com&first_name=Foo&last_name=Bar&role=driver" "https://api.keeptruckin.com/v1/users/104"
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

</div>
