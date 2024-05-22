import laotele from "./index";

describe("Add Null | Emtype String | space input", () => {
  test("input null paramiter", () => {
    expect(laotele(null)).toBe(undefined);
  });
  test("input empty paramiter", () => {
    expect(laotele()).toBe(undefined);
  });
  test("input empty string paramiter", () => {
    expect(laotele('')).toBe(undefined);
  });
  test("input spacing paramiter", () => {
    expect(laotele()).toBe(undefined);
  });
});
describe("Telecome Laos Number 2,5,7,8,9", () => {
  test("Mobile number with 020 accept 8 digit only", () => {
    expect(laotele("02055057246")).toBe("02055057246");
  });
  test("Mobile number with 20 accept 8 digit only", () => {
    expect(laotele("2055057246")).toBe("2055057246");
  });
  test("Mobile number accept 8 digit only", () => {
    expect(laotele("55057246")).toBe("55057246");
  });
  test("Phone number with 030 accept 7 digit", () => {
    expect(laotele("0305555555")).toBe("0305555555");
  });
  test("Phone number with 30 accept 7 digit", () => {
    expect(laotele("305555555")).toBe("305555555");
  });
  test("Phone number accept 7 digit", () => {
    expect(laotele("5555555")).toBe("5555555");
  });
  test("Telecome format number 8 digit", () => {
    expect(laotele("55057246")).toBe("55057246");
  });
  test("Telecome format number 8 digit", () => {
    expect(laotele("55057246")).toBe("55057246");
  });
});

describe("Get Country Code", () => {
  test('Mobile number with 020 in (2,5,7,8,9) and 8 digit type 1', () => {
    expect(laotele("02055555555").countryCode()).toBe('8562055555555');
  })
  test('Mobile number in (2,5,7,8,9) and 8 digit type 2', () => {
    expect(laotele("55555555").countryCode()).toBe('8562055555555');
  })
  test('Mobile number with 030 in (2,5,7,8,9) and 7 digit type 1', () => {
    expect(laotele("0305555555").countryCode()).toBe('856305555555');
  })
  test('Mobile number in (2,5,7,8,9) and 7 digit type 2', () => {
    expect(laotele("5555555").countryCode()).toBe('856305555555');
  })
  test('Mobile Transform with Internal Phone code', () => {
    expect(laotele("02055555555").countryCode({ internal: true })).toBe('2055555555');
  })
  test('Mobile Transform with Internal Phone code zero start', () => {
    expect(laotele("02055555555").countryCode({ internal: true, zerostart: true })).toBe('02055555555');
  })
  test('Mobile Transform with Internal Phone code', () => {
    expect(laotele("0305555555").countryCode({ internal: true })).toBe('305555555');
  })
  test('Mobile Transform with Internal Phone code zero start', () => {
    expect(laotele("0305555555").countryCode({ internal: true, zerostart: true })).toBe('0305555555');
  })
});
// Test Input Error
describe("Input not start with 2,5,7,8,9", () => {
  test('Mobile number with 020 not in (2,5,7,8,9) and 8 digit', () => {
    expect(() => laotele("02065057246")).toThrowError(`02065057246 is not lao telephone`);
  })
});