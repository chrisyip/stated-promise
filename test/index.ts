import test from 'ava';

import { StatedPromise } from '../src/';

test('should turn Promise into StatedPromise', async (t): Promise<void> => {
  const p1 = Promise.resolve(1);
  const sp1 = new StatedPromise(p1);
  t.true(sp1.isPending());
  t.false(sp1.isFulfilled());
  t.false(sp1.isRejected());

  t.not(sp1.getPromise(), p1);
  t.is(await p1, 1);

  t.true(sp1.isFulfilled());
  t.false(sp1.isPending());
  t.false(sp1.isRejected());

  const err = new Error('test');
  const p2 = Promise.reject(err);
  const sp2 = new StatedPromise(p2);
  t.true(sp2.isPending());
  t.false(sp2.isFulfilled());
  t.false(sp2.isRejected());

  await t.throwsAsync(sp2.getPromise(), {
    instanceOf: Error,
    message: err.message,
  });

  t.true(sp2.isRejected());
  t.false(sp2.isPending());
  t.false(sp2.isFulfilled());
});
