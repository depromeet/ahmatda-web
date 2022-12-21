import { checkEmpty, checkNull, checkNumNull, convertToNumber, emptyAThenB, isIn, isProd, objectKeys } from './utils';

describe('checkNull', () => {
  context('value가 null일 경우', () => {
    it('빈 문자열을 반환해야만 한다', () => {
      const result = checkNull(null);

      expect(result).toBe('');
    });
  });

  context('value가 null이 아닌 경우', () => {
    it('입력된 값이 반환되어야만 한다', () => {
      const result = checkNull('nana');

      expect(result).toBe('nana');
    });
  });
});

describe('checkNumNull', () => {
  context('value가 null인 경우', () => {
    it('0을 반환해야 한다', () => {
      const result = checkNumNull(0);

      expect(result).toBe(0);
    });
  });

  context('value가 null이 아닌 경우', () => {
    it('입력된 값이 반환되어야 한다', () => {
      const result = checkNumNull(100);

      expect(result).toBe(100);
    });
  });
});

describe('emptyAThenB', () => {
  const b = 'B';

  context('null 또는 undefined인 경우', () => {
    it('첫 번째 인자를 반환야만 한다', () => {
      const result = emptyAThenB(b, null);

      expect(result).toBe(b);
    });
  });

  context('값이 존재하는 경우', () => {
    const a = 'test';

    it('두 번째 인자를 반환야만 한다', () => {
      const result = emptyAThenB(b, a);

      expect(result).toBe(a);
    });
  });
});

describe('convertToNumber', () => {
  context('null 또는 undefined인 경우', () => {
    it('0을 반환해야만 한다', () => {
      const result = convertToNumber();

      expect(result).toBe(0);
    });
  });

  context('숫자가 아닌 문자열인 경우', () => {
    it('0을 반환해야만 한다', () => {
      const result = convertToNumber('test');

      expect(result).toBe(0);
    });
  });

  context('숫자인 문자열인 경우', () => {
    it('숫자로 변환된 형태를 반환해야만 한다', () => {
      const result = convertToNumber('100');

      expect(result).toBe(100);
    });
  });
});

describe('checkEmpty', () => {
  context('value가 undefined이거나 빈 배열인 경우', () => {
    it('빈 배열을 반환해야만 한다', () => {
      const result = checkEmpty();

      expect(result).toEqual([]);
    });
  });

  context('value가 undefined이거나 빈 배열이 아닌 경우', () => {
    const mockArray = ['test', 'test2'];

    it('입력된 값이 반환되어야 한다', () => {
      const result = checkEmpty(mockArray);

      expect(result).toEqual(mockArray);
    });
  });
});

describe('isProd', () => {
  context('production 환경일 경우', () => {
    it('true를 반환해야만 한다', () => {
      const result = isProd('production');

      expect(result).toBeTruthy();
    });
  });

  context('production 환경이 아닌 경우', () => {
    it('false를 반환해야만 한다', () => {
      const result = isProd('development');

      expect(result).toBeFalsy();
    });
  });
});

describe('isIn', () => {
  context('포함되어 있는 경우', () => {
    it('true를 반환해야만 한다', () => {
      const result = isIn([1, 2, 3], 1);

      expect(result).toBeTruthy();
    });
  });

  context('포함되지 않은 경우', () => {
    it('false를 반환해야만 한다', () => {
      const result = isIn(['a', 'b', 'c'], 'z');

      expect(result).toBeFalsy();
    });
  });
});

describe('objectKeys', () => {
  it('Object의 key들을 반환해야 한다', () => {
    const obj = { foo: 'foo', bar: 'bar' };
    const result = objectKeys(obj);

    expect(result).toContain('foo');
    expect(result).toContain('bar');
  });
});
