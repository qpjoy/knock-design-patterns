import container from './inversify.config';
import { TYPES } from "./types";
import {IDepC} from "./idepc";
import { injectable, inject } from 'inversify';

let c = container.get<IDepC>(TYPES.IDepC);
c.doC();