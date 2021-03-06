import { from } from 'rxjs';
import { reduce, take } from 'rxjs/operators';
import { fromEndsWith } from '@tinynodes/rxjs-string';

describe('fromEndsWith', () => {
  it('should return a string if a string ends with a character', (done) => {
    from(['test?', 'foo', 'bar?'])
      .pipe(
        fromEndsWith('?'),
        reduce((acc, val) => {
          acc.push(val);
          return acc;
        }, []),
        take(1),
      )
      .subscribe({
        next: (value) => expect(value).toStrictEqual(['test?', 'bar?']),
        complete: () => done(),
      });
  });
});
