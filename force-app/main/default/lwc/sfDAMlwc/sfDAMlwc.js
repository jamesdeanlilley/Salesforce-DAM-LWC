import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {
    @track value = ['Education'];
    
    get options() {
        return [
            { label: 'Education', value: 'Education' },
            { label: 'Faith', value: 'Faith' },
        ];
    }
    
    get isEducation() {
        return this.value.includes('Education');
    }
    
    get isFaith() {
        return this.value.includes('Faith');
    }
    
    handleChange(event) {
        this.value = event.detail.value;
    }
}
