function applyCoupon(amount, code) {

    const coupons = {
        "SAVE20": {
            discount: 20,
            minOrder: 500,
            active: true
        },

        "SAVE10": {
            discount: 10,
            minOrder: 200,
            active: true
        },

        "EXPIRED": {
            discount: 50,
            minOrder: 100,
            active: false
        }
    };

    // Check empty coupon
    if (!code || code.trim() === "") {
        return {
            success: false,
            message: "Coupon code is required"
        };
    }

    // Check coupon existence
    const coupon = coupons[code.trim().toUpperCase()];

    if (!coupon) {
        return {
            success: false,
            message: "Invalid coupon code"
        };
    }

    // Check coupon status
    if (!coupon.active) {
        return {
            success: false,
            message: "Coupon has expired"
        };
    }

    // Check minimum order amount
    if (amount < coupon.minOrder) {
        return {
            success: false,
            message: "Minimum order amount not reached"
        };
    }

    // Calculate discount
    const discountAmount = amount * coupon.discount / 100;

    return {
        success: true,
        discount: discountAmount,
        finalAmount: amount - discountAmount,
        message: `${coupon.discount}% discount applied`
    };
}

module.exports = applyCoupon;