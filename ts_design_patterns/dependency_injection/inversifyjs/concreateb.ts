import { IDepB} from "./idepb";
import { injectable, inject } from 'inversify';

@injectable()
export class ConcreateB implements IDepB{
	doB(): void {
		console.log("Doing B");
	}
}