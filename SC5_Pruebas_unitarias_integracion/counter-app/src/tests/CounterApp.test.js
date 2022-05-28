import React from 'react';
import { shallow } from 'enzyme'
import CounterApp from '../CounterApp'


describe('Pruebas en CounterApp', () => { 
    // se declara dos veces para no perder intelligense
    let wrapper = shallow(<CounterApp/>)
    beforeEach(()=>{
        wrapper = shallow(<CounterApp/>)
        //console.log('beforeEach!!!!');
    })

    test('debe de mostrar <CounterApp /> scon snapshot', () => { 
        const wrapper = shallow(<CounterApp/>)
        expect(wrapper).toMatchSnapshot()
     })
     test('should debe de mostrar el valor por defecto de 0', () => { 
        const counterText = wrapper.find('h2').text().trim()
        //console.log(`${counterText}`);
        expect(counterText).toBe('0')
      })
     test('debe incrementar con el btn +1', () => { 
        wrapper.find('button').at(0).simulate('click')
        const counterText = wrapper.find('h2').text().trim()
        expect(counterText).toBe('1')
        //console.log(counterText);
     })
     test('debe decrementar con el btn -1', () => { 
        wrapper.find('button').at(2).simulate('click')
        const counterText = wrapper.find('h2').text().trim()
        expect(counterText).toBe('0')
        //console.log(counterText);
     })
     test('debe realizar mostrar 0 al pulsar reset ', () => { 
        const wrapper = shallow(<CounterApp />)
        wrapper.find('button').at(0).simulate('click')
        wrapper.find('button').at(1).simulate('click')
        const counterText = wrapper.find('h2').text().trim()
        expect(counterText).toBe('0')

     })
 })