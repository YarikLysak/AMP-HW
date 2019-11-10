import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarComponent } from './search-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBarComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit search click', () => {
    const searchSpy = spyOn(component, 'searchCourse');
    const debugEl = fixture.debugElement.nativeElement;
    const searchBnt = debugEl.querySelector('.search-btn');

    searchBnt.click();
    fixture.detectChanges();

    expect(searchSpy).toHaveBeenCalled();
  });

  it('should log message', () => {
    const consoleSpy = spyOn(console, 'log');
    component.searchCourse();

    expect(consoleSpy).toHaveBeenCalled();
  });
});
