import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-split-container',
    templateUrl: './split-container.component.html',
    styleUrls: ['./split-container.component.scss']
})
export class SplitContainerComponent {
    @Input() containers;
}

