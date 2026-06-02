function mySetTimeout(delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, delay);
    });
}


function makeToys(delayTime) {
    console.log(`სათამაშოების დამზადებას დასჭირდება ${delayTime / 1000} წამი)`);
    
    return mySetTimeout(delayTime).then(() => {
        return new Promise((resolve, reject) => {
            if (Math.random() > 0.1) {
                resolve('Undefected');
            } else {
                reject('Defected');
            }
        });
    });
}


function sellToys(status, delayTime) {
   
    return mySetTimeout(delayTime).then(() => {
        return new Promise((resolve, reject) => {
            if (status === 'Undefected') {
                if (Math.random() > 0.7) {
                    resolve('Toy has been sold');
                } else {
                    reject('Toy was unsuccessful');
                }
            } else {
                reject('Cannot sell defected toy');
            }
        });
    });
}


function deliverToys(saleStatus, delayTime) {
    console.log(`მიწოდების პროცესი`);
    
    return mySetTimeout(delayTime).then(() => {
        return new Promise((resolve, reject) => {
            if (saleStatus === 'Toy has been sold') {
                resolve('Toy has been successfully delivered to the customer');
            } else {
                reject('Delivery failed because the toy was not sold');
            }
        });
    });
}


// then .catch
makeToys(3000) 
    .then((status) => {
        console.log(`დამზადების სტატუსი: ${status}`);
        return sellToys(status, 1000); 
    })
    .then((saleStatus) => {
        console.log(`გაყიდვის სტატუსი: ${saleStatus}`);
        return deliverToys(saleStatus, 2000); 
    })
    .then((deliveryResult) => {
        console.log(deliveryResult); 
    })
    .catch((err) => {
        console.log(`${err}`);
    });


    // async await
async function startToyBusiness() {
    try {
        
        const status = await makeToys(3000);
        console.log(`დამზადების სტატუსი: ${status}`);
        
        
        const saleStatus = await sellToys(status, 1000);
        console.log(`გაყიდვის სტატუსი: ${saleStatus}`);
        
       
        const deliveryResult = await deliverToys(saleStatus, 2000);
        console.log(deliveryResult);
        
    } catch (err) {
        
        console.log(`${err}`);
    }
}

startToyBusiness();