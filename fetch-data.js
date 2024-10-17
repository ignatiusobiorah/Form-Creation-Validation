// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {

    // Define the asynchronous function to fetch and display user data
    async function fetchUserData() {
        // API URL for fetching user data
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        
        // Select the container where the user data will be displayed
        const dataContainer = document.getElementById('api-data');

        try {
            // Fetch the data from the API
            const response = await fetch(apiUrl);
            
            // Convert the response to JSON
            const users = await response.json();
            
            // Clear the "Loading" message
            dataContainer.innerHTML = '';

            // Create a <ul> element to hold the list of users
            const userList = document.createElement('ul');

            // Loop through the users array and display each user's name
            users.forEach(user => {
                // Create a <li> element for each user
                const listItem = document.createElement('li');
                
                // Set the text content of the <li> to the user's name
                listItem.textContent = user.name;
                
                // Append the <li> to the <ul>
                userList.appendChild(listItem);
            });

            // Append the <ul> to the data container
            dataContainer.appendChild(userList);

        } catch (error) {
            // Handle any errors that occur during the fetch operation
            dataContainer.innerHTML = 'Failed to load user data.';
            console.error('Error fetching user data:', error);
        }
    }

    // Invoke the function to fetch and display the user data
    fetchUserData();
});