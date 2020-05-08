import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable, of, Subject } from 'rxjs';
import { switchMap, takeUntil, tap } from 'rxjs/operators';
import { isFinite, isInteger, isNaN, isSafeInteger } from '@tinynodes/rxjs-number';

@Component({
  selector: 'tinynodes-number-demo',
  templateUrl: './number-demo.component.html',
})
export class NumberDemoComponent implements AfterViewInit, OnDestroy {
  @ViewChild('output') private readonly output: ElementRef;

  private $destroy = new Subject();

  constructor(private readonly fb: FormBuilder) {}

  public inputForm = this.fb.group({
    operator: ['isInteger'],
    numberInput: [0],
  });

  ngAfterViewInit(): void {
    this.inputForm.valueChanges
      .pipe(
        takeUntil(this.$destroy),
        switchMap(({ operator, numberInput }) => this[operator](of(numberInput))),
        tap((result) => (this.output.nativeElement.textContent = result)),
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.$destroy.next();
    this.$destroy.complete();
  }

  public setToText() {
    this.inputForm.patchValue({ numberInput: 'foobar' });
  }

  public setToNaN() {
    this.inputForm.patchValue({ numberInput: NaN });
  }

  public setToInfinity() {
    this.inputForm.patchValue({ numberInput: Infinity });
  }

  public isInteger(source: Observable<any>) {
    return source.pipe(isInteger());
  }

  public isFinite(source: Observable<any>) {
    return source.pipe(isFinite());
  }

  public isNaN(source: Observable<any>) {
    return source.pipe(isNaN());
  }

  public isSafeInteger(source: Observable<any>) {
    return source.pipe(isSafeInteger());
  }
}
