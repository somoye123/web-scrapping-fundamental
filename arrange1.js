const otcsv = require("objects-to-csv");

const arrangeData1 = (dataArray) => {
   let  objectArray = [];
   dataArray.map(data => {
       let uniqueObject = {}
       uniqueObject.state = data.state;
       data.stores.map(location => {
           uniqueObject.storeName = location.store;
            if(location.address.startsWith('MTN Service Center,'))
                location.address.replace('MTN Service Center,',' ');
            if(location.address.includes(data.state))
                location.address.replace(data.state,' ');
            splitedAddresses = location.address.trim().split(',');
            if(splitedAddresses.length > 1){
                uniqueObject.address1 = splitedAddresses[0];
                uniqueObject.address2 = splitedAddresses[1];
            }else{
                uniqueObject.address1 = splitedAddresses[0];
                uniqueObject.address2 = 'No second address';
            }
       });
       objectArray.push(uniqueObject);
   });
   const transformed = new otcsv(objectArray);
   return transformed.toDisk("./output.csv");
//    console.log(objectArray);
}
module.exports = arrangeData1;