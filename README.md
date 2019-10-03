### GQL API QUERIES

Install packages, then run npm start and open the app on `localhost:4000`

```sh
{
  cars {
    id
    plateNumber
    color
    model
    chasisNumber
    vehicleStatus
    yearOfManufacture
    issueDate
    expiryDate
  }
  car(plateNumber: "EPE68ET") {
    id
    plateNumber
    color
    model
  }
}
```

This will allow you to run any queries you want.
