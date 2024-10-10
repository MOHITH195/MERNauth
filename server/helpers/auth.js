import bcypt from 'bcrypt'
const hashPassword =  (password) => {
    return new Promise((resolve,reject) => {
        bcypt.genSalt(12,(err,salt) => {
            if(err){
                reject(err);
            }
        bcypt.hash(password,salt,(err,hash) => {
            if(err){
                reject(err);
            }
            resolve(hash);
        })
        })
    })
}

const comparePassword = (password,hash) => {
    return bcypt.compare(password,hash);
}


export {hashPassword,comparePassword};
