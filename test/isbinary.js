import test from 'tape'
import error from '../fn/error'
import isbinary from '../fn/isbinary'

test('isbinary', (t) => {
  t.plan(5)
  t.equal( isbinary( '0000000' ), true)
  t.equal( isbinary( '0101010101' ), true)
  t.equal( isbinary( '01010101011' ), false, 'Must be less than 10 characters')
  t.equal( isbinary( '0200000' ), false)
  t.equal( isbinary( 'foo' ), false)
})
