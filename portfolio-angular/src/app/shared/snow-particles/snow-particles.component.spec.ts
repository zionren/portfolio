import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnowParticlesComponent } from './snow-particles.component';

describe('SnowParticlesComponent', () => {
  let component: SnowParticlesComponent;
  let fixture: ComponentFixture<SnowParticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnowParticlesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnowParticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
