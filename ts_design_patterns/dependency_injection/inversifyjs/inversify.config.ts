import 'reflect-metadata';
import { Container } from 'inversify';
import { IDepA } from "./idepa";
import { IDepB } from "./idepb";
import { IDepC } from "./idepc";
import { ConcreateA } from "./concreatea";
import { ConcreateB } from "./concreateb";
import { ConcreateC } from "./concreatec";
import { TYPES } from "./types";

let container = new Container({
	// Request Singleton Transient
	defaultScope: "Singleton"
});
// IDepA will be singleton
container.bind<IDepA>(TYPES.IDepA).to(ConcreateA).inSingletonScope();

// IDepB will be transient. We will get a new instance every time we request one
container.bind<IDepB>(TYPES.IDepB).to(ConcreateB).inTransientScope();

// IDepC will have request scope. It will return the same instance until we call container.unbind
container.bind<IDepC>(TYPES.IDepC).to(ConcreateC).inRequestScope();

export default container;