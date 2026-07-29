import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ListElementRecipe } from '../models/ListElementRecipe';
import { RecipesService } from './recipes';

describe('Recipes', () => {
  let service: RecipesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(RecipesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should search meals and map them to ListElementRecipe[]', () => {
    const searchType = 's';
    const searchQuery = 'chicken';

    service.search(searchType, searchQuery).subscribe((recipes: ListElementRecipe[]) => {
      expect(recipes.length).toBe(1);
      expect(recipes[0]).toEqual(
        new ListElementRecipe(
          'Chicken',
          'https://www.themealdb.com/meal/123',
          'https://www.themealdb.com/images/media/meals/xyz.jpg'
        )
      );
    });

    const req = httpMock.expectOne((request) => {
      return request.url === 'https://www.themealdb.com/api/json/v1/1/search.php' && request.params.get(searchType) === searchQuery;
    });

    expect(req.request.method).toBe('GET');
    req.flush({
      meals: [
        {
          strMeal: 'Chicken',
          idMeal: '123',
          strMealThumb: 'https://www.themealdb.com/images/media/meals/xyz.jpg',
        },
      ],
    });
  });
});
