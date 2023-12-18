function createRandomPromise() {
  return new Promise((resolve, reject) => {
      const randomValue = Math.random();
      if (randomValue < 0.5) {
          resolve("Promise resolved");
      } else {
          reject("Promise rejected");
      }
  });
}
createRandomPromise()
  .then((result) => {
      console.log("Success:", result);
  })
  .catch((error) => {
      console.log("Error:", error);
  });




function getUsersFromAPI() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
                throw Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('Error', error.message);
            throw error;
        });
}

getUsersFromAPI()
    .then(users => {
        console.log('Users:', users);
    })
    .catch(error => {
        console.error('Error:', error);
    });




    async function fetchDataFromFastestAPI() {
        const url1 = 'https://dummyjson.com/users';
        const url2 = 'https://jsonplaceholder.typicode.com/users';
      
        const promise1 = fetch(url1).then(response => response.json());
        const promise2 = fetch(url2).then(response => response.json());
      
        try {
          const result = await Promise.race([promise1, promise2]);
      
          console.log( result);
          return result;
        } catch (error) {
          console.error('Error:', error.message);
          return null;
        }
      }
      

      fetchDataFromFastestAPI();

