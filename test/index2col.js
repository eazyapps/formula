import index2col from '../fn/index2col';
import error from '../fn/error';
import test from 'tape';

test('index2col', function(t) {
  t.plan(3)
  t.equal( index2col(0), 0, 'Should still be 0');
  t.equal( index2col(1), 1, 'Should be 1');
  t.equal( index2col(16385), 1, 'Should still be 1');
});
