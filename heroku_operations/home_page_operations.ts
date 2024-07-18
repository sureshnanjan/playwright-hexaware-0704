export interface HomePageOperations{
    getTitle(): Promise<string>
    getSubTitle(): Promise<string>
    getAllExamples(): Promise<string[]>
    gotoExample(exName:string): Promise<void>
}