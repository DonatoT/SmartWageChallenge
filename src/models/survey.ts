export default class Survey {
    // 1. property type of on survey.
    id: number;
    surveyName: string;
    createdBy: string;
    response: string;
    types: Array<string>;
    launchDate: Date;
    closedDate: Date;
     
    // 2. we define default value.
    constructor(
     id: number,
     surveyName: string = 'This is the survey  name',
     createdBy: string = 'Name Surname',
     response: string = '1358/23 975',
     types: Array<string> = ['Normal'],
     launchDate: Date = new Date(),
     closedDate: Date = new Date()
    ) {
     // 3. we initialize property.
     this.id = id;
     this.surveyName = surveyName;
     this.createdBy = createdBy;
     this.response = response;
     this.launchDate = launchDate;
     this.closedDate = closedDate;
     this.types = types;
    }
   }