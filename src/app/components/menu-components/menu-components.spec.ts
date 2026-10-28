import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuComponents } from './menu-components';

describe('MenuComponents', () => {
  let component: MenuComponents;
  let fixture: ComponentFixture<MenuComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuComponents],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
