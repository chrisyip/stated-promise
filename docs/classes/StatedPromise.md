[stated-promise](../README.md) / [Exports](../modules.md) / StatedPromise

# Class: StatedPromise<T\>

StatedPromise provides a couple of methods for querying Promise state.

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](StatedPromise.md#constructor)

### Properties

- [getPromise](StatedPromise.md#getpromise)
- [isFulfilled](StatedPromise.md#isfulfilled)
- [isPending](StatedPromise.md#ispending)
- [isRejected](StatedPromise.md#isrejected)

## Constructors

### constructor

• **new StatedPromise**<`T`\>(`promise`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `promise` | `PromiseLike`<`T`\> |

#### Defined in

StatedPromise.ts:35

## Properties

### getPromise

• **getPromise**: () => `PromiseLike`<`T`\>

#### Type declaration

▸ (): `PromiseLike`<`T`\>

Retrieves the Promise

##### Returns

`PromiseLike`<`T`\>

The Promise

#### Defined in

StatedPromise.ts:15

___

### isFulfilled

• **isFulfilled**: () => `boolean`

#### Type declaration

▸ (): `boolean`

Retrieves a value representing whether the Promise is FULFILLED.

##### Returns

`boolean`

True when the Promise is FULFILLED

#### Defined in

StatedPromise.ts:27

___

### isPending

• **isPending**: () => `boolean`

#### Type declaration

▸ (): `boolean`

Retrieves a value representing whether the Promise is PENDING.

##### Returns

`boolean`

True when the Promise is PENDING

#### Defined in

StatedPromise.ts:21

___

### isRejected

• **isRejected**: () => `boolean`

#### Type declaration

▸ (): `boolean`

Retrieves a value representing whether the Promise is REJECTED.

##### Returns

`boolean`

True when the Promise is REJECTED

#### Defined in

StatedPromise.ts:33
