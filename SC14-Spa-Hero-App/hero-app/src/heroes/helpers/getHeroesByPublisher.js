import {heroes} from '../data/heroes'

export const getHeroesByPublisher = (publisher) => {
    const validPublishers = [ 'DC Comics' , 'Marvel Comics' ]
    if ( !validPublishers.includes(publisher) ) {
        throw new Error(` ${ publisher } ** ERROR ** is not a valid publisher`)
    }
    return heroes.filter( f => f.publisher === publisher )
}