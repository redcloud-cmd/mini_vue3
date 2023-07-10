import { reactive } from "../reactive";
import {effect} from '../effect'
describe('effect',()=>{
    
    it('happy path',()=>{
        const user = reactive({
            age:10
        })
        let nextAge ;
        effect(()=>{
            nextAge= user.age+1
            // console.log()
        });
        expect(nextAge).toBe(11)
    })
})