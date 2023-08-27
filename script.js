
// Current time and date function starts here:
$(document).ready(function() {
    // Function to update the current date and time
    function updateDateTime() {
      var currentDateTime = dayjs().format('YYYY-MM-DD HH:mm:ss');
      $('#currentDateTime').text('Current Date and Time: ' + currentDateTime);
    }
    updateDateTime();
    setInterval(updateDateTime, 1000);
  });

// Function to update the current date and time starts here:
$(document).ready(function() {
    function updateDateTime() {
        var currentDateTime = dayjs().format('YYYY-MM-DD HH:mm:ss');
        $('#currentDateTime').text('Current Date and Time: ' + currentDateTime);
    }
    updateDateTime();
    setInterval(updateDateTime, 1000);
  
    function updateDateTime() {
        function updateDateTime() {
            var currentDateTime = dayjs().format('YYYY-MM-DD HH:mm:ss');
            $('#currentDateTime').text('Current Date and Time: ' + currentDateTime);
        };
  
      var currentHour = dayjs().hour();
  
      $('.time-block').each(function() {
        var blockHour = parseInt($(this).attr('id').split('-')[1]); // Extract hour from the id
  
        $(this).removeClass('past present future');
  
        if (blockHour < currentHour) {
          $(this).addClass('past');
        } else if (blockHour === currentHour) {
          $(this).addClass('present');
        } else {
          $(this).addClass('future');
        }
      });
    }
    
    // Call the updateDateTime function initially
    updateDateTime();
  
    // Call the updateDateTime function every second
    setInterval(updateDateTime, 1000);
  });


// Function to save user entry in local storage starts here:
$('.saveBtn').click((e)=>{ 
    const parent = e.currentTarget.parentElement
    const parentId = "#" + parent.id
    const textAreaValue = ($(parentId + " .description")[0]).value
    localStorage.setItem(parent.id, textAreaValue);
});

$(document).ready((e)=>{
    const timeBlocks = $(".time-block")
    const timeBlockIds = timeBlocks.map((i, element) => element.id)
    timeBlockIds.map(timeBlockId => {
      const data = localStorage.getItem(timeBlockId)
      if(data) {
        $("#" + timeBlockId + ' .description').val(data)
      }
    })
});


