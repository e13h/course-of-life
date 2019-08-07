export class WorkExperience {
    constructor(
        public jobTitle: string = '',
        public startDate: Date = new Date(),
        public endDate: Date = new Date(),
        public description: string = '') { }
}
