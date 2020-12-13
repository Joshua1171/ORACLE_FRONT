export class Employees {
    employee_id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    hire_date: Date;
    job_id: string;
    salary: number;
    commission_ptc: number;
    manager_id: number;
    department_id: number;
    constructor(){
        this.employee_id=0;
        this.first_name='';
        this.last_name='';
        this.email='';
        this.phone_number='';
        this.hire_date=new Date();
        this.job_id='';
        this.salary=0;
        this.commission_ptc=0;
        this.manager_id=0;
        this.department_id=0;
    }
}
