import {Audit} from './models/Audit';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuditService {
    private auditList : Array<Audit> = [
        new Audit("123", 1, {name: 'cat1', id:1}, "area1"),
        new Audit("456", 2, {name: 'cat2', id:2}, "area2"),
        new Audit("678", 3, {name: 'cat1', id:1}, "area1")
    ];
    constructor(private http: HttpClient){}
    getAudits(): Array<Audit> {
        return this.auditList;
    }
}