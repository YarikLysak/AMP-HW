import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { LoadMoreComponent } from './load-more.component';

describe('LoadMoreComponent', () => {
  let component: LoadMoreComponent;
  let fixture: ComponentFixture<LoadMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoadMoreComponent],
      imports: [HttpClientModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit loadMore click', () => {
    const spy = spyOn(component, 'loadMore');
    const debugEl = fixture.debugElement.nativeElement;
    const loadMoreBtn = debugEl.querySelector('.load-more');

    loadMoreBtn.click();

    expect(spy).toHaveBeenCalled();
  });

  it('should log message', () => {
    const consoleSpy = spyOn(console, 'log');
    component.loadMore();

    expect(consoleSpy).toHaveBeenCalled();
  });
});
