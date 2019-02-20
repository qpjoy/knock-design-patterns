import { IDepA} from "./idepa";
import { injectable, inject } from 'inversify';

@injectable()
export class ConcreateA implements IDepA{
	doA(): void {
		console.log("Doing A");
	}
}