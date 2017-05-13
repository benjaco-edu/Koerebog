/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DirMapComponent } from './dir-map.component';

describe('DirMapComponent', () => {
  let component: DirMapComponent;
  let fixture: ComponentFixture<DirMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
