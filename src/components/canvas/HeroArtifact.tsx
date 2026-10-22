"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function HeroArtifact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSupported, setIsSupported] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIsLoaded(true);
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    // WebGL support check
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

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0b0c0a, 0.08);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Group for all elements
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Central Core - Geometric Icosahedron with Wireframe & Subtle Face Fill
    const coreGeo = new THREE.IcosahedronGeometry(1.6, 1);
    
    // Core translucent material
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0x141612,
      roughness: 0.2,
      metalness: 0.8,
      transmission: 0.6,
      thickness: 1.2,
      transparent: true,
      opacity: 0.85,
      wireframe: false,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    mainGroup.add(coreMesh);

    // Wireframe cage over core
    const wireframeGeo = new THREE.WireframeGeometry(coreGeo);
    const wireframeMat = new THREE.LineBasicMaterial({
      color: 0x92958b,
      transparent: true,
      opacity: 0.35,
    });
    const wireframeMesh = new THREE.LineSegments(wireframeGeo, wireframeMat);
    mainGroup.add(wireframeMesh);

    // 2. Vertices as Luminous Computing Nodes (Acid Lime & Amber accents)
    const nodePositions = coreGeo.getAttribute("position");
    const nodeGeo = new THREE.SphereGeometry(0.045, 12, 12);
    const limeNodeMat = new THREE.MeshBasicMaterial({ color: 0xd4ff4f });
    const amberNodeMat = new THREE.MeshBasicMaterial({ color: 0xd9a66c });
    const stoneNodeMat = new THREE.MeshBasicMaterial({ color: 0xf1f0e8 });

    const nodesGroup = new THREE.Group();
    const uniquePos = new Set<string>();

    for (let i = 0; i < nodePositions.count; i++) {
      const x = Number(nodePositions.getX(i).toFixed(2));
      const y = Number(nodePositions.getY(i).toFixed(2));
      const z = Number(nodePositions.getZ(i).toFixed(2));
      const key = `${x},${y},${z}`;

      if (!uniquePos.has(key)) {
        uniquePos.add(key);
        const mat = i % 4 === 0 ? limeNodeMat : i % 5 === 0 ? amberNodeMat : stoneNodeMat;
        const node = new THREE.Mesh(nodeGeo, mat);
        node.position.set(x, y, z);
        nodesGroup.add(node);
      }
    }
    mainGroup.add(nodesGroup);

    // 3. Orbital Architectural Rings (Systems Orchestration Loops)
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0xd4ff4f,
      transparent: true,
      opacity: 0.22,
      wireframe: true,
    });
    const ringGeo1 = new THREE.TorusGeometry(2.4, 0.015, 8, 80);
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    mainGroup.add(ring1);

    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x92958b,
      transparent: true,
      opacity: 0.28,
      wireframe: true,
    });
    const ringGeo2 = new THREE.TorusGeometry(2.9, 0.012, 6, 90);
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.z = Math.PI / 5;
    mainGroup.add(ring2);

    // Outer subtle coordinate ring
    const ringMat3 = new THREE.MeshBasicMaterial({
      color: 0xd9a66c,
      transparent: true,
      opacity: 0.2,
      wireframe: true,
    });
    const ringGeo3 = new THREE.TorusGeometry(3.3, 0.008, 4, 100);
    const ring3 = new THREE.Mesh(ringGeo3, ringMat3);
    ring3.rotation.y = Math.PI / 2.5;
    mainGroup.add(ring3);

    // 4. Ambient Data Stream Particles (Vector space embeddings)
    const particleCount = 220;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const limeColor = new THREE.Color(0xd4ff4f);
    const ivoryColor = new THREE.Color(0xf1f0e8);
    const stoneColor = new THREE.Color(0x92958b);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.0 + Math.random() * 2.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePos[i * 3 + 2] = radius * Math.cos(phi);

      const colorChoice = Math.random();
      const col = colorChoice > 0.75 ? limeColor : colorChoice > 0.4 ? ivoryColor : stoneColor;
      particleColors[i * 3] = col.r;
      particleColors[i * 3 + 1] = col.g;
      particleColors[i * 3 + 2] = col.b;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePos, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.04,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    mainGroup.add(particles);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x1a1c18, 2.5);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xd4ff4f, 1.8);
    directionalLight1.position.set(4, 5, 3);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xd9a66c, 1.2);
    directionalLight2.position.set(-4, -3, 2);
    scene.add(directionalLight2);

    setIsLoaded(true);

    // Mouse & Touch Interaction tracking
    let targetX = 0;
    let targetY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 1.5;
      targetY = y * 1.5;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const rect = container.getBoundingClientRect();
        const x = (touch.clientX - rect.left) / rect.width - 0.5;
        const y = (touch.clientY - rect.top) / rect.height - 0.5;
        targetX = x * 1.2;
        targetY = y * 1.2;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    // Visibility-aware render loop (IntersectionObserver)
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

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const time = clock.getElapsedTime();

      // Smooth mouse lerp
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Group idle & mouse rotation
      mainGroup.rotation.y = time * 0.15 + mouseX * 0.8;
      mainGroup.rotation.x = Math.sin(time * 0.1) * 0.15 + mouseY * 0.6;

      // Subtle float
      mainGroup.position.y = Math.sin(time * 0.8) * 0.08;

      // Independent counter-rotation for nested architectural loops
      ring1.rotation.z = time * 0.2;
      ring2.rotation.z = -time * 0.15;
      ring3.rotation.x = time * 0.12;

      // Node subtle pulse
      const pulseScale = 1 + Math.sin(time * 2.5) * 0.03;
      nodesGroup.scale.set(pulseScale, pulseScale, pulseScale);

      // Particle rotation
      particles.rotation.y = -time * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);

      // Dispose Three.js objects
      coreGeo.dispose();
      coreMat.dispose();
      wireframeGeo.dispose();
      wireframeMat.dispose();
      nodeGeo.dispose();
      limeNodeMat.dispose();
      amberNodeMat.dispose();
      stoneNodeMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      ringGeo3.dispose();
      ringMat3.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[380px] sm:h-[480px] lg:h-[580px] flex items-center justify-center">
      {/* 3D Canvas Mount */}
      <div
        ref={containerRef}
        className={`w-full h-full transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Interactive 3D Computational Artifact representing Systems in Motion"
      />

      {/* Reduced motion or WebGL fallback */}
      {!isSupported && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-64 h-64 border border-obsidian-border rounded-full flex items-center justify-center bg-obsidian-surface/60">
            <div className="w-48 h-48 border border-lime-accent/30 rounded-full animate-spin-slow flex items-center justify-center">
              <div className="w-32 h-32 border border-amber-accent/30 rounded-full flex items-center justify-center">
                <span className="font-mono text-xs text-lime-accent tracking-widest uppercase">
                  SYSTEM_CORE
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* HUD Telemetry Overlay on 3D viewport */}
      <div className="absolute top-4 left-4 pointer-events-none font-mono text-[10px] text-stone-dark flex flex-col gap-0.5">
        <span className="text-lime-accent/90 flex items-center gap-1.5">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-lime-accent animate-ping" />
          SYS_ARTIFACT // ACTIVE
        </span>
        <span>LAT: 12.9716° N // LON: 77.5946° E</span>
        <span className="text-stone">NODES: 32 // DENSE_VEC: 384D</span>
      </div>

      <div className="absolute bottom-4 right-4 pointer-events-none font-mono text-[10px] text-stone-dark text-right hidden sm:block">
        <span>INTERACTIVE COMPUTATIONAL SCULPTURE</span>
        <div className="text-ivory-dim">DRAG / CURSOR TO EXAMINE MATRIX</div>
      </div>
    </div>
  );
}
