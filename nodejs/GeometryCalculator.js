const GeometryCalculator = {
  // Volume of Cube
  cubeVolume: function (side) {
    return Math.pow(side, 3);
  },

  // Surface Area of Cube
  cubeSurfaceArea: function (side) {
    return 6 * Math.pow(side, 2);
  },

  // Volume of Cuboid
  cuboidVolume: function (length, width, height) {
    return length * width * height;
  },

  // Surface Area of Cuboid
  cuboidSurfaceArea: function (length, width, height) {
    return 2 * (length * width + length * height + width * height);
  },

  // Volume of Sphere
  sphereVolume: function (radius) {
    return (4 / 3) * Math.PI * Math.pow(radius, 3);
  },

  // Surface Area of Sphere
  sphereSurfaceArea: function (radius) {
    return 4 * Math.PI * Math.pow(radius, 2);
  },

  // Surface Area of Cylinder
  cylinderSurfaceArea: function (radius, height) {
    return 2 * Math.PI * radius * (radius + height);
  },

  // Volume of Cylinder
  cylinderVolume: function (radius, height) {
    return Math.PI * Math.pow(radius, 2) * height;
  },

  // Volume of Cone
  coneVolume: function (radius, height) {
    return (1 / 3) * Math.PI * Math.pow(radius, 2) * height;
  },

  // Surface Area of Cone
  coneSurfaceArea: function (radius, slantHeight) {
    const baseArea = Math.PI * Math.pow(radius, 2);
    const lateralArea = Math.PI * radius * slantHeight;
    return baseArea + lateralArea;
  },

  // Volume of Pyramid
  pyramidVolume: function (baseLength, baseWidth, height) {
    return (1 / 3) * baseLength * baseWidth * height;
  },

  // Surface Area of Pyramid
  pyramidSurfaceArea: function (baseLength, baseWidth, height) {
    const lateralArea = (baseLength * Math.sqrt(Math.pow(height, 2) + Math.pow((baseWidth / 2), 2))) +
                        (baseWidth * Math.sqrt(Math.pow(height, 2) + Math.pow((baseLength / 2), 2)));
    const baseArea = baseLength * baseWidth;
    return lateralArea + baseArea;
  },

  // Volume of Ellipsoid
  ellipsoidVolume: function (radius1, radius2, radius3) {
    return (4 / 3) * Math.PI * radius1 * radius2 * radius3;
  },

  // Surface Area of Ellipsoid
  ellipsoidSurfaceArea: function (radius1, radius2, radius3) {
    const p = Math.PI;
    const a = radius1;
    const b = radius2;
    const c = radius3;
    return 4 * p * ((Math.pow((Math.pow(a * b, 1.6) + Math.pow(a * c, 1.6) + Math.pow(b * c, 1.6)) / 3, (1 / 1.6))));
  }  
};














module.exports = GeometryCalculator;