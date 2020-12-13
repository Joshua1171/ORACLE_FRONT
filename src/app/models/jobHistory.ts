export class JobHistory {
    employee_id: number;
    start_date: Date;
    end_date: Date;
    job_id: string;
    department_id: number;
    
    constructor(){
        this.employee_id=0;
        this.start_date=new Date();
        this.end_date=new Date();
        this.job_id='';
        this.department_id=0;
    }

}
