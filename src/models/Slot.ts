﻿/// <reference path="roundrectangle.ts" />

module MakerJs.models {

    export class Slot implements IModel {

        public paths: IPathMap = {};
        public origin: IPoint;

        constructor(origin: IPoint, endPoint: IPoint, radius: number) {
            var a = angle.ofPointInDegrees(origin, endPoint);
            var len = measure.pointDistance(origin, endPoint);

            this.paths['Top'] = new paths.Line([0, radius], [len, radius]);
            this.paths['Bottom'] = new paths.Line([0, -radius], [len, -radius]);
            this.paths['StartCap'] = new paths.Arc([0, 0], radius, 90, 270);
            this.paths['EndCap'] = new paths.Arc([len, 0], radius, 270, 90);

            model.rotate(this, a, [0, 0]);

            this.origin = origin;
        }
    }

    (<IKit>Slot).metaParameters = [
        {
            title: "origin", type: "select", value: [
                [0, 0],
                [10, 0],
                [10, 10]
            ]
        },
        {
            title: "end", type: "select", value: [
                [30, 0],
                [0, 30],
                [10, 30]
            ]
        },
        { title: "radius", type: "range", min: 1, max: 50, value: 3 }
    ];
}