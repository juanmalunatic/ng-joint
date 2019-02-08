import { Injectable, SimpleChanges } from '@angular/core';

import { DiaGraph } from '../../../dia/graph';
import { LinkShapeService } from '../../shapes';
import { UmlAggregation } from './uml-aggregation';
import { ShapesUmlService } from '../shapes-uml.service';
import { UmlAggregationComponent } from './uml-aggregation.component';

@Injectable({
  providedIn: 'root'
})
export class UmlAggregationService implements LinkShapeService {

  constructor(private service: ShapesUmlService) { }

  createLinkShape(graphInstance: DiaGraph, component: UmlAggregationComponent): UmlAggregation {
    const aggregationShape = new UmlAggregation(
      component.id,
      component.sourceId,
      component.targetId
    );
    graphInstance.addLink(aggregationShape);
    return aggregationShape;
  }

  onEvents(component: UmlAggregationComponent) {
    this.service.onLinkEvents(component);
  }

  setChanges(changes: SimpleChanges, component: UmlAggregationComponent) {
    this.service.setLinkChanges(changes, component);
  }

}
