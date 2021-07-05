# Getir Assignment
A RESTful API that fetches the data from a MongoDB database collection .

* **Data Params**

  ```
    startDate, endDate, minCount, maxCount
  ```
   **Required:**
 
   `startDate=[Date]`
   `endDate=[Date]`
   `minCount=[Integer]`
   `maxCount=[Integer]`
   
* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** 
     ``` 
    {  
       code:[Integer],  // 0
       msg:[String],    // Success
       records:[ Array of {"key":[String], "createdAt":[String],"totalCount":[Integer]}] //List of records
    }
    ```

* **Error Response:**


  * **Code:**  ERROR <br />
    **Content:**
      ```
      {
      "code": 1,
      "msg": "Error while performing fetching records",
      }
     ```


  Response
  
  ```
  {
    "code": 0,
    "msg": "Success",
    "records": [
        {
            key: 'ExSEtrw',
            createdAt: '2021-01-03T02:58:00.940Z',
            totalCount: 72,
        },
        {
            key: 'steVMie',
            createdAt: '2020-05-01T12:30:20.519Z',
            totalCount: 79,
        },
    ]
   }
  
  ```
  
# Running the API localy 

```
git clone https://github.com/ArslanHayat12/getir-assignment.git
npm run start


Add some configuration in .env file like
PORT 
DB_URI
DB_NAME
```
The API will run on the localhost with port 3000

# Testing the API
```
npm run test
```

# Linting
```
npm run lint
```

# Licence
The MIT License (MIT)

Copyright (c) 2020 Muhammad Arslan Hayat