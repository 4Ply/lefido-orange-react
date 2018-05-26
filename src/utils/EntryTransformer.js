class EntryTransformer {
    static populateEntryWithGymnastData(_entry, _gymnasts) {
        let entry = _entry;
        const gymnasts = (_gymnasts || []);
        const gymnast = (gymnasts.find((gymnast) => gymnast.id === entry.id) || {});

        entry.firstName = gymnast.firstName;
        entry.surname = gymnast.surname;
        entry.identificationNumber = gymnast.identificationNumber;
        entry.dateOfBirth = gymnast.dateOfBirth;

        return entry;
    }
}

export default EntryTransformer;
