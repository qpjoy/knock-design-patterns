import {IDepC} from "./idepc";
import {IDepB} from "./idepb";
import {IDepA} from "./idepa";
import {TYPES} from "./types";
import { injectable, inject } from 'inversify';

@injectable()
export class ConcreateC implements IDepC{
	constructor(@inject(TYPES.IDepA)
		private _depA: IDepA,
		@inject(TYPES.IDepB)
		private _depB: IDepB) {

	}

	doC():void {
		this._depA.doA();
		this._depB.doB();
		console.log("Doing C");
	}
}