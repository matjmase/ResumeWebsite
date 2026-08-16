import { Service } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Service()
export class VerticalStepperRelayService {
  private stepperState = new BehaviorSubject<string>('home');

  public GetStepperState(): Observable<string> {
    return this.stepperState.asObservable();
  }

  public SetStepperState(newVal: string): void {
    this.stepperState.next(newVal);
  }
}
