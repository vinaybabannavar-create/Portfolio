"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function HeroArtifact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSupported, setIsSupported] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIsLoaded(true);
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    try {
      const testCanvas = document.createElement("canvas");
      const gl = testCanvas.getContext("webgl") || testCanvas.getContext("experimental-webgl");
      if (!gl) {
        setIsSupported(false);
        setIsLoaded(true);
        return;
      }
    } catch {
      setIsSupported(false);
      setIsLoaded(true);
      return;
    }

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 600;

    // Scene & Fog
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0b0c0a, 0.05);

    // Camera with cinematic perspective
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.8);

    // Renderer with high dynamic range & antialiasing
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Central Monolithic Crystal - Obsidian Glass with Transmission & Clearcoat
    const coreGeo = new THREE.IcosahedronGeometry(1.65, 0);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0x161914,
      roughness: 0.12,
      metalness: 0.88,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      transmission: 0.55,
      thickness: 1.8,
      ior: 1.52,
      transparent: true,
      opacity: 0.92,
      reflectivity: 0.9,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    mainGroup.add(coreMesh);

    // Precision architectural wireframe cage
    const wireframeGeo = new THREE.WireframeGeometry(coreGeo);
    const wireframeMat = new THREE.LineBasicMaterial({
      color: 0x92958b,
      transparent: true,
      opacity: 0.45,
    });
    const wireframe = new THREE.LineSegments(wireframeGeo, wireframeMat);
    mainGroup.add(wireframe);

    // 2. Inner Glowing Energy Node (Octahedron Pulsar)
    const innerGeo = new THREE.OctahedronGeometry(0.75, 0);
    const innerMat = new THREE.MeshPhysicalMaterial({
      color: 0xd4ff4f,
      emissive: 0xd4ff4f,
      emissiveIntensity: 0.85,
      roughness: 0.2,
      metalness: 0.4,
      transparent: true,
      opacity: 0.8,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    mainGroup.add(innerMesh);

    // 3. Vertex Nodes (Neural State Anchors)
    const posAttr = coreGeo.getAttribute("position");
    const nodeGeo = new THREE.SphereGeometry(0.065, 16, 16);
    const limeMat = new THREE.MeshBasicMaterial({ color: 0xd4ff4f });
    const amberMat = new THREE.MeshBasicMaterial({ color: 0xd9a66c });
    const ivoryMat = new THREE.MeshBasicMaterial({ color: 0xf1f0e8 });

    const nodesGroup = new THREE.Group();
    const seen = new Set<string>();

    for (let i = 0; i < posAttr.count; i++) {
      const x = Number(posAttr.getX(i).toFixed(3));
      const y = Number(posAttr.getY(i).toFixed(3));
      const z = Number(posAttr.getZ(i).toFixed(3));
      const key = `${x},${y},${z}`;

      if (!seen.has(key)) {
        seen.add(key);
        const mat = i % 3 === 0 ? limeMat : i % 5 === 0 ? amberMat : ivoryMat;
        const sphere = new THREE.Mesh(nodeGeo, mat);
        sphere.position.set(x, y, z);
        nodesGroup.add(sphere);
      }
    }
    mainGroup.add(nodesGroup);

    // 4. Concentric Machined Titanium Orbital Rings (System Orchestration Loops)
    const ringMatLime = new THREE.MeshPhysicalMaterial({
      color: 0xd4ff4f,
      metalness: 0.9,
      roughness: 0.2,
      emissive: 0xd4ff4f,
      emissiveIntensity: 0.15,
      transparent: true,
      opacity: 0.65,
    });
    const ring1Geo = new THREE.TorusGeometry(2.35, 0.022, 16, 120);
    const ring1 = new THREE.Mesh(ring1Geo, ringMatLime);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 5;
    mainGroup.add(ring1);

    const ringMatCharcoal = new THREE.MeshPhysicalMaterial({
      color: 0x92958b,
      metalness: 0.95,
      roughness: 0.15,
      transparent: true,
      opacity: 0.45,
    });
    const ring2Geo = new THREE.TorusGeometry(2.85, 0.016, 16, 120);
    const ring2 = new THREE.Mesh(ring2Geo, ringMatCharcoal);
    ring2.rotation.x = -Math.PI / 3.5;
    ring2.rotation.z = Math.PI / 4;
    mainGroup.add(ring2);

    const ringMatAmber = new THREE.MeshPhysicalMaterial({
      color: 0xd9a66c,
      metalness: 0.9,
      roughness: 0.2,
      emissive: 0xd9a66c,
      emissiveIntensity: 0.2,
      transparent: true,
      opacity: 0.5,
    });
    const ring3Geo = new THREE.TorusGeometry(3.3, 0.012, 12, 140);
    const ring3 = new THREE.Mesh(ring3Geo, ringMatAmber);
    ring3.rotation.y = Math.PI / 2.2;
    ring3.rotation.x = Math.PI / 6;
    mainGroup.add(ring3);

    // 5. Luminous Data Filaments (Curved Splines connecting coordinates)
    const curve1 = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-1.8, 1.2, -0.8),
      new THREE.Vector3(-0.4, 2.1, 0.9),
      new THREE.Vector3(1.6, 0.8, 1.2),
      new THREE.Vector3(1.2, -1.4, -0.5),
      new THREE.Vector3(-1.2, -1.8, 0.6),
      new THREE.Vector3(-1.8, 1.2, -0.8),
    ]);
    const filamentGeo1 = new THREE.TubeGeometry(curve1, 80, 0.014, 8, true);
    const filamentMat1 = new THREE.MeshBasicMaterial({
      color: 0xd4ff4f,
      transparent: true,
      opacity: 0.45,
    });
    const filament1 = new THREE.Mesh(filamentGeo1, filamentMat1);
    mainGroup.add(filament1);

    // 6. Ambient Vector Space Particle Cloud
    const particleCount = 280;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const cLime = new THREE.Color(0xd4ff4f);
    const cIvory = new THREE.Color(0xf1f0e8);
    const cAmber = new THREE.Color(0xd9a66c);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.0 + Math.random() * 2.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePos[i * 3 + 2] = radius * Math.cos(phi);

      const r = Math.random();
      const col = r > 0.7 ? cLime : r > 0.4 ? cIvory : cAmber;
      particleColors[i * 3] = col.r;
      particleColors[i * 3 + 1] = col.g;
      particleColors[i * 3 + 2] = col.b;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePos, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    mainGroup.add(particles);

    // 7. Cinematic Studio Lighting
    const ambientLight = new THREE.AmbientLight(0x181a16, 2.2);
    scene.add(ambientLight);

    // Strong Key Light (Acid Lime Rim)
    const keyLight = new THREE.DirectionalLight(0xd4ff4f, 3.2);
    keyLight.position.set(5, 6, 4);
    scene.add(keyLight);

    // Warm Ivory Fill Light
    const fillLight = new THREE.DirectionalLight(0xf1f0e8, 2.0);
    fillLight.position.set(-6, -2, 3);
    scene.add(fillLight);

    // Amber Counterpoint Backlight
    const backLight = new THREE.PointLight(0xd9a66c, 2.8, 12);
    backLight.position.set(0, -4, -3);
    scene.add(backLight);

    setIsLoaded(true);

    // Pointer Parallax
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onPointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 1.8;
      targetY = y * 1.8;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const rect = container.getBoundingClientRect();
        const x = (touch.clientX - rect.left) / rect.width - 0.5;
        const y = (touch.clientY - rect.top) / rect.height - 0.5;
        targetX = x * 1.4;
        targetY = y * 1.4;
      }
    };

    window.addEventListener("mousemove", onPointerMove, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    let isVisible = true;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    // Smooth Animation Frame Loop
    let animationId: number;
    const clock = new THREE.Clock();

    const render = () => {
      animationId = requestAnimationFrame(render);
      if (!isVisible) return;

      const time = clock.getElapsedTime();

      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      // Group rotation
      mainGroup.rotation.y = time * 0.18 + currentX * 0.9;
      mainGroup.rotation.x = Math.sin(time * 0.12) * 0.15 + currentY * 0.7;
      mainGroup.position.y = Math.sin(time * 0.9) * 0.1;

      // Inner pulsar counter-rotation
      innerMesh.rotation.y = -time * 0.4;
      innerMesh.rotation.z = time * 0.3;
      const innerScale = 0.9 + Math.sin(time * 3) * 0.08;
      innerMesh.scale.set(innerScale, innerScale, innerScale);

      // Orbital rings independent velocities
      ring1.rotation.z = time * 0.22;
      ring2.rotation.z = -time * 0.16;
      ring3.rotation.x = time * 0.14;

      filament1.rotation.y = time * 0.08;
      particles.rotation.y = -time * 0.04;

      renderer.render(scene, camera);
    };

    render();

    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animationId);

      coreGeo.dispose();
      coreMat.dispose();
      wireframeGeo.dispose();
      wireframeMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      nodeGeo.dispose();
      limeMat.dispose();
      amberMat.dispose();
      ivoryMat.dispose();
      ring1Geo.dispose();
      ringMatLime.dispose();
      ring2Geo.dispose();
      ringMatCharcoal.dispose();
      ring3Geo.dispose();
      ringMatAmber.dispose();
      filamentGeo1.dispose();
      filamentMat1.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[460px] sm:h-[560px] lg:h-[640px] flex items-center justify-center">
      <div
        ref={containerRef}
        className={`w-full h-full transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Interactive 3D Computational Artifact"
      />

      {!isSupported && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-64 h-64 border border-obsidian-border rounded-full flex items-center justify-center bg-obsidian-surface/60">
            <div className="w-48 h-48 border border-lime-accent/30 rounded-full animate-spin-slow flex items-center justify-center">
              <span className="font-mono text-xs text-lime-accent tracking-widest uppercase">
                SYSTEMS_CORE
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Architectural Telemetry Badges */}
      <div className="absolute top-6 left-6 pointer-events-none font-mono text-[11px] text-stone flex flex-col gap-1">
        <span className="text-lime-accent font-semibold flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-lime-accent animate-ping" />
          SYS_METAPHOR // COMPUTATIONAL ARTIFACT
        </span>
        <span className="text-stone-dark">COORDS: 12.9716° N, 77.5946° E</span>
        <span className="text-stone">NODES: 32 STATEFUL // DENSE_VEC: 384D</span>
      </div>

      <div className="absolute bottom-6 right-6 pointer-events-none font-mono text-[11px] text-stone-dark text-right hidden sm:block">
        <span className="text-ivory-dim font-medium">REACTIVE 3D SCULPTURE</span>
        <div className="text-stone">CURSOR LERP &amp; ROTATIONAL MOMENTUM</div>
      </div>
    </div>
  );
}
