let db = {}


const addToDb = item =>{
    const storedTracker = localStorage.getItem('checka-tracker')
    if(storedTracker){
        db =JSON.parse(storedTracker)
    }

    if(item in db){
        db[item] = db[item] + 1
    }
    else{
        db[item] = 1
    }
    localStorage.setItem('checka-tracker',JSON.stringify(db))
    localStorage.getItem(JSON.parse(''))
} 

const removeItem = item =>{
    const storedTracker = localStorage.getItem('checka-tracker')
    if(storedTracker){
        const storedObject = JSON.parse(storedTracker)
        delete storedObject[item]
        localStorage.setItem('checka-tracker',JSON.stringify(storedObject))
    }
}

