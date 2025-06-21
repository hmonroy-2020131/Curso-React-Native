import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Explorar</ThemedText>
      </ThemedView>

      <ThemedText>
        Esta aplicación incluye código de ejemplo para ayudarte a comenzar.
      </ThemedText>

      <Collapsible title="Ruteo basado en archivos">
        <ThemedText>
          Esta app tiene dos pantallas:{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> y{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>.
        </ThemedText>
        <ThemedText>
          El archivo de layout en{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText> configura la
          navegación por pestañas.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">Más información</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title="Soporte para Android, iOS y web">
        <ThemedText>
          Puedes abrir este proyecto en Android, iOS y también en la web. Para abrir la versión web,
          presiona <ThemedText type="defaultSemiBold">w</ThemedText> en la terminal donde se ejecuta
          el proyecto.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Imágenes">
        <ThemedText>
          Para imágenes estáticas, puedes usar los sufijos{' '}
          <ThemedText type="defaultSemiBold">@2x</ThemedText> y{' '}
          <ThemedText type="defaultSemiBold">@3x</ThemedText> para soportar distintas densidades de
          pantalla.
        </ThemedText>
        <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">Más información</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title="Fuentes personalizadas">
        <ThemedText>
          Abre <ThemedText type="defaultSemiBold">app/_layout.tsx</ThemedText> para ver cómo cargar
          <ThemedText style={{ fontFamily: 'SpaceMono' }}> fuentes personalizadas como esta.</ThemedText>
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
          <ThemedText type="link">Más información</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title="Modos claro y oscuro">
        <ThemedText>
          Esta plantilla soporta modo claro y oscuro. El hook{' '}
          <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> permite detectar el modo
          actual del usuario y ajustar los colores del UI en consecuencia.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">Más información</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title="Animaciones">
        <ThemedText>
          Esta plantilla incluye un ejemplo de animación. El componente{' '}
          <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText> usa la potente
          librería <ThemedText type="defaultSemiBold">react-native-reanimated</ThemedText> para
          crear una animación de saludo.
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              El componente{' '}
              <ThemedText type="defaultSemiBold">
                components/ParallaxScrollView.tsx
              </ThemedText>{' '}
              proporciona un efecto de paralaje para la imagen del encabezado.
            </ThemedText>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
