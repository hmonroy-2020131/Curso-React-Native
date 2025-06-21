import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function PantallaInicio() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#C2E7E5', dark: '#1A2F33' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.tituloContenedor}>
        <ThemedText type="title">¡Bienvenido!</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.pasoContenedor}>
        <ThemedText type="subtitle">Paso 1: Prueba</ThemedText>
        <ThemedText>
          Edita <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> para ver los
          cambios. Presiona{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12',
            })}
          </ThemedText>{' '}
          para abrir las herramientas de desarrollo.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.pasoContenedor}>
        <ThemedText type="subtitle">Paso 2: Explora</ThemedText>
        <ThemedText>
          Pulsa en la pestaña Explorar para conocer todo lo que incluye esta aplicación de inicio.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.pasoContenedor}>
        <ThemedText type="subtitle">Paso 3: Comienza desde cero</ThemedText>
        <ThemedText>
          Cuando estés listo, ejecuta{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> para crear una nueva
          carpeta <ThemedText type="defaultSemiBold">app</ThemedText>. La actual se moverá a{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  tituloContenedor: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  pasoContenedor: {
    gap: 8,
    marginBottom: 12,
  },
  reactLogo: {
    height: 180,
    width: 300,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
