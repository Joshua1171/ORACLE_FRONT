export class Locations {
    location_id: number;
    street_address: string;
    postal_code: string;
    city: string;
    state_province: string;
    country_id: string;
    constructor(){
        this.location_id=0;
        this.street_address='';        
        this.postal_code='';
        this.city='';
        this.state_province='';
        this.country_id='';
    }
    
}
