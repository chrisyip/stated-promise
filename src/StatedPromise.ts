enum State {
  Pending,
  Fulfilled,
  Rejected,
}

/**
 * StatedPromise provides a couple of methods for querying Promise state.
 */
class StatedPromise<T> {
  /**
   * Retrieves the Promise
   * @returns The Promise
   */
  getPromise: () => PromiseLike<T>;

  /**
   * Retrieves a value representing whether the Promise is PENDING.
   * @returns True when the Promise is PENDING
   */
  isPending: () => boolean;

  /**
   * Retrieves a value representing whether the Promise is FULFILLED.
   * @returns True when the Promise is FULFILLED
   */
  isFulfilled: () => boolean;

  /**
   * Retrieves a value representing whether the Promise is REJECTED.
   * @returns True when the Promise is REJECTED
   */
  isRejected: () => boolean;

  constructor(promise: PromiseLike<T>) {
    let state: State = State.Pending;

    const p = promise.then(
      (value) => {
        state = State.Fulfilled;
        return value;
      },
      (reason) => {
        state = State.Rejected;

        // Expose unhandledRejection
        throw reason;
      }
    );

    this.getPromise = function getPromise() {
      return p;
    };

    this.isPending = function isPending() {
      return state === State.Pending;
    };

    this.isFulfilled = function isFulfilled() {
      return state === State.Fulfilled;
    };

    this.isRejected = function isRejected() {
      return state === State.Rejected;
    };
  }
}

export { StatedPromise };
