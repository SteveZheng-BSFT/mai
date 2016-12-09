import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { RadioBtnComponent } from './radio-btn.component';
// import { DebugElement } from '@angular/core';
// import { By } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';

let cmp: RadioBtnComponent,
    fixture: ComponentFixture<RadioBtnComponent>;
    // de: DebugElement,
    // el: HTMLElement;

describe('RadioBtnComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ RadioBtnComponent ]
        }).compileComponents(); // compile template and css
        fixture = TestBed.createComponent(RadioBtnComponent);
        cmp = fixture.componentInstance;
    }));

    // it('should raise selected event when click', () => {
    //     cmp.id = 'testid';
    //     cmp.group = 'testgroup';
    //     cmp.title = 'testtittle';
    //     cmp.spec = 'testspec';
    //     let expectedRadioEvent = {checked: true, key: 'testid', value: 'testtittle'};
    //
    //     let selectedRadio;
    //     cmp.onRadioChecked.subscribe((radio) => selectedRadio = radio);
    //     de = fixture.debugElement.query(By.css('input'));
    //
    //     let eventObj = {
    //         target: {
    //             checked: true,
    //             name: 'testid',
    //             defaultValue: 'testtittle'
    //         }
    //     };
    //     de.triggerEventHandler('get_selected', eventObj);
    //     expect(selectedRadio).toBe(expectedRadioEvent);
    // });

    /*it('should have title if setup', () => {
        // query DOM
        de = fixture.debugElement.query(By.css('.title'));
        el = de.nativeElement;
        // set title
        cmp.title = 'test title';
        fixture.detectChanges();

        expect(el.textContent).toContain(cmp.title);
    });

    it('should have spec if setup', () => {
        // query DOM
        de = fixture.debugElement.query(By.css('.description'));
        el = de.nativeElement;
        // set title
        cmp.spec = 'test spec';
        fixture.detectChanges();

        expect(el.textContent).toContain(cmp.spec);
    });*/
});
