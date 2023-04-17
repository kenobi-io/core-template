import { unary } from './unary';
import { dataTube } from '@fixture';
import { tube } from './tube';
import { and } from '../checking/operators/and';
import { not } from '../checking/operators/not';
import { or } from '../checking/operators/or';

type Param = {
    name: string;
    value: {
        first: string;
        second: number;
        has: boolean;
    };
};

type Model = {
    nameModel: string;
    valueModel: {
        first: string;
        second: number;
        has: boolean;
    };
};

const whichModelNameIsThe =
    (param: Param) =>
    (model: Model): boolean =>
        param.name != model.nameModel;

const whichModelValueIsNotThe =
    (param: Param) =>
    (model: Model): boolean =>
        model.valueModel.has && model.valueModel.first != param.value.first;

const thenDoAssignModelValueFirst = () =>
    unary<Model>((model) => {
        model.valueModel.first = '2';
    });

const thenDoAssignOverlayStartXRectWidth = () =>
    unary<Model>((model) => {
        model.valueModel.has = false;
    });

describe('Tests for tube', <T>() => {

    it('should invoke condition in tube', () => {
        const { param, model } = dataTube;
        tube(
            whichModelNameIsThe(param),
            thenDoAssignModelValueFirst(),
            whichModelValueIsNotThe(param),
            thenDoAssignOverlayStartXRectWidth(),
            unary<Model>((model) => expect(model.valueModel.first).toBe('2')),
            unary<Model>((model) => {expect(model.valueModel.has).toBe(false)}),
            thenDoAssignOverlayStartXRectWidth(),
            and(
                whichModelNameIsThe(param),
                whichModelNameIsThe(param)
            ),
            thenDoAssignModelValueFirst(),
            not(
                whichModelValueIsNotThe(param),
                whichModelValueIsNotThe(param)
            ),
            tube(
                thenDoAssignOverlayStartXRectWidth(),
                thenDoAssignOverlayStartXRectWidth(),
                unary<Model>((model) => expect(model.valueModel.first).toBe('2')),
                unary<Model>((model) => expect(model.valueModel.has).toBe(false)),
                thenDoAssignOverlayStartXRectWidth(),
                not(
                    whichModelValueIsNotThe(param),
                    whichModelValueIsNotThe(param)
                ),
                tube(
                    thenDoAssignOverlayStartXRectWidth(),
                    thenDoAssignOverlayStartXRectWidth(),
                    unary<Model>((model) => expect(model.valueModel.first).toBe('2')),
                    unary<Model>((model) => expect(model.valueModel.has).toBe(false))
                )
            ),
            or(
                whichModelValueIsNotThe(param),
                whichModelValueIsNotThe(param)
            ),
            tube(
                thenDoAssignOverlayStartXRectWidth(),
                thenDoAssignOverlayStartXRectWidth(),
                unary<Model>((model) => expect(model.valueModel.first).toBe('2')),
                unary<Model>((model) => expect(model.valueModel.has).toBe(false)),
                thenDoAssignOverlayStartXRectWidth(),
                or(
                    whichModelValueIsNotThe(param),
                    whichModelValueIsNotThe(param)
                ),
                tube(
                    thenDoAssignOverlayStartXRectWidth(),
                    thenDoAssignOverlayStartXRectWidth(),
                    unary<Model>((model) => expect(model.valueModel.first).toBe('2')),
                    unary<Model>((model) => expect(model.valueModel.has).toBe(false))
                )
            )
        )(model);

        expect(model.valueModel.first).toBe('2');
        expect(model.valueModel.has).toBe(false);
    });
});
