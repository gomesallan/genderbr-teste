// module.export ={}
import { getGenderByName } from 'br-gender';

async function main(name:string) {  
    const gender = await getGenderByName(name, { percentage: true });
    // console.log(gender)
    return gender;
}
main('cleide')
    .then(text => {
        console.log(text);
    })
    .catch(err => {
        // Deal with the fact the chain failed
    });
