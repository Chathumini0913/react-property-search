import { filterProperties } from "../utils/search"; // make sure this path is correct
import data from "../data/properties.json";

describe("filterProperties function", () => {

  test("returns only properties of type Buy", () => {
    const result = filterProperties(data.properties, { type: "Buy" });
    expect(result.every(p => p.type === "Buy")).toBe(true);
  });

  test("returns only properties under max price", () => {
    const result = filterProperties(data.properties, { maxPrice: 500000 });
    expect(result.every(p => p.price <= 500000)).toBe(true);
  });

  test("returns only properties above min price", () => {
    const result = filterProperties(data.properties, { minPrice: 300000 });
    expect(result.every(p => p.price >= 300000)).toBe(true);
  });

  test("returns empty array if no property matches", () => {
    const result = filterProperties(data.properties, { type: "Moon" });
    expect(result).toEqual([]);
  });

  test("returns properties matching multiple criteria", () => {
    const result = filterProperties(data.properties, { type: "Rent", maxPrice: 2000 });
    expect(result.every(p => p.type === "Rent" && p.price <= 2000)).toBe(true);
  });

});
