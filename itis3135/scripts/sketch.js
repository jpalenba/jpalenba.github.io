function setup() {
  const canvas = createCanvas(800, 600, WEBGL);
  canvas.parent('canvas-container');

  angleMode(DEGREES);
  noFill();
  stroke(0, 200, 255);
  strokeWeight(3);

  describe(
    'An interactive 3D globe formed by rings: ' +
    'users can click-drag to orbit around a sphere of sky-blue toruses ' +
    'on a deep navy background.'
  );
}

function draw() {
  background(10, 10, 50);
  orbitControl();
  rotateY(frameCount * 0.2);

  for (let lat = -60; lat <= 60; lat += 30) {
    for (let lon = 0; lon < 360; lon += 30) {
      push();
      rotateZ(lat);
      rotateY(lon);
      translate(0, 0, 200);
      torus(30, 8);
      pop();
    }
  }
}
