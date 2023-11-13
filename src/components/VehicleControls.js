import { useFrame, useThree } from '@react-three/fiber';
import { useKeyboardControls } from '../hooks/useKeyboardControls';

export const VehicleControls = (props) => {
  const { camera } = useThree();
  const { forward, backward, left, right } = useKeyboardControls();

  useFrame((state, delta) => {
    const vehicle = props.vehicleRef.current;

    if (vehicle) {
      const speed = forward ? 5 : backward ? -5 : 0;
      const steer = left ? -1 : right ? 1 : 0;
      vehicle.api.velocity.set(speed * delta, 0, 0);
      vehicle.api.rotation.set(0, steer * delta, 0);

      // Update camera position and lookAt
      camera.position.lerp(vehicle.position.clone().add(new THREE.Vector3(0, 5, -10)), 0.05);
      camera.lookAt(vehicle.position);
    }
  });

  return null;
};
