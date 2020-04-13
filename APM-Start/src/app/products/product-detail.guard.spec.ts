import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailGuard } from './product-detail.guard';

describe('ProductDetailGuard', () => {
  let guard: ProductDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([
        {
          path: 'products/:id',
          canActivate: [ProductDetailGuard],
          component: ProductDetailComponent
        }
      ])]
    });
    guard = TestBed.inject(ProductDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
