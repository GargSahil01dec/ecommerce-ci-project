const applyCoupon = require("../src/coupon");

describe("Coupon Management Testing", () => {

    test("Valid coupon should apply discount", () => {

        const result = applyCoupon(1000, "SAVE20");

        expect(result.success).toBe(true);

        expect(result.discount).toBe(200);

        expect(result.finalAmount).toBe(800);

    });


    test("Invalid coupon should be rejected", () => {

        const result = applyCoupon(1000, "INVALID");

        expect(result.success).toBe(false);

    });


    test("Expired coupon should be rejected", () => {

        const result = applyCoupon(1000, "EXPIRED");

        expect(result.success).toBe(false);

        expect(result.message).toBe("Coupon has expired");

    });


    test("Minimum order condition should work", () => {

        const result = applyCoupon(100, "SAVE20");

        expect(result.success).toBe(false);

    });


    test("Empty coupon should be rejected", () => {

        const result = applyCoupon(1000, "");

        expect(result.success).toBe(false);

    });

});