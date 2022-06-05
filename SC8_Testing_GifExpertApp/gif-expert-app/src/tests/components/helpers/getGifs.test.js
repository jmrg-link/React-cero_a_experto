import {getGifs} from "../../../helpers/getGifs";

describe('Pruebas con getGifs Fetch', () => {
    test('debe de traer 10 elementos ', async() => {
        const gifs = await getGifs('One Punch')
        expect(gifs.length).toBe(10);
    });
    test('debe de retornar 0 ',async () => {
        const gifs = await getGifs('')
        //console.log(gifs) []
        expect(gifs.length).toEqual(0);
    })
});