/**
 * Ng Joint implementation of Plugin Shapes joint.shapes.uml
 * based on: https://github.com/clientIO/joint/blob/master/plugins/shapes/joint.shapes.uml.js
 */

import { Input } from '@angular/core';

import { shapes, attributes } from 'jointjs';

import { DiaElement } from '../../dia/element';
import { DiaLink } from '../../dia/link';

import {
    NgJointElement,
    NgJointLink, 
    GenericElementShapeComponent,
    GenericLinkShapeComponent
} from '../shapes';

export abstract class UmlElementShape extends DiaElement {

}

export abstract class UmlLinkShape extends DiaLink {

}

export type UmlNameType = string | string[];

export abstract class GenericUmlElementShapeComponent extends GenericElementShapeComponent {
    @Input() name: UmlNameType;
    @Input() attributes?: string[];
    @Input() methods?: string[];
    @Input() attrs?: attributes.SVGRectAttributes;
}

export abstract class GenericUmlLinkShapeComponent extends GenericLinkShapeComponent {

}

export interface NgJointGenericUmlElement extends NgJointElement {
    name: UmlNameType;
    attributes?: string[];
    methods?: string[];
    attrs?: attributes.SVGRectAttributes;
}

export interface NgJointGenericUmlLink extends NgJointLink {

}
