# ClarityTooltipStructuralDirective
Clarity tootip based on a structural directives.

```
<ng-template #grid>
  <clr-datagrid>
    <clr-dg-column>User ID</clr-dg-column>
    <clr-dg-column>Name</clr-dg-column>

    <clr-dg-row *ngFor="let user of users">
      <clr-dg-cell>{{user.id}}</clr-dg-cell>
      <clr-dg-cell>{{user.name}}</clr-dg-cell>
    </clr-dg-row>

    <clr-dg-footer>{{users.length}} users</clr-dg-footer>
  </clr-datagrid>
</ng-template>


<clr-icon shape="list" *mytooltip="grid" size="48"></clr-icon>

```

OR
```

<clr-icon shape="info-circle"
  *mytooltipText="'Lorem ipsum dolor sit amet, consectetur adipisicing elit'" size="48"></clr-icon>

```

## DEMO
https://nagarsuresh.github.io/clarity-tooltip-structural-directive/