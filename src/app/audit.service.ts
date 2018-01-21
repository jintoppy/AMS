import {Audit} from './models/Audit';

export class AuditService {
    private auditList : Array<Audit> = [
        new Audit("123", 1, {name: 'cat1', id:1}, "area1"),
        new Audit("456", 2, {name: 'cat2', id:2}, "area2"),
        new Audit("678", 3, {name: 'cat1', id:1}, "area1")
    ];
    constructor(){}
    getAudits(): Array<Audit> {
        return this.auditList;
    }
}