import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListElementRecipe } from '../../models/ListElementRecipe';
import { RecipeLinkComponent } from './recipe-link.component';

describe('RecipeLinkComponent', () => {
  let component: RecipeLinkComponent;
  let fixture: ComponentFixture<RecipeLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeLinkComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeLinkComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the recipe details from input', () => {
    component.recipe = new ListElementRecipe(
      'Pasta Primavera',
      'https://example.com/recipes/pasta-primavera',
      'https://example.com/images/pasta.jpg',
    );

    fixture.detectChanges();

    const link = fixture.nativeElement.querySelector('a.recipe-link');
    const image = fixture.nativeElement.querySelector('img');

    expect(link?.textContent).toContain('Pasta Primavera');
    expect(link?.getAttribute('href')).toBe('https://example.com/recipes/pasta-primavera');
    expect(image?.getAttribute('src')).toBe('https://example.com/images/pasta.jpg');
  });
});
