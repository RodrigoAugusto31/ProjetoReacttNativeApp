import { validateEmail } from "."

it('should validate correctly an email', () => {
    const isEmailValid = validateEmail('teste@xample.com');
    expect(isEmailValid).toBe(true);

    const isEmailValid2 = validateEmail('teste@example');
    expect(isEmailValid2).toBe(false);
})