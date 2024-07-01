<script lang="ts">
	import { T as Threlte } from '@threlte/core';
	import { Float } from '@threlte/extras';
	import * as THREE from 'three';
	import { gsap } from 'gsap';

	export let position: [number, number, number] = [0, 0, 0];
	export let geometry: THREE.BufferGeometry = new THREE.IcosahedronGeometry(3);
	export let rate = 0.5;

	const materialParams = [
		{ color: 0x2ecc71, roughness: 0 },
		{ color: 0xf1c40f, roughness: 0.4 },
		{ color: 0xe74c3c, roughness: 0.1 },
		{ color: 0x8e44ad, roughness: 0.1 },
		{ color: 0x1abc9c, roughness: 0.1 },
		{ color: 0x2980b9, roughness: 0, metalness: 0.5 },
		{ color: 0x2c3e50, roughness: 0.1, metalness: 0.5 }
	];

	function getRandomMaterial() {
		return new THREE.MeshStandardMaterial(gsap.utils.random(materialParams));
	}
</script>

<Threlte.Group position={position.map((p) => p * 2)}>
	<Float
		speed={5 * rate}
		rotationSpeed={5 * rate}
		rotationIntensity={6 * rate}
		floatIntensity={5 * rate}
	>
		<Threlte.Mesh {geometry} material={getRandomMaterial()}></Threlte.Mesh>
	</Float>
</Threlte.Group>
