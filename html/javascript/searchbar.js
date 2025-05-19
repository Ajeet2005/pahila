const searchInput = document.getElementById('search-input');
        const searchIcon = document.getElementById('search-icon');

        // Function to show the success pop-up
        function showSearchSuccess() {
            // Check if the search input is not empty
            if (searchInput.value.trim() !== '') {
                alert('Searched successfully');
            }
        }

        // Event listener for Enter key press in the search input
        searchInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault(); // Prevent form submission if inside a form
                showSearchSuccess();
            }
        });

        // Event listener for clicking the search icon
        searchIcon.addEventListener('click', function() {
            showSearchSuccess();
        });