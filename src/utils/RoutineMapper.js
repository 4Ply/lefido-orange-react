export default class RoutineMapper {
    static map(level) {
        switch (level.toUpperCase()) {
            case 'STAGES':
                return 'Stages';
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
                return 'COMB';
            default:
                return 'BAL/DYN';
        }
    }
}
