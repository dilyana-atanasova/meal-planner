import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRecipesComponent } from './search-recipes.component';

describe('SearchRecipesComponent', () => {
  let component: SearchRecipesComponent;
  let fixture: ComponentFixture<SearchRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchRecipesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchRecipesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
