// import { RoleDirective } from './role-directive';
import { Directive, effect, inject, input, TemplateRef, ViewContainerRef } from '@angular/core';
import { UserService } from '../../services/user-service';

@Directive({
  selector: '[appRoleDirective]',
})
export class RoleDirective {
  private _userservser = inject(UserService);
  private templateRef = inject(TemplateRef);
  private viewContainer = inject(ViewContainerRef);
  appRoleDirective = input.required<string>();

  constructor() {
    effect(() => {
      const permissions = this._userservser.permisions();
      const requiredInput = this.appRoleDirective();
      this.viewContainer.clear();
      if (permissions.includes(requiredInput)) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      }
    });
  }
}
