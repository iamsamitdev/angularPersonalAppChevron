import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbackendComponent } from './navbackend.component';

describe('NavbackendComponent', () => {
  let component: NavbackendComponent;
  let fixture: ComponentFixture<NavbackendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbackendComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
