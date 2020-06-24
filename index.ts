import { of, fromEvent } from 'rxjs'; 
import { mapTo, mergeScan } from 'rxjs/operators';

// Emit 1 every time we press a key
const key$ = fromEvent(document, 'keydown').pipe(mapTo(1));

// Count the number of pressed keys
key$.pipe(
  mergeScan((sum, one) => of(sum + one), 0)
).subscribe(x => console.log(x));


