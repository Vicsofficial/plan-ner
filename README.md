## Dynamic Date and Time Display with Local Storage Interaction
# This Planner app shows the functionality to display the current date and time dynamically on a web page. It also includes the capability to save user entries for specific time blocks into the local storage, allowing the saved entries to show automatically across page reloads.

## Table of Contents
# Features
# Usage
# Code Explanation
# Features

# Dynamic Date and Time Display: Displayed the current date and time in the format "YYYY-MM-DD HH:mm:ss". The displayed time updates every second using the setInterval function.

# Time Block: Assigned different CSS classes (past, present, and future) to time blocks based on their relation to the current hour.

# Local Storage: The code provides a mechanism to save user entries associated with each time block to the local storage. When the page is reloaded, the saved entries are retrieved from the local storage and populated in the respective time blocks' text areas.

## Code Explanation
# The provided code consists of three main parts:

# Current Date and Time Display: This section utilizes the dayjs library to display the current date and time in the specified format. The displayed time is updated every second using the setInterval function.

# Time Block Styling: The code iterates through each time block and assigns appropriate CSS classes (past, present, or future) based on the comparison between the block's hour and the current hour.

# Local Storage Interaction: The code handles the saving and retrieving of user entries using the local storage API. When the "Save" button is clicked, the associated text area's value is saved to the local storage using the time block's id as the key. On page load, the saved entries are retrieved from the local storage and populated in the respective time blocks' text areas.




# Credit: W3Schools, MDN WebDocs, ChatGPT