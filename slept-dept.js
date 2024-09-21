const getSleepHours = (day) => {
    day = day.toLowerCase();
    if (day === 'monday') {
      return 8;
    } else if (day === 'tuesday') {
      return 7;
    } else if (day === 'wednesday') {
      return 6;
    } else if (day === 'thursday') {
      return 5;
    } else if (day === 'friday') {
      return 8;
    } else if (day === 'saturday') {
      return 9;
  } else if (day === 'sunday') {
      return 7;
  } else {
    return 'Invalid day'
  }
  };
  const getActualSleepHours = () => {
    // directly sum up the hours for each day
    return 8 + 7 + 6 + 5 + 8 + 9 + 7;
  }; // replace these numbers with your actual sleep hours each day
  
  const getIdealSleepHours = (idealHours) => {
    // mlutiply idealHours by 7 to get total ideal sleep hours for the week
    return idealHours * 7;
  };
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(9);
    // replace 7 with ideal hours per night
    if (actualSleepHours === idealSleepHours) {
      console.log('You got the perfect amount of sleep');
    } else if (actualSleepHours > idealSleepHours) {
      console.log('You got ' + (actualSleepHours - idealSleepHours) + 'hour(s) more sleep than needed');
    } else {
      console.log('You got ' + (idealSleepHours - actualSleepHours) + 'hour(s) less sleep than you needed. Get some rest');
    }
  };
  // Call the calculateSleepDebt function to start the program
  calculateSleepDebt();
