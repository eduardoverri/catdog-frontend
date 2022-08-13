import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEntidadeComponent } from './home-entidade.component';

describe('HomeEntidadeComponent', () => {
  let component: HomeEntidadeComponent;
  let fixture: ComponentFixture<HomeEntidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeEntidadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeEntidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
