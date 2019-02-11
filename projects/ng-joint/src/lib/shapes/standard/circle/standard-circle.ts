/*
 * Generated by @dgwnu/ng-joint-schematics
 */
import { dia, shapes } from 'jointjs';
import { StandardElementShape } from '../shapes-standard';

/**
 * Ng Joint Standard Circle Class
 */
export class StandardCircle extends StandardElementShape {

    constructor(id: string, options?: dia.Element.GenericAttributes<shapes.standard.CircleSelectors>) {
        super({ id: id, options });
        this._jointjsObject = new shapes.standard.Circle(options);
    }

}