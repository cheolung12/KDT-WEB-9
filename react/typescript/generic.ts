namespace Generic {
  // 함수에 모든 값이 들어 올 수 있다. => 제네릭 타입 사용
  function getValue(val: string | number | object) {
    return val;
  }

  getValue('hi');

  function getValueGeneric<T>(value: T): T {
    return value;
  }
  console.log(getValueGeneric<number>(123));
  console.log(getValueGeneric<string>('스트링'));

  function getArrayGeneric<T>(arr: T[]): number {
    return arr.length;
  }

  console.log(getArrayGeneric<String>(['1', '2', '3']));

  function printFunc<T>(x: T, y: T): void {
    console.log(x, y);
  }
  printFunc<string>('hi', 'hello');
}


const arrElement = <T>(arr: T[], idx: number): T | boolean => 
  arr.length <= idx  ? false : arr[idx];

console.log(arrElement<string>(["a", "b", "c"], 3));
