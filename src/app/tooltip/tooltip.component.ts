import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  template: `
      <a href="..." role="tooltip" aria-haspopup="true" class="tooltip tooltip-md tooltip-right">
          <ng-container *ngTemplateOutlet="trigger"></ng-container>
          <span class="tooltip-content" *ngIf="contentTmpl">
            <ng-container *ngTemplateOutlet="contentTmpl"></ng-container>
          </span>
          <span class="tooltip-content" *ngIf="!contentTmpl">
            {{contentText}}
          </span>
      </a>

  `,
})
export class TooltipComponent implements OnInit {
  val = true;

  @Input()
  trigger: TemplateRef<any>;

  @Input()
  contentTmpl: TemplateRef<any>;

  @Input()
  contentText: string;

  ngOnInit() {

  }


}
