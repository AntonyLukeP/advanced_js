class MyPromise{
    constructor(executor)
    {
        this.status = "pending",
        this.value = undefined,
        this.reason = undefined,
        this.onFulfilledCallbacks = [],
        this.onRejectedCallbacks = [];

        const resolve = (value)=>
        {
            if(this.status == "pending"){
                this.status = "fulfilled"
                this.value = value

                this.onFulfilledCallbacks.forEach((onFulfilled)=>
            {
                onFulfilled(this.value);
            })
            }
        };

        const reject = (reason)=>
        {
            if(this.status == "pending"){
                this.status = "rejected"
                this.reason = reason

                this.onRejectedCallbacks.forEach((onRejected)=>
            {
                onRejected(this.reason);
            })
            }
        }
        executor(resolve,reject);
    }
    then(onFulfilled,onRejected){

        onFulfilled = typeof onFulfilled === "function"? onFulfilled : (value)=> value;

        onRejected = typeof onRejected === "function"? onRejected : (reason)=> {throw reason;};

        return new MyPromise((resolve,reject)=>
        {
            if(this.status == "fulfilled"){
            try{
                const result = onFulfilled(this.value);
                resolve(result);
            }
            catch(err)
            {
                reject(err);
            }
        }

        if(this.status == "rejected")
        {
               try{
                const result =  onRejected(this.reason);
               resolve(result);
               }
               catch(err)
               {
                reject(err);
               }
        }

        if(this.status == "pending")
        {
            this.onFulfilledCallbacks.push(()=>
            {
                try{
                    const result = onFulfilled(this.value);
                    resolve(result);
                }catch(err)
                {
                    reject(err);
                }
            });

            this.onRejectedCallbacks.push(()=>{
                try{
                    const result = onRejected(this.reason);
                    resolve(result);
                }
                catch(err)
                {
                    reject(err);
                }
            })
        }    
        })
    }
    catch(onRejected)
    {
        return this.then(null, onRejected);
    }

    finally(callback) {
    return this.then(
      (value) => {
        callback();
        return value;
      },
      (reason) => {
        callback();
        throw reason;
      }
    
)}
}

const p = new MyPromise((resolve,reject)=>
{
    setTimeout(()=>
    {
        resolve("Promise failed");
    },5000)
}).then((value)=>
{
    console.log(value);
}).catch((reason)=>
{
    console.log(reason);
})