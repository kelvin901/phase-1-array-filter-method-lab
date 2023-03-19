// Sample driver data array
const drivers = [
  { id: 1, name: 'Kelvin', age: 23, carType: 'Maruti', rating: 4.5 },
  { id: 2, name: 'Samuel', age: 25, carType: 'Subaru', rating: 4.7 },
  { id: 3, name: 'Jane', age: 45, carType: 'SUV', rating: 4.2 },
  { id: 4, name: 'Sara', age: 29, carType: 'sedan', rating: 4.9 },
  { id: 5, name: 'Chris', age: 37, carType: 'hatchback', rating: 4.3 },
];

// Function to filter drivers by car type
function filterByCarType(carType) {
  return drivers.filter(driver => driver.carType === carType);
}

// Function to filter drivers by minimum rating
function filterByMinRating(minRating) {
  return drivers.filter(driver => driver.rating >= minRating);
}

// Function to filter drivers by age range
function filterByAgeRange(minAge, maxAge) {
  return drivers.filter(driver => driver.age >= minAge && driver.age <= maxAge);
}

// Example usage
const sedanDrivers = filterByCarType('sedan');
console.log(sedanDrivers);

const highlyRatedDrivers = filterByMinRating(4.5);
console.log(highlyRatedDrivers);

const middleAgedDrivers = filterByAgeRange(30, 50);
console.log(middleAgedDrivers);

function findMatching(drivers, searchString) {
    const searchLower = searchString.toLowerCase(); // convert search string to lowercase for case-insensitivity
    return drivers.filter(driver => driver.toLowerCase().includes(searchLower));
  }

  function findMatching(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
  }
  
  // Example usage
  const taxdrivers = ['kelvin', 'Samuel', 'sara', 'chris', 'Jane'];
  const matchingDrivers = findMatching(drivers, 'SaMuEl');
  console.log(matchingDrivers); // ['Samuel']
  function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
  }
  
  // Example usage
  const Ddrivers = ['kelvin', 'Samuel', 'sara', 'chris', 'Jane'];
  const matchDrivers = fuzzyMatch(drivers, 'sa');
  console.log(matchingDrivers); // ['Samuel', 'sara']
  