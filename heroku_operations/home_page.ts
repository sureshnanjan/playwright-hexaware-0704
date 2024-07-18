import { Page } from "@playwright/test" 
/**
 * This class represents the Heroku App home page.
 * You can accesst Title, Subtitle , Navigate to specifc examples using this class.
 */
export class HomePage{
    /**
     * This Fetches the Main Title of the Home Page
     * @returns 
     */
    getTitle(): string {
        const page:Page = null;
        return page.title.toString()
        //return "The Internet"
    }

    getSubTitle(): string {
        return "Examples"
    }

    /**
     * This methods provides all the available examples
     * @param param1 This is the purpose of Paramatere1
     * @param param2 This has got the param2 behaviour
     * @returns 
     */
    getAllAvailableExamples(param1:number, param2:{1,2,3}): string[]{
        return ["","",""]

    }
}