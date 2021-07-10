import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicsCardsComponent } from './graphics-cards.component';

describe('GraphicsCardsComponent', () => {
  let component: GraphicsCardsComponent;
  let fixture: ComponentFixture<GraphicsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicsCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
