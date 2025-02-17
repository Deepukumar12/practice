function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            // let success = false; // for testing purpose to simulate error

            if(success)
            {
                resolve("Data fetched successfully");
            }
            else{
                reject("Error fetching data");
            }
        }, 3000);
    });
};

// let response = fetchData();
// console.log(response);

fetchData()
.then((data) => {
    console.log(data)
    // return `Bhole.....`;
    return data.toLowerCase();
})
.then((value) => {
    console.log(value);
})
.catch((error) => console.error(error));