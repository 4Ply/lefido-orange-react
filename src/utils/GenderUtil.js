export default class GenderUtil {
    static getGenderLetter(idNumber) {
        if (!idNumber || idNumber === '') {
            return 'F';
        }

        if (idNumber.substring(6, 10) < 5000) {
            return 'F';
        } else {
            return 'M';
        }
    }

    static getGenderGroup(_genders) {
        const genders = _genders.sort((a, b) => a > b).join('');

        console.log(genders);
        switch (genders) {
            case 'FM':
                return 'MxP';
            case 'FF':
                return 'W2';
            case 'FFF':
                return 'W3';
            case 'MM':
                return 'M2';
            case 'MMM':
                return 'M3';
            case 'MMMM':
                return 'M4';
            default:
                return '?';
        }
    }
}
