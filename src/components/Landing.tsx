import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

import { OrbitControls } from 'three-stdlib';
import { ImprovedNoise } from 'three-stdlib';

interface LandingProps {
  children?: React.ReactNode;
}

const Landing: React.FC<LandingProps> = ({ children }) => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (!mountRef.current) return;
    if (initialized.current) return;
    initialized.current = true;

    const amt = 20;
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = amt * 1.5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0); 
    mountRef.current.appendChild(renderer.domElement);

    const size = 0.5;
    const geometry = new THREE.BoxGeometry(size, size, size);
    const material = new THREE.MeshBasicMaterial();
    const count = amt ** 3;
    const mesh = new THREE.InstancedMesh(geometry, material, count);
    scene.add(mesh);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    const noise = new ImprovedNoise();
    const nAmp = 0.1;
    const nScale = 2;
    let nz: number;
    const offset = (amt - 1) * 0.5;
    const dummy = new THREE.Object3D();
    const clor = new THREE.Color(0x000000);

    const metacube = new THREE.Group();
    metacube.add(mesh);
    scene.add(metacube);

    metacube.userData = {
      update: (t: number) => {
        let f = 0;
        for (let i = 0; i < amt; i++) {
          for (let j = 0; j < amt; j++) {
            for (let k = 0; k < amt; k++) {
              nz = noise.noise(t + i * nAmp, t + j * nAmp, t + k * nAmp) * nScale;
              clor.setHSL(0.95 + nz * 0.1, 1.0, 0.2 + nz * 0.1);
              mesh.setColorAt(f, clor);
              dummy.position.set(offset - i, offset - j, offset - k);
              dummy.scale.setScalar(nz);
              dummy.rotation.y = Math.sin(i * 0.25 + t) + Math.sin(j * 0.25 + t) + Math.sin(k * 0.25 + t);
              dummy.rotation.z = dummy.rotation.y * 2;
              dummy.updateMatrix();
              mesh.setMatrixAt(f, dummy.matrix);
              f++;
            }
          }
        }
        mesh.instanceMatrix.needsUpdate = true;
        if (mesh.instanceColor) {
          mesh.instanceColor.needsUpdate = true;
        }
      }
    };

    const animate = (timeVal = 0) => {
      const t = timeVal * 0.0001;
      metacube.rotation.y += 0.0005;
      metacube.rotation.x += 0.0005;
      // metacube.position.y += 0.005;
      // setTimeout(() => {
      //   metacube.position.y += -0.01;
      // }, 5000);
      metacube.userData.update(t);
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: 'full', height: 'full' }}>
      <div
        ref={mountRef}
        style={{ position: 'absolute', top: 0, left: -300, width: '100%', height: '100%' }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  );
};

export default Landing;
