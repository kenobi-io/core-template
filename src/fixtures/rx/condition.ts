export const condition = {
    param: {
        originPoint: { x: 1, y: 1 },
        overlayRect: {
            bottom: 1,
            height: 1,
            left: 1,
            right: 1,
            top: 1,
            width: 1,
        },
        position: {
            offsetX: 1,
            offsetY: 1,
            originX: 'start',
            originY: 'top',
            overlayX: 'start',
            overlayY: 'top',
            panelClass: 'panel-class',
            weight: 1,
        },
    },
    strategy: {
        fallback: {
            originPoint: { x: 1, y: 1 },
            overlayFit: {
                fitsInViewportHorizontally: false,
                fitsInViewportVertically: false,
                isCompletelyWithinViewport: false,
                visibleArea: 1,
            },
            overlayPoint: { x: 1, y: 1 },
            overlayRect: {},
            position: {},
        },
    },
};
