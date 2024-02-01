export const formatDate = (originalDate) => {
    // Parse the original date string
    const parsedDate = new Date(originalDate);
  
    // Define the months array for conversion
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
  
    // Get individual date components
    const month = months[parsedDate.getMonth()];
    const day = parsedDate.getDate();
    const year = parsedDate.getFullYear();
  
    // Construct the formatted date string
    const formattedDate = `${month} ${day}, ${year}`;
  
    return formattedDate;
  }
  