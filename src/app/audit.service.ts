import {Audit} from './models/Audit';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';


@Injectable()
export class AuditService {
    onAuditListChange: Subject<Array<Audit>> = new Subject<Array<Audit>>();
    private auditList : Array<Audit> = [
        new Audit("123", 1, {name: 'cat1', id:1}, "area1"),
        new Audit("456", 2, {name: 'cat2', id:2}, "area2"),
        new Audit("678", 3, {name: 'cat1', id:1}, "area1")
    ];
    constructor(private http: HttpClient){}
    getAudits(): Observable<Array<Audit>> {
        return this.http
                    .get<Array<Audit>>('/assets/audits.json')
                    .pipe(
                        map((res: Array<Audit>) => {
                            return res;
                        }),
                        map((res: Array<Audit>) => {
                            this.onAuditListChange.next(res);
                            return res;
                        })

                    );
    }

    getAuditById(id: string): Observable<Audit> {
        return this.http
                    .get<Array<Audit>>('/assets/audits.json')
                    .pipe(
                        map((res: Array<Audit>) => {
                            return res.find((item: Audit) => item.id === parseInt(id, 10));
                        })
                    )

    }
}