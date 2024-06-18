#This is simple e learning app
Where user can register and login
And create course and access it.
##![e-learning-home](https://user-images.githubusercontent.com/61626746/217613799-5a8f0eb7-0107-465b-ae2d-ab0133332add.png)
 all data will be store in the data base


## login page-->

![login](https://user-images.githubusercontent.com/61626746/209992808-81b69b10-2652-41bd-9c54-3fed06c8a613.jpg)

## addCourse page


## about page
![about-Elearning](https://user-images.githubusercontent.com/61626746/217614038-2d6594be-fc6f-46dd-8b75-4e0b83ea55b7.png)

## do `npm update` 
and it will update all outdated pakages and if mongodb any error comes eg. findOne related because of mongodb version simply do "npm update"

#Server Documentation
<details>
    <summary>localhost:5000/users/signup<summary>
    The POST /users/signup endpoint is used to sign up new users. The request should be sent to localhost:5000/users/signup using the HTTP POST method. The request body should be of type x-www-form-urlencoded and include the following parameters:
name (text): The name of the user.
email (text): The email address of the user.
password (text): The password chosen by the user.

The response of this request is documented as a JSON schema:


JSON

{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string"
    },
    "message": {
      "type": "string"
    }
  }
}

### Body
urlencoded
name
user

email
user@gmail.com

password
user
</details>

<details>
<summary>localhost:5000/users/login</summary>
</details>

<details>
<summary>localhost:5000/users/user/:id</summary>
This endpoint retrieves the details of a specific user identified by their unique ID. The response is in JSON format and can be documented as a JSON schema.
The response JSON schema for this request can be documented as follows:

JSON

{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string"
    },
    "username": {
      "type": "string"
    },
    "email": {
      "type": "string"
    },
    "createdAt": {
      "type": "string",
      "format": "date-time"
    },
    "updatedAt": {
      "type": "string",
      "format": "date-time"
    }
  }
}

</details>
