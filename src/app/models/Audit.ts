import {Category} from './Category';

export class Audit {
    constructor(
        public name: string,
        public id: number,
        public category: Category,
        public auditArea: string
    ){
        
    }
}