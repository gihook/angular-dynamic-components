import { State, Action, StateContext } from '@ngxs/store';
import { Type } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import { UpdateComponentsConfig } from './layout.actions';
import { SecondComponent } from '../components/second/second.component';

export class LayoutStateModel {
    pageComponentsConfig: { type: Type<any>, input: any, width: number }[];
}

@State<LayoutStateModel>({
    name: 'layout',
    defaults: {
        pageComponentsConfig: [
            { type: DialogComponent, input: 1, width: 20 },
            { type: DialogComponent, input: 10, width: 30 },
            { type: DialogComponent, input: 100, width: 50 }
        ]
    }
})
export class LayoutState {
    @Action(UpdateComponentsConfig)
    updateComponentsConfig({ getState, patchState }: StateContext<LayoutStateModel>) {
        const config = getState().pageComponentsConfig;
        const newArray = config.filter(x => x.input !== 10);
        newArray[1].width = 25;

        patchState({ pageComponentsConfig: [...newArray, { width: 55, type: SecondComponent, input: null }] });
    }
}
