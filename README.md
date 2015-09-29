# two-dee

## Intro

This is a work in progress.  I use this lib often in my side projects and add features as I require them.  If there is a feature that you would like to see implemented, please let me know!

I cannot guarantee that the methods available work in all cases.  If you find a case where a method does not work as it should, please let me know and I will fix it!

## Installation

I have not yet added the project to NPM.  At the moment, it can be installed using `npm i https://github.com/connorbode/two-dee.git`.

To include the library, use `var TwoDee = require('two-dee')`.

## Usage

#### Point

`var Point = TwoDee.Point`

- __constructor__

  `var p = new Point(x, y);`

- __closest__

  Finds the point in a collection that is closest to another given point.

  `var closest = p.closest(points)`

#### Line

`var Line = TwoDee.Line`

- __constructor__

  `var l = new Line(slope, yIntercept, xIntercept)`

  `xIntercept` should not be passed unless `slope` is `Infinity`

- __Line.fromSlopeAndPoint__

  `var l = Line.fromSlopeAndPoint(slope, point)`

- __Line.fromPoints__

  `var l = Line.fromPoints(p1, p2)`

- __pointFromY__

  `var p = l.pointFromY(y)`

  Returns the point on `l` that has the provided `y` value.

- __pointFromX__

  `var p = l.pointFromX(x)`

  Returns the point on `l` that has the provided `x` value.

- __intersectionWithLine__

  `var p = l1.intersectionWithLine(l2)`

  Returns the point at which `l1` and `l2` intersect

- __intersectionWithCircle__

  `var points = l.intersectionWith(c)`

  Returns the `points` at which line `l` intersects with circle `c`.  The resulting array may be empty (if the line does not intersect the circle), contain one `Point` (if the line is tangent to the circle) or contain two `Point`s (if the line runs through the circle).

- __intersectionWith__

  Shortcut method which will detect the type of object that we are intersecting with and run the appropriate `intersectionWithXXX` method .

#### Circle

`var Circle = TwoDee.Circle`

- __constructor__

  `var circle = new Circle(center, radius)`
