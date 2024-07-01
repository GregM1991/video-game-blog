<script lang="ts">
	import { T as Threlte } from '@threlte/core';
	import { Float } from '@threlte/extras';
	import * as THREE from 'three';

	export let position: [number, number, number] = [0, 0, 0];
	export let geometry: THREE.BufferGeometry = new THREE.IcosahedronGeometry(3);
	export let rate = 0.5;

	const material = new THREE.MeshStandardMaterial({
		color: 'tomato',
		roughness: 0.1,
		metalness: 0.5
	});
</script>

<Threlte.Group position={position.map((p) => p * 2)}>
	<Float
		speed={5 * rate}
		rotationSpeed={5 * rate}
		rotationIntensity={6 * rate}
		floatIntensity={5 * rate}
	>
		<Threlte.Mesh {geometry} {material}></Threlte.Mesh>
	</Float>
</Threlte.Group>
