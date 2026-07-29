import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';

import { ListElementRecipe } from '../models/ListElementRecipe';

@Injectable({ providedIn: 'root' })
export class RecipesService {
  private readonly baseUrl = 'https://www.themealdb.com/api/json/v1/1/search.php';

  constructor(private readonly http: HttpClient) {}

  search(searchType: string, searchQuery: string): Observable<ListElementRecipe[]> {
    const params = new HttpParams().set(searchType, searchQuery);

    return this.http
      .get<{ meals?: Array<{ strMeal: string; idMeal: string; strMealThumb: string }> }>(this.baseUrl, { params })
      .pipe(
        map((response) => {
          const meals = response.meals ?? [];

          return meals.map((meal) => {
            return new ListElementRecipe(
              meal.strMeal,
              `https://www.themealdb.com/meal/${meal.idMeal}`,
              meal.strMealThumb
            );
          });
        }),
        catchError(() => of([]))
      );
  }
}
