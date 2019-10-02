const resolvers = {
  Query: {
    car: (root, { plateNumber }, { dataSources }) =>
      dataSources.mvrpAPI.getACar(plateNumber),
    cars: (root, args, { dataSources }) => dataSources.mvrpAPI.getAllCars()
  },
  Car: {
    vehicleStatus: ({ status }) => status,
    yearOfManufacture: ({ productionYear }) => productionYear
  }
};

export default resolvers;
