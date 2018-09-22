import {
  Directive, Input, ElementRef, TemplateRef,
  ViewContainerRef, HostBinding, ComponentFactoryResolver, ComponentRef
} from '@angular/core';
import { TooltipComponent } from './tooltip/tooltip.component';

@Directive({
  selector: '[mytooltip],[mytooltipText]'
})
export class MyTooltipDirective {

  constructor(
    private element: ElementRef,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) {
  }


  @Input()
  set mytooltip(val: TemplateRef<any>) {
    this.createTooltipComponent(val);
  }

  @Input()
  set mytooltipText(text: string) {
    this.createTooltipComponent(text);
  }


  private createTooltipComponent(contents: string | TemplateRef<any>) {
    const factory = this.cfr.resolveComponentFactory(TooltipComponent);
    const compRef: ComponentRef<TooltipComponent> = this.viewContainer.createComponent(factory, null);
    compRef.instance.trigger = this.templateRef;
    if (contents instanceof TemplateRef) {
      compRef.instance.contentTmpl = contents;
    } else {
      compRef.instance.contentText = contents;
    }


  }



}