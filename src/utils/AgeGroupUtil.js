export default class AgeGroupUtil {
    static map(level, oldestAge) {
        switch (level.toUpperCase()) {
            case 'STAGES':
                return oldestAge;
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
                return highestGroup(oldestAge, [
                    {
                        title: '9/U',
                        range: [0, 9]
                    },
                    {
                        title: '11/U',
                        range: [10, 11]
                    },
                    {
                        title: '14/U',
                        range: [12, 14]
                    },
                    {
                        title: '15+',
                        range: [15, 999]
                    }
                ]);
            case '7':
                return highestGroup(oldestAge, [
                    {
                        title: '11/U',
                        range: [10, 11]
                    },
                    {
                        title: '14/U',
                        range: [12, 14]
                    },
                    {
                        title: '15+',
                        range: [15, 999]
                    }
                ]);
            case '8':
                return highestGroup(oldestAge, [
                    {
                        title: 'JNR',
                        range: [1, 15]
                    },
                    {
                        title: 'SNR',
                        range: [16, 999]
                    }
                ]);
            case '9':
                return 'age 9-16';
            case '10':
                return 'age 11-16';
            case '11':
                return highestGroup(oldestAge, [
                    {
                        title: 'JNR',
                        range: [1, 19]
                    },
                    {
                        title: 'SNR',
                        range: [20, 999]
                    }
                ]);
            case '12':
                return 'age 12-18';
            case '13':
                return 'age 13-19';
            case '14':
                return 'SNR';
            default:
                return 'unknown';
        }

        function highestGroup(oldestAge, groups) {
            groups.forEach(group => {
                if (oldestAge >= group.range[0] && oldestAge <= group.range[1]) {
                    return group.title;
                }
            });
            return 'unknown';
        }
    }
}
