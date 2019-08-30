const { convertArrayToCSV } = require('convert-array-to-csv');

const csvColumns = ['States','StoreName','Address1','Address2'];
const csvDataArray = [];


const arrangeData = (dataArray) => {
    let csvState = [];
    let csvStoreName = [];
    let address1 = [];
    let address2 = [];

    dataArray.map(data => {
        csvState.push(data.state);
        data.stores.map(location => {
            csvStoreName.push(location.store);
            if(location.address.startsWith('MTN Service Center,'))
                location.address.replace('MTN Service Center,',' ');
            if(location.address.includes(data.state))
                location.address.replace(data.state,' ');
            splitedAddresses = location.address.trim().split(',');
            if(splitedAddresses.length > 1){
                address1.push(splitedAddresses[0]);
                address2.push(splitedAddresses[1]);
            }else{
                address1.push(splitedAddresses[0]);
                address2.push('No second address')
            }
        })
    });

    csvDataArray.push(csvState);
    csvDataArray.push(csvStoreName);
    csvDataArray.push(address1);
    csvDataArray.push(address2);

    const csvFromArrayOfArrays = convertArrayToCSV(csvDataArray, {
        csvColumns,
        separator: ';'
    });
    
    console.log(csvFromArrayOfArrays);
}

module.exports = arrangeData;