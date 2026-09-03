/**
 * 🎯 Checks if a given value is a valid URL
 * @param {any} value ➡️ The value to check
 * @returns {boolean} 📤 `true` if the value is a valid URL
 */
const fn = (value: any) => {
    if (typeof value !== 'string') return false;
    if (value.match(/^(https?:\/\/|www\.)/)) {
        return true;
    }
    return false;
};

export default fn;
