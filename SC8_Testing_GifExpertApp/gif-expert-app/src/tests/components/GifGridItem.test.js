import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("Pruebas en <GifGridItem />", () => {
    const title = 'Un titulo'
    const url   = 'https://localhost/ejemplo.jpeg'
  test("debe de mostrar el componente correctamente", () => {
    const wrapper = shallow(<GifGridItem title={title} url={url}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
