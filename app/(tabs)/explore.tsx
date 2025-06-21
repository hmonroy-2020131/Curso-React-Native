import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function ExplorarPantalla() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#E6E6FA', dark: '#2C2C2C' }}
      headerImage={
        <IconSymbol
          size={300}
          color="#6A6A6A"
          name="sparkles"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.tituloContenedor}>
        <ThemedText type="title">Explorar</ThemedText>
      </ThemedView>
      <ThemedText>Descubre funciones y herramientas incluidas en esta app.</ThemedText>

      <Collapsible title="Navegación por archivos">
        <ThemedText>
          Este proyecto contiene dos pantallas:{" "}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> y{" "}
          <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>.
        </ThemedText>
        <ThemedText>
          La navegación entre pestañas está configurada en{" "}
          <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">Más información</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title="Compatibilidad multiplataforma">
        <ThemedText>
          Puedes ejecutar esta aplicación en Android, iOS y web. En la terminal, presiona{" "}
          <ThemedText type="defaultSemiBold">w</ThemedText> para abrir la versión web.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Imágenes">
        <ThemedText>
          Usa sufijos <ThemedText type="defaultSemiBold">@2x</ThemedText> y{" "}
          <ThemedText type="defaultSemiBold">@3x</ThemedText> para mejorar la calidad según la
          densidad de pantalla.
        </ThemedText>
        <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">Más información</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title="Fuentes personalizadas">
        <ThemedText>
          Revisa <ThemedText type="defaultSemiBold">app/_layout.tsx</ThemedText> para ver cómo se
          cargan fuentes como{" "}
          <ThemedText style={{ fontFamily: 'SpaceMono' }}>esta misma fuente</ThemedText>.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
          <ThemedText type="link">Más información</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title="Modo claro y oscuro">
        <ThemedText>
          Esta plantilla admite temas claro y oscuro mediante el hook{" "}
          <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText>.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">Más información</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title="Animaciones">
        <ThemedText>
          Se incluye una animación en el componente{" "}
          <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText> usando{" "}
          <ThemedText type="defaultSemiBold">react-native-reanimated</ThemedText>.
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              El encabezado de esta pantalla tiene efecto parallax desde{" "}
              <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>.
            </ThemedText>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    position: 'absolute',
    bottom: -80,
    left: -20,
  },
  tituloContenedor: {
    flexDirection: 'row',
    gap: 8,
  },
});
