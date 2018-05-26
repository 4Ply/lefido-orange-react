export default class DateUtil {
    static calculateAgeAtTheEndOfThisYear(dateOfBirth) {
        let ageDifMs = new Date(new Date().getFullYear(), 11, 31) - new Date(dateOfBirth).getTime();
        let ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}
