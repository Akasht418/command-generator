import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmdGenParentComponent } from './cmd-gen-parent.component';

describe('CmdGenParentComponent', () => {
  let component: CmdGenParentComponent;
  let fixture: ComponentFixture<CmdGenParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmdGenParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmdGenParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
