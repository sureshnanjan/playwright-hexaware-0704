import { HomePageOperations } from "../heroku_operations/home_page_operations";
export class HomePage implements HomePageOperations{
    getTitle(): Promise<string> {
        throw new Error("Method not implemented.");
    }
    getSubTitle(): Promise<string> {
        throw new Error("Method not implemented.");
    }
    getAllExamples(): Promise<string[]> {
        throw new Error("Method not implemented.");
    }
    gotoExample(exName: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}