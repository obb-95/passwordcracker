const GeometryCalculator = require('./GeometryCalculator');

console.log("Volume of Cube:", GeometryCalculator.cubeVolume(5));
console.log("Surface Area of Cube:", GeometryCalculator.cubeSurfaceArea(5));

console.log("Volume of Cuboid:", GeometryCalculator.cuboidVolume(3, 4, 5));
console.log("Surface Area of Cuboid:", GeometryCalculator.cuboidSurfaceArea(3, 4, 5));

console.log("Volume of Sphere:", GeometryCalculator.sphereVolume(3));
console.log("Surface Area of Sphere:", GeometryCalculator.sphereSurfaceArea(3));

console.log("Volume of Cylinder:", GeometryCalculator.cylinderVolume(3, 5));
console.log("Surface Area of Cylinder:", GeometryCalculator.cylinderSurfaceArea(3, 5));

console.log("Volume of Cone:", GeometryCalculator.coneVolume(3, 5));
console.log("Surface Area of Cone:", GeometryCalculator.coneSurfaceArea(3, 5));

console.log("Volume of Pyramid:", GeometryCalculator.pyramidVolume(3, 4, 5));
console.log("Surface Area of Pyramid:", GeometryCalculator.pyramidSurfaceArea(3, 4, 5));

console.log("Volume of Ellipsoid:", GeometryCalculator.ellipsoidVolume(3, 4, 5));
console.log("Surface Area of Ellipsoid:", GeometryCalculator.ellipsoidSurfaceArea(3, 4, 5));