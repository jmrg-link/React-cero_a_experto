import "@testing-library/jest-dom";
import { getUser , getUsuarioActivo } from '../../base/05-funciones'

describe('05-funciones.test.js', () => { 
    test('debe de retornar un objeto', () => { 
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        //console.log(userTest);
        const user = getUser()
        //console.log(user);

        expect(user).toEqual(userTest)
     })
     
     test('getUsuarioActivo debe de retornar un objeto nombre', () => { 
        const getActiveUser = {
            uid: 'ABC567',
            username: 'jesus'
        }
        const user = getUsuarioActivo()
        expect(user).toEqual(getActiveUser)
      })

      

 })