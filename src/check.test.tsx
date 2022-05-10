
import Contact, { check } from "./Contact";

test('should page loaded or not', () => {
    expect(Contact(6.6)).toBe(false)
}
);