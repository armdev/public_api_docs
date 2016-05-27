---
layout: post
title:  "Groups"
date:   2016-05-24 12:06:00 +0500
categories: endpoint
permalink: groups
---

#### 1) Retrieve list of groups

###### Request format:

```
GET /groups
```

###### Request parameters:

+ page_no (optional &#124; integer): page number for the records list. default is 1
+ per_page (optional &#124; integer): number of records to return per page. default is 25

###### Response Status:

+ 200
+ 403 - Forbidden

###### Response Body:

Return a list of groups.

###### Example Request:

```
curl -H "X-API-KEY: 12345" "https://api.keeptruckin.com/v1/groups"
```

###### Sample JSON Request:

```
GET /groups
```

###### Sample JSON Response:

```
{
  "groups": [
    {
      "group": {
        "id": 6,
        "name": "Garden, Electronics & Baby",
        "company_id": 75,
        "creator": null
      }
    },
    {
      "group": {
        "id": 5,
        "name": "music",
        "company_id": 75,
        "user": {
          "id": 158,
          "full_name": "Addison Hahn",
          "email": "d77d64aa04d1@keeptruckin.com",
          "username": null,
          "status": "active",
          "role": "admin"
        }
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
GET /groups.xml
```

###### Sample XML Response:

```
<?xml version="1.0" encoding="UTF-8"?>
<data>
    <groups>
        <group>
            <id>6</id>
            <name>Garden, Electronics &amp; Baby</name>
            <company_id>75</company_id>
            <creator nil="true"/>
        </group>
        <group>
            <id>5</id>
            <name>music</name>
            <company_id>75</company_id>
            <user>
                <id>158</id>
                <full_name>Addison Hahn</full_name>
                <email>d77d64aa04d1@keeptruckin.com</email>
                <username nil="true"/>
                <status>active</status>
                <role>admin</role>
            </user>
        </group>
    </groups>
    <pagination>
        <per_page>25</per_page>
        <page_no>1</page_no>
        <total>2</total>
    </pagination>
</data>
```

#### 2) Get a specific group

###### Request format:

```
GET /groups/:id
```

###### Request parameters:

+ id (**required** &#124; string): group id

###### Response Status:

+ 200
+ 400 - Not found
+ 403 - Forbidden

###### Response Body:

Returns group object.

###### Example Request:

```
curl -H "X-API-KEY: 12345" "https://api.keeptruckin.com/v1/groups"
```

###### Sample JSON Request:

```
GET /groups/7
```

###### Sample JSON Response:

```
{
  "group": {
    "id": 7,
    "name": "Grocery & Shoes",
    "company_id": 75,
    "user": {
      "id": 158,
      "full_name": "Addison Hahn",
      "email": "d77d64aa04d1@keeptruckin.com",
      "username": null,
      "status": "active",
      "role": "admin"
    }
  }
}
```

###### Sample XML Request:

```
GET /groups/7.xml
```

###### Sample XML Response:

```
<?xml version="1.0" encoding="UTF-8"?>
<data>
    <id>7</id>
    <name>Grocery &amp; Shoes</name>
    <company_id>75</company_id>
    <user>
        <id>158</id>
        <full_name>Addison Hahn</full_name>
        <email>d77d64aa04d1@keeptruckin.com</email>
        <username nil="true"/>
        <status>active</status>
        <role>admin</role>

    </user>
</data>
```

#### 3) Create group

###### Request format:

```
POST /groups
```

###### Request parameters:

+ name (**required** &#124; string): group name

###### Response Status:
+ 201 - group created
+ 200 - group is valid (test mode)
+ 400 - cannot create group
+ 403 - user should be an admin

###### Response Body:

Returns group object.

###### Sample Request:

```
POST /groups
```

###### Body:

```
{
  "name" : "group1"
}
```

###### Example Request:

```
curl -H "X-API-KEY: 12345" -d "name=foo" "https://api.keeptruckin.com/v1/groups"
```

###### Sample Response:

Same as specific group's response

#### 4) Update group

```
PUT /groups/:id
```

###### Request parameters:

+ id (**required** &#124; integer): id of the group to update
+ name (optional &#124; string) : name of the group

###### Response Status:

+ 200 - group updated
+ 400 - cannot update group
+ 403 - Forbidden
+ 404 - group not found

###### Response Body:

Returns group object.

###### Sample Request:

```
PUT /groups/1
```

###### Body:

```
{
  "name" : "group1"
}
```

###### Example Request:

```
curl -X PUT -H "X-API-KEY: 12345" -d "name=foo" "https://api.keeptruckin.com/v1/groups/4"
```

###### Sample Response:

Same as create group request

#### 5) Delete group

###### Request format:

```
DELETE /groups/:id
```

###### Request parameters:

+ id (**required** &#124; integer): id of the group to delete

###### Response Status:

+ 200 - group deleted
+ 400 - cannot delete group
+ 403 - Forbidden

###### Example Request:

```
curl -X DELETE -H "X-API-KEY: 12345" "https://api.keeptruckin.com/v1/groups/4"
```

###### Response Body:

Returns success response.

###### Sample Request:

```
DELETE /groups/1
```

#### 6) Retrieve list of users in a group

###### Request format:

```
GET /groups/:id/users
```

###### Request parameters:

+ id (**required** &#124; integer): id of the group
+ name (optional &#124; string): name of the driver
+ page_no (optional &#124; integer): page number for the records list. default is 1
+ per_page (optional &#124; integer): number of records to return per page. default is 25

###### Response Status:

+ 200
+ 403 - Forbidden

###### Response Body:

Returns users in a group.

###### Example Request:

```
curl -H "X-API-KEY: 12345" "https://api.keeptruckin.com/v1/groups/4/users"
```

###### Sample JSON Request:

```
GET /groups/1/users
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
        "cycle": "70_8",
        "mobile_last_active_at": "2016-03-16T09:20:26Z",
        "status": "active",
        "role": "driver"
      }
    },
    {
      "user": {
        "id": 159,
        "first_name": "Anahi",
        "last_name": "Flatley",
        "cycle": "70_8",
        "mobile_last_active_at": "2016-03-16T08:23:32Z",
        "status": "active",
        "role": "driver"
      }
    },
    {
      "user": {
        "id": 160,
        "first_name": "Golden",
        "last_name": "Cummings",
        "cycle": "70_8",
        "mobile_last_active_at": "2016-03-16T09:20:19Z",
        "status": "active",
        "role": "driver"
      }
    }
  ],
  "pagination": {
    "per_page": 25,
    "page_no": 1,
    "total": 3
  }
}
```

###### Sample XML Request:

```
GET /groups/1/users.xml
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
            <cycle>70_8</cycle>
            <mobile_last_active_at>2016-03-16T09:20:26Z</mobile_last_active_at>
            <status>active</status>
            <role>driver</role>
        </user>
        <user>
            <id>159</id>
            <first_name>Anahi</first_name>
            <last_name>Flatley</last_name>
            <cycle>70_8</cycle>
            <mobile_last_active_at>2016-03-16T08:23:32Z</mobile_last_active_at>
            <status>active</status>
            <role>driver</role>
        </user>
        <user>
            <id>160</id>
            <first_name>Golden</first_name>
            <last_name>Cummings</last_name>
            <cycle>70_8</cycle>
            <mobile_last_active_at>2016-03-16T09:20:19Z</mobile_last_active_at>
            <status>active</status>
            <role>driver</role>
        </user>
    </users>
    <pagination>
        <per_page>25</per_page>
        <page_no>1</page_no>
        <total>3</total>
    </pagination>
</data>
```

#### 7) Retrieve list of group vehicles

###### Request format:

```
GET /groups/:id/vehicles
```

###### Request parameters:

+ id (**required** &#124; integer): id of the group
+ page_no(optional &#124; integer): page number for the records list. default is 1
+ per_page(optional &#124; integer): number of records to return per page. default is 25

###### Response Status:

+ 200
+ 403 - Forbidden

###### Response Body:

Returns drivers in a group.

###### Example Request:

```
curl -H "X-API-KEY: 12345" "https://api.keeptruckin.com/v1/groups/4/vehicles"
```

###### Sample JSON Request:

```
GET /groups/5/vehicles
```

###### Sample JSON Response:

```
{
  "vehicles": [
    {
      "vehicle": {
        "id": 24,
        "number": "V-1000",
        "status": "active",
        "make": null,
        "model": null
      }
    },
    {
      "vehicle": {
        "id": 25,
        "number": "V-1001",
        "status": "active",
        "make": null,
        "model": null
      }
    },
    {
      "vehicle": {
        "id": 26,
        "number": "V-1002",
        "status": "active",
        "make": null,
        "model": null
      }
    }
  ],
  "pagination": {
    "per_page": 25,
    "page_no": 1,
    "total": 3
  }
}
```

###### Sample XML Request:

```
GET /groups/5/vehicles.xml
```

###### Sample XML Response:

```
<?xml version="1.0" encoding="UTF-8"?>
<data>
    <vehicles>
        <vehicle>
            <id>24</id>
            <number>V-1000</number>
            <status>active</status>
            <make nil="true"/>
            <model nil="true"/>
        </vehicle>
        <vehicle>
            <id>25</id>
            <number>V-1001</number>
            <status>active</status>
            <make nil="true"/>
            <model nil="true"/>
        </vehicle>
        <vehicle>
            <id>26</id>
            <number>V-1002</number>
            <status>active</status>
            <make nil="true"/>
            <model nil="true"/>
        </vehicle>
    </vehicles>
    <pagination>
        <per_page>25</per_page>
        <page_no>1</page_no>
        <total>3</total>
    </pagination>
</data>
```

#### 8) Add users to a group

###### Request format:

```
POST /groups/:id/users
```

###### Request parameters:

+ id (**required** &#124; integer): id of the group
+ ids (**required** &#124; integer array): array of user ids to add to the group

###### Response Status:

+ 200
+ 400 - fails if any of the records cannot be created
+ 403 - Forbidden

###### Example Request:

```
curl -H "X-API-KEY: 12345" -d "ids[]=66&ids[]=156" "https://api.keeptruckin.com/v1/groups/8/users"
```

###### Response Body:

Success response.

###### Sample Request:

```
POST /groups/25/users
```

###### Body:

```
{
  "ids": [12, 13]
}
```

#### 9) Add vehicles to a group

###### Request format:

```
POST /groups/:id/vehicles
```

###### Request parameters:

+ id (**required** &#124; integer): id of the group
+ ids (**required** &#124; integer array): array of vehicle ids to add to the group

###### Response Status:

+ 200
+ 400 - fails if any of the records cannot be created
+ 403 - Forbidden

###### Response Body:

Success response.

###### Example Request:

```
curl -H "X-API-KEY: 12345" -d "ids[]=66&ids[]=156" "https://api.keeptruckin.com/v1/groups/8/vehicles"
```

###### Sample Request:

```
POST /groups/25/vehicles
```

###### Body:

```
{
  "ids": [12, 13]
}
```

#### 10) Delete users from a group

###### Request format:

```
DELETE /groups/:id/users
```

###### Request parameters:

+ id (**required** &#124; integer): id of the group
+ ids (**required** &#124; integer array): array of user ids to be removed from the group

###### Response Status:

+ 200
+ 400 - fails if any of the records cannot be removed
+ 403 - Forbidden

###### Response Body:

Success response.

###### Example Request:

```
curl -X DELETE -H "X-API-KEY: 12345" -d "ids[]=156" "https://api.keeptruckin.com/v1/groups/8/users"
```

###### Sample Request:

```
DELETE /groups/25/users
```

###### Body:

```
{
  "ids": [12, 13]
}
```

#### 11) Delete vehicles from a group

###### Request format:

```
DELETE /groups/:id/vehicles
```

###### Request parameters:

+ id (**required** &#124; integer): id of the group
+ ids (**required** &#124; integer array): array of vehicle ids to be removed from the group

###### Response Status:

+ 200
+ 400 - fails if any of the records cannot be removed
+ 403 - Forbidden

###### Response Body:

Success response.

###### Example Request:

```
curl -X DELETE -H "X-API-KEY: 12345" -d "ids[]=156" "https://api.keeptruckin.com/v1/groups/8/vehicles"
```

###### Sample Request:

```
DELETE /groups/25/vehicles
```

###### Body:

```
{
  "ids": [12, 13]
}
```
