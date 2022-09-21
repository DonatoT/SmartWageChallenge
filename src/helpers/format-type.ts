const formatType = (type: string): string => {
    let color: string;
   
    switch (type) {
      case 'Live': 
        color = '#20C9974D'; 
        break; 
      case 'Close': 
        color = '#F03E3E4D'; 
        break; 
     default:
        color = 'grey';
        break
    }
   
    return `${color}`;
  }

  export default formatType;