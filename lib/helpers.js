/**
 * Format a number as Indian Rupees
 * @param {number} amount - The amount to format
 * @returns {string} The formatted amount
 */
export function formatCurrency(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
}

/**
 * Format a number with commas as per Indian numbering system
 * @param {number} number - The number to format
 * @returns {string} The formatted number
 */
export function formatNumber(number) {
  return new Intl.NumberFormat('en-IN').format(number);
}

export const serializercarData = (car, wishlisted = false) => {
  return {
    ...car,
    price: car.price ? parseFloat(car.price.toString()) : 0,
    createdAt: car.createdAt?.toISOString(),
    updatedAt: car.updatedAt?.toISOString(),
    wishlisted: wishlisted,
  };
}